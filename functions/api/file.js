// functions/api/file.js
// API handler for retrieving uploaded PDFs and worksheet images as binary data

export async function onRequestGet(context) {
    const kv = context.env.BUDDHIST_HOLIDAYS_KV;
    if (!kv) {
        return new Response("KV namespace not bound", { status: 500 });
    }

    const url = new URL(context.request.url);
    const key = url.searchParams.get("key");

    if (!key) {
        return new Response("Missing key parameter", { status: 400 });
    }

    const kvKey = `file_${key}`;
    const base64Data = await kv.get(kvKey);

    if (!base64Data) {
        return new Response("File not found", { status: 404 });
    }

    try {
        // Parse base64 data URL e.g. "data:application/pdf;base64,JVBERi0xLjQK..."
        const commaIdx = base64Data.indexOf(",");
        if (commaIdx === -1) {
            return new Response("Invalid file format in storage", { status: 500 });
        }

        const header = base64Data.substring(0, commaIdx);
        const body = base64Data.substring(commaIdx + 1);

        // Extract mime type
        const mimeMatch = header.match(/data:(.*?);base64/);
        const mimeType = mimeMatch ? mimeMatch[1] : "application/octet-stream";

        // Convert base64 to binary
        const binaryString = atob(body);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return new Response(bytes, {
            headers: {
                "Content-Type": mimeType,
                "Cache-Control": "public, max-age=86400", // Cache for 1 day
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (err) {
        return new Response("Error processing file: " + err.message, { status: 500 });
    }
}
