// Practice Agent Logic
async function fetchPracticeSession(topic, context) {
    console.log("[Practice Agent] Generating practice session...");

    // Check if the topic involves logic/coding
    if (topic && topic.toLowerCase().includes("programming") || topic.toLowerCase().includes("coding")) {
        console.log("Delegating practice to Coding Assistant Agent...");
    }

    return {
        mcqs: [
            { q: "Sample MCQ 1", o: ["A", "B", "C", "D"], a: 0, e: "Explanation" }
        ],
        shortAns: [
            { q: "Sample SA 1", a: "Answer" }
        ],
        mockEvaluation: {
            score: "6/10",
            weakTopics: ["Flip Flops", "Counters"],
            recommendedRevision: "Digital Electronics"
        }
    };
}
