// functions/api/upload.js
// API handler for uploading PDFs and worksheet images

export async function onRequestOptions(context) {
    return new Response(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
        }
    });
}

export async function onRequestPost(context) {
    const kv = context.env.BUDDHIST_HOLIDAYS_KV;
    if (!kv) {
        return new Response(JSON.stringify({ error: "KV namespace not bound" }), {
            status: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    }

    try {
        const authHeader = context.request.headers.get("Authorization");
        
        // Load current settings to verify password
        const currentSettingsStr = await kv.get("settings");
        let correctPassword = "5018";
        if (currentSettingsStr) {
            const currentSettings = JSON.parse(currentSettingsStr);
            correctPassword = currentSettings.teacherPassword || "5018";
        }

        if (authHeader !== correctPassword) {
            return new Response(JSON.stringify({ error: "รหัสผ่านไม่ถูกต้อง (Unauthorized)" }), {
                status: 401,
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
        }

        const body = await context.request.json();
        const { key, data } = body;

        if (!key) {
            return new Response(JSON.stringify({ error: "Missing key" }), {
                status: 400,
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
        }

        const kvKey = `file_${key}`;

        if (data === null || data === "") {
            // Delete file
            await kv.delete(kvKey);
            return new Response(JSON.stringify({ success: true, message: "File deleted" }), {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
        } else {
            // Save file (Base64 string)
            await kv.put(kvKey, data);
            return new Response(JSON.stringify({ success: true, message: "File saved" }), {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
        }
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 400,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    }
}
