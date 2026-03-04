// API Integration with Google Gemini v1.5 Flash
const GEMINI_API_KEY = "AIzaSyBHvzZ1kOg4GNMENrpk0ntQO6-lnDq32hs";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

/**
 * Calls the Gemini API with a system prompt and a user query, expecting JSON output.
 */
async function askGeminiAPI(systemInstruction, userContent) {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{ text: systemInstruction }]
                },
                contents: [{
                    role: "user",
                    parts: [{ text: userContent }]
                }],
                generationConfig: {
                    response_mime_type: "application/json"
                }
            })
        });

        if (!response.ok) {
            console.error("API Error Response:", await response.text());
            throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts.length > 0) {
            const jsonString = data.candidates[0].content.parts[0].text;
            return JSON.parse(jsonString);
        } else {
            throw new Error("Invalid structure returned from Gemini API");
        }
    } catch (err) {
        console.error("Gemini API request failed:", err);
        return null;
    }
}
