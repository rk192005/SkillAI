// Coordinator Agent Logic
function routeAgent(query) {
    const q = query.toLowerCase();
    if (q.includes("practice") || q.includes("quiz") || q.includes("mcq")) return "PracticeAgent";
    if (q.includes("exam") || q.includes("revision") || q.includes("important")) return "ExamAgent";
    if (q.includes("career") || q.includes("roadmap") || q.includes("job")) return "CareerAgent";
    if (q.includes("code") || q.includes("program") || q.includes("debug")) return "CodingAgent";
    if (q.includes("research") || q.includes("paper") || q.includes("thesis")) return "ResearchAgent";
    return "TutorAgent";
}

async function askCoordinator(query, context) {
    const agent = routeAgent(query);
    console.log(`[Coordinator] Routing request to: ${agent}`);

    // Simulate API delay
    await new Promise(r => setTimeout(r, 800));

    return {
        agent: agent,
        message: `Request routed to ${agent} for processing.`,
        context: context
    };
}
