// Practice Agent Logic
async function fetchPracticeSession(sub, level) {
    console.log(`[Practice Agent] Calling Gemini API for: ${sub}`);

    const systemPrompt = `You are the SkillAI Practice Agent.
Generate a strictly formatted JSON response giving an engineering student at ${level} level practice material for "${sub}".

Output strict JSON matching EXACTLY this schema (no json blockquotes, no markdown formatting, just raw JSON returning an object):
{
  "qs": [
    { "q": "Question Text", "m": 10, "d": "Medium", "t": "Theory" }
  ], // exactly 5 questions
  "mcqs": [
    { "q": "MCQ Question", "o": ["Opt A", "Opt B", "Opt C", "Opt D"], "a": 1, "e": "Feedback explanation" }
  ], // exactly 5 MCQs. 'a' is the 0-indexed integer of the correct option
  "sa": [
    { "q": "Short Question", "a": "Short Answer" }
  ], // exactly 3 short answers
  "patterns": [
    { "t": "Category Name", "p": "30%", "d": "Category Description" }
  ] // exactly 4 categories identifying exam patterns
}`;

    const data = await askGeminiAPI(systemPrompt, `Generate Practice Data for ${sub}`);
    return data;
}
