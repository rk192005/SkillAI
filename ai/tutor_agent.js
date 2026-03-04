// Tutor Agent Logic
async function fetchTutorExplanation(sub, level, rating, weakTopics, uni) {
    console.log(`[Tutor Agent] Calling Gemini API for: ${sub}`);

    const systemPrompt = `You are the SkillAI Tutor Agent.
Generate a structured JSON response for an engineering student learning "${sub}".
Student Profile: Level: ${level}, University: ${uni || "General"}, Self-Rating: ${rating}/5.
Weak topics to emphasize: ${weakTopics.length ? weakTopics.join(', ') : 'None'}.

Output strict JSON matching EXACTLY this schema (no markdown formatting, just JSON):
{
  "plan": [
    { "day": 1, "topic": "String", "act": "String with study activities", "time": "3h", "prio": "h" }
  ],  // exactly 7 items
  "formulas": [
    { "t": "Category Name", "items": ["Formula 1", "Formula 2"] }
  ],
  "revision": "A short 3-sentence revision summary paragraph.",
  "strategy": [
    { "t": "<strong>Tip Name</strong> — description of tip" }
  ], // exactly 3 items
  "timeAlloc": [
    { "topic": "Topic Name", "hrs": 5, "pct": 25, "c": "#34D399" }
  ] // exactly 4 items adding up to 100%
}`;

    // Use the api integration layer
    const data = await askGeminiAPI(systemPrompt, `Generate Tutor Data for ${sub}`);
    return data;
}
