// functions/api/settings.js
// API handler for teacher settings

export async function onRequestOptions(context) {
    return new Response(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        }
    });
}

export async function onRequestGet(context) {
    const kv = context.env.BUDDHIST_HOLIDAYS_KV;
    if (!kv) {
        return new Response(JSON.stringify({ error: "KV namespace not bound" }), {
            status: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    }

    const settings = await kv.get("settings");
    return new Response(settings || JSON.stringify({}), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
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

        const incomingSettings = await context.request.json();
        
        // Save to KV
        await kv.put("settings", JSON.stringify(incomingSettings));

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 400,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
    }
}
