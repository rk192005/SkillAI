
# 🏗️ SkillAI Multi-Agent Architecture Diagram

## System Architecture Overview

```
┌──────────────────────────────────────────────────────────────────────┐
│                     SKILLAI MULTI-AGENT PLATFORM                      │
│                       AMD Slingshot 2026                              │
└──────────────────────────────────────────────────────────────────────┘

                              USER LAYER
                    ┌─────────────────────────────┐
                    │   Student / Educator UI      │
                    │  (multi-agent.html)         │
                    │                             │
                    │  📊 Dashboard               │
                    │  🎯 Profile Manager         │
                    │  ❓ Query Input            │
                    │  📈 Progress Tracking       │
                    └──────────────┬──────────────┘
                                   │
                ┌──────────────────┴──────────────────┐
                │                                     │
        ┌───────▼────────┐              ┌────────────▼─────────┐
        │ Student Input  │              │ System Configuration  │
        ├────────────────┤              ├──────────────────────┤
        │ • Query        │              │ • Language           │
        │ • Profile      │              │ • Proficiency Level  │
        │ • Preferences  │              │ • Academic Level     │
        │ • Goals        │              │ • Career Path        │
        └────────┬───────┘              └─────────────────────┘
                 │                               │
                 └──────────────┬────────────────┘
                                │
                 ┌──────────────▼────────────────┐
                 │                               │
                 │   COORDINATOR AGENT (📊)      │
                 │                               │
                 │  ┌─────────────────────────┐  │
                 │  │ Intent Recognition      │  │
                 │  │ - NLP Analysis         │  │
                 │  │ - Pattern Matching     │  │
                 │  └─────────────────────────┘  │
                 │                               │
                 │  ┌─────────────────────────┐  │
                 │  │ Agent Selection         │  │
                 │  │ - Route to experts      │  │
                 │  │ - Multi-agent routing   │  │
                 │  └─────────────────────────┘  │
                 │                               │
                 │  ┌─────────────────────────┐  │
                 │  │ Response Orchestration  │  │
                 │  │ - Combine responses     │  │
                 │  │ - Format output         │  │
                 │  └─────────────────────────┘  │
                 │                               │
                 └─────┬──────────────────────────┘
                       │
        ┌──────────────┼──────────────┬──────────────┬──────────────┐
        │              │              │              │              │
        ▼              ▼              ▼              ▼              ▼
   ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
   │ TUTOR  │    │PRACTICE│    │  EXAM  │    │CAREER  │    │CODING  │
   │ AGENT  │    │ AGENT  │    │ AGENT  │    │ AGENT  │    │ AGENT  │
   │  📚    │    │  ✏️    │    │  📖    │    │  🎯    │    │  💻    │
   └────┬───┘    └────┬───┘    └────┬───┘    └────┬───┘    └────┬───┘
        │             │             │             │             │
        │        ┌────▼────┐       │             │             │
        │        │  RESEARCH       │             │             │
        │        │  AGENT   │       │             │             │
        │        │   🔬     │       │             │             │
        │        └──────────┘       │             │             │
        │                           │             │             │
        └───┬───────────────────────┴─────────────┴─────────────┘
            │
            │  Each Agent Provides:
            │  ├─ Specialized expertise
            │  ├─ Content generation
            │  ├─ Adaptive responses
            │  └─ Quality assessment
            │
    ┌───────▼──────────────────────────────────────────┐
    │         KNOWLEDGE BASE & DATA LAYER               │
    ├────────────────────────────────────────────────────┤
    │                                                    │
    │  ┌──────────────────────────────────────────────┐ │
    │  │  CURRICULUM DATABASE (database.js)           │ │
    │  │                                               │ │
    │  │  8 Branches:                                 │ │
    │  │  ├─ CSE (8 semesters, 40+ subjects)         │ │
    │  │  ├─ ECE (8 semesters, 40+ subjects)         │ │
    │  │  ├─ ME (8 semesters, 40+ subjects)          │ │
    │  │  ├─ EEE (8 semesters, 40+ subjects)         │ │
    │  │  ├─ CE (8 semesters, 40+ subjects)          │ │
    │  │  ├─ AIDS (8 semesters, 40+ subjects)        │ │
    │  │  ├─ IT (8 semesters, 40+ subjects)          │ │
    │  │  └─ BME (8 semesters, 40+ subjects)         │ │
    │  │                                               │ │
    │  │  Academic Levels:                            │ │
    │  │  ├─ Undergraduate (Semesters 1-8)           │ │
    │  │  ├─ Postgraduate (M.Tech, 4 semesters)      │ │
    │  │  └─ Doctoral (PhD, structured program)      │ │
    │  │                                               │ │
    │  │  Career Paths: 8+ major paths                │ │
    │  │  Topics: 300+ unique subjects                │ │
    │  └──────────────────────────────────────────────┘ │
    │                                                    │
    │  ┌──────────────────────────────────────────────┐ │
    │  │  KNOWLEDGE ARTIFACTS                         │ │
    │  │                                               │ │
    │  │  ├─ Concepts & definitions                   │ │
    │  │  ├─ Practice questions (MCQ, SAQ, Num)      │ │
    │  │  ├─ Code examples (4 languages)             │ │
    │  │  ├─ Exam patterns (previous papers)         │ │
    │  │  ├─ Career skill maps                       │ │
    │  │  ├─ Research guidelines                     │ │
    │  │  └─ Interview questions                     │ │
    │  └──────────────────────────────────────────────┘ │
    │                                                    │
    │  ┌──────────────────────────────────────────────┐ │
    │  │  METADATA & INDEXES                          │ │
    │  │                                               │ │
    │  │  ├─ Subject difficulty ratings              │ │
    │  │  ├─ Prerequisite chains                     │ │
    │  │  ├─ Exam frequency weights                  │ │
    │  │  ├─ Career relevance scores                 │ │
    │  │  ├─ Skill associations                      │ │
    │  │  └─ Topic relationships                     │ │
    │  └──────────────────────────────────────────────┘ │
    │                                                    │
    └────────────────────────────────────────────────────┘
            │
            │  (Ready for integration with:)
            │  - Vector DB (Pinecone)
            │  - MongoDB Atlas
            │  - Redis Cache
            │  - LLM Backend
            │
    ┌───────▼──────────────────────────────────────────┐
    │       EXTERNAL SYSTEMS (PHASE 2)                  │
    ├────────────────────────────────────────────────────┤
    │                                                    │
    │  Backend API Layer                               │
    │  ├─ Node.js + Express                           │
    │  ├─ Firebase Auth                               │
    │  └─ REST endpoints                              │
    │                                                    │
    │  AI/ML Layer                                     │
    │  ├─ LLM: Llama 3 / Mistral                      │
    │  ├─ AMD ROCm Optimization                       │
    │  ├─ LangChain Orchestration                     │
    │  └─ Vector Search                               │
    │                                                    │
    │  Data Layer                                      │
    │  ├─ MongoDB Atlas (documents)                   │
    │  ├─ Pinecone (vector DB)                        │
    │  ├─ Redis (cache)                               │
    │  └─ User DB (progress tracking)                 │
    │                                                    │
    │  Infrastructure                                  │
    │  ├─ Docker (containerization)                   │
    │  ├─ AWS (AMD instances)                         │
    │  ├─ Kubernetes (scaling)                        │
    │  └─ GitHub Actions (CI/CD)                      │
    │                                                    │
    └────────────────────────────────────────────────────┘
                       │
                       │
                ┌──────▼───────┐
                │  OUTPUT LAYER │
                ├───────────────┤
                │ Formatted     │
                │ Personalized  │
                │ Responses     │
                └───────┬───────┘
                        │
                ┌───────▼────────────────────┐
                │  USER RECEIVES:             │
                │                            │
                │  📚 Tutor: Explanation     │
                │  ✏️ Practice: Questions    │
                │  📖 Exam: Revision notes   │
                │  🎯 Career: Guidance      │
                │  💻 Coding: Code + tips   │
                │  🔬 Research: Support     │
                │  📊 Progress: Analytics   │
                │                            │
                └────────────────────────────┘
```

---

## Data Flow Diagram

```
STUDENT INTERACTION FLOW:

Student Profile          Query Input
    │                        │
    └────────────┬───────────┘
                 │
        ┌────────▼────────┐
        │  Coordinator    │
        │  Agent          │
        │                 │
        │ ┌─────────────┐ │
        │ │ Parse input │ │
        │ └─────────────┘ │
        │                 │
        │ ┌─────────────┐ │
        │ │ Identify    │ │
        │ │ intent      │ │
        │ └─────────────┘ │
        │                 │
        │ ┌─────────────┐ │
        │ │ Select      │ │
        │ │ agents      │ │
        │ └─────────────┘ │
        └────────┬────────┘
                 │
        ┌────────┴────────────────────────────┐
        │                                     │
    ┌───▼──┐  ┌────────┐  ┌────────┐  ┌────▼──┐
    │Tutor │  │Practice│  │ Exam   │  │Career │
    │Agent │  │ Agent  │  │ Agent  │  │Agent  │
    └───┬──┘  └───┬────┘  └───┬────┘  └──┬───┘
        │         │           │          │
        │    ┌────▼──────┐    │          │
        │    │ Research  │    │          │
        │    │  Agent    │    │          │
        │    └───┬───────┘    │          │
        │        │            │          │
    ┌───▼────────┴────────────┴──────────▼───┐
    │  Knowledge Base Query                    │
    │  ├─ Subject lookup                      │
    │  ├─ Career skill mapping                │
    │  ├─ Practice question retrieval        │
    │  ├─ Research topic suggestions         │
    │  └─ Exam pattern analysis              │
    └─────────┬──────────────────────────────┘
              │
    ┌─────────▼──────────────┐
    │  Response Formatting    │
    │  ├─ Structure output    │
    │  ├─ Add metadata        │
    │  ├─ Rank by relevance  │
    │  └─ Personalize        │
    └─────────┬──────────────┘
              │
    ┌─────────▼──────────────┐
    │  Orchestration         │
    │  ├─ Combine responses  │
    │  ├─ Remove duplicates  │
    │  ├─ Optimize order     │
    │  └─ Final output       │
    └─────────┬──────────────┘
              │
        ┌─────▼───────────┐
        │  UI Rendering    │
        │  Display to User │
        │  Tabs + Content  │
        └──────────────────┘
```

---

## Agent Interaction Matrix

```
Which agents work together for different intents?

                    Concept  Practice  Exam   Career  Coding  Research
                    Learning Questions Prep   Plan    Help    Support
                    ───────  ────────  ────   ──────  ──────  ────────
Coordinator          ✓        ✓         ✓      ✓      ✓        ✓
Tutor                ✓        ✓         ✓      ✓      ✓        ✓
Practice             ✓        ✓         ✓      ✓      ✓        ✓
Exam                           ✓        ✓      ✓                
Career               ✓                  ✓      ✓                
Coding               ✓        ✓         ✓      ✓      ✓        
Research                      ✓         ✓      ✓             ✓

Key Combinations:
┌─────────────────────────────────────────────────────────────┐
│ Intent: "Learn DSA"                                         │
│ Agents: Tutor + Practice                                   │
│ Output: Explanation + 10 problems                          │
├─────────────────────────────────────────────────────────────┤
│ Intent: "Exam prep"                                         │
│ Agents: Exam + Practice + Tutor                            │
│ Output: Topics + revision + mock test                      │
├─────────────────────────────────────────────────────────────┤
│ Intent: "Career guidance"                                   │
│ Agents: Career + Tutor + Coding                            │
│ Output: Path + skills + projects                           │
├─────────────────────────────────────────────────────────────┤
│ Intent: "PhD research"                                      │
│ Agents: Research + Tutor + Coding                          │
│ Output: Topics + methodology + code                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Agent Specialization Detail

```
┌──────────────────────────────────────────────────────────────────┐
│                    AGENT SPECIALIZATION MAP                       │
└──────────────────────────────────────────────────────────────────┘

📚 TUTOR AGENT
├─ Input: Concept, Proficiency Level
├─ Processing:
│  ├─ Fetch concept definition
│  ├─ Adapt to proficiency (Bloom's taxonomy)
│  ├─ Generate examples
│  ├─ Create diagram descriptions
│  └─ Identify exam-likely topics
└─ Output:
   ├─ Explanation (structured)
   ├─ Key Points (5-6 items)
   ├─ Example (worked through)
   ├─ Diagram (ASCII/description)
   ├─ Exam Notes
   └─ Next Topics

✏️ PRACTICE AGENT
├─ Input: Topic, Proficiency, Question Count
├─ Processing:
│  ├─ Generate MCQs
│  ├─ Create SAQs
│  ├─ Design numericals
│  ├─ Set difficulty levels
│  └─ Provide solutions
└─ Output:
   ├─ 5 MCQs (with explanations)
   ├─ 3 SAQs (with model answers)
   ├─ 2 Numericals (with steps)
   ├─ 1 Challenge (hard)
   └─ Feedback framework

📖 EXAM AGENT
├─ Input: Branch, Subject, Academic Level
├─ Processing:
│  ├─ Analyze exam patterns
│  ├─ Weight topics by frequency
│  ├─ Extract FAQ from papers
│  ├─ Create revision notes
│  └─ Design mock tests
└─ Output:
   ├─ Important Topics (weighted)
   ├─ FAQ (from papers)
   ├─ Revision Notes
   ├─ Mock Test
   └─ Exam Tips

🎯 CAREER AGENT
├─ Input: Career Path, Current Level
├─ Processing:
│  ├─ Map to job descriptions
│  ├─ Identify skill gaps
│  ├─ Suggest courses
│  ├─ Recommend projects
│  └─ Find internships
└─ Output:
   ├─ Career Description
   ├─ Required Skills
   ├─ Key Subjects
   ├─ Courses to Take
   ├─ Projects (3-5)
   ├─ Internships
   └─ Interview Topics

💻 CODING AGENT
├─ Input: Algorithm, Language, Proficiency
├─ Processing:
│  ├─ Explain algorithm
│  ├─ Generate code
│  ├─ Analyze complexity
│  ├─ Suggest optimizations
│  └─ Create problems
└─ Output:
   ├─ Algorithm Explanation
   ├─ Code Example (commented)
   ├─ Complexity Analysis
   ├─ Debug Tips
   ├─ Practice Problems
   └─ Interview Questions

🔬 RESEARCH AGENT
├─ Input: Research Area, Academic Level
├─ Processing:
│  ├─ Suggest topics
│  ├─ Guide literature review
│  ├─ Design experiments
│  ├─ Structure papers
│  └─ Find venues
└─ Output:
   ├─ Topic Suggestions
   ├─ Literature Review Guide
   ├─ Experiment Design
   ├─ Paper Structure
   ├─ Citation Guide
   ├─ Conferences/Journals
   └─ Ethics Checklist

📊 COORDINATOR AGENT
├─ Input: Query, Student Profile
├─ Processing:
│  ├─ NLP intent recognition
│  ├─ Agent selection algorithm
│  ├─ Determine collaboration
│  ├─ Orchestrate responses
│  └─ Synthesize output
└─ Output:
   ├─ Routing Decision
   ├─ Selected Agents
   ├─ Combined Response
   └─ Formatted Result
```

---

## Technology Stack Layers

```
┌────────────────────────────────────────────────────────────────┐
│                      USER INTERFACE LAYER                      │
│  (multi-agent.html + UI/UX)                                    │
├────────────────────────────────────────────────────────────────┤
│  Dashboard | Profile Manager | Query Input | Results Display   │
└─────────────────────┬──────────────────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────────────────┐
│                   AGENT ORCHESTRATION LAYER                    │
│  (agents.js)                                                    │
├────────────────────────────────────────────────────────────────┤
│  Coordinator | Tutor | Practice | Exam | Career | Coding |    │
│  Research                                                       │
└─────────────────────┬──────────────────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────────────────┐
│              KNOWLEDGE BASE & DATA LAYER                        │
│  (database.js)                                                  │
├────────────────────────────────────────────────────────────────┤
│  Curriculum Database | Knowledge Artifacts | Metadata &        │
│  Indexes                                                        │
└─────────────────────┬──────────────────────────────────────────┘
                      │
        ┌─────────────┴─────────────────────┐
        │                                   │
┌───────▼──────────┐            ┌──────────▼──────────┐
│   CURRENT STACK  │            │   PHASE 2 STACK     │
│  (Frontend Only) │            │  (Full Integration) │
├──────────────────┤            ├─────────────────────┤
│ HTML5            │            │ Node.js + Express   │
│ CSS3             │            │ Python FastAPI      │
│ JavaScript ES6+  │            │ Firebase Auth       │
│ Vanilla JS       │            │ MongoDB Atlas       │
│ Responsive Design│            │ Pinecone VectorDB   │
└──────────────────┘            │ Redis Cache         │
                                │ Llama 3 / Mistral   │
                                │ AMD ROCm            │
                                │ LangChain           │
                                │ Docker              │
                                │ AWS EC2             │
                                │ Kubernetes          │
                                │ GitHub Actions      │
                                └─────────────────────┘
```

---

## Learning Pathways in System

```
PATHWAY 1: CONCEPT LEARNING
┌─────────────────────────────────────────────────────────────┐
│ "Teach me binary trees"                                     │
├─────────────────────────────────────────────────────────────┤
│ 1. Coordinator routes to: Tutor + Career                   │
│ 2. Tutor provides: Full BT explanation                    │
│ 3. Tutor generates: Key points + example + diagram         │
│ 4. Career shows: Why BTs matter for interviews             │
│ 5. Student understands: Deep knowledge + context           │
└─────────────────────────────────────────────────────────────┘

PATHWAY 2: EXAM PREPARATION
┌─────────────────────────────────────────────────────────────┐
│ "Prepare me for DSA exam"                                   │
├─────────────────────────────────────────────────────────────┤
│ 1. Coordinator routes to: Exam + Practice + Tutor          │
│ 2. Exam shows: Important topics (weighted)                 │
│ 3. Exam provides: Mock test + revision notes               │
│ 4. Practice generates: 10 high-quality problems            │
│ 5. Tutor clarifies: Any concept the student asks           │
│ 6. Student is: Exam-ready with confidence                 │
└─────────────────────────────────────────────────────────────┘

PATHWAY 3: CAREER BUILDING
┌─────────────────────────────────────────────────────────────┐
│ "I want to become a data scientist"                         │
├─────────────────────────────────────────────────────────────┤
│ 1. Coordinator routes to: Career + Tutor + Coding          │
│ 2. Career shows: Complete DS roadmap                       │
│ 3. Career lists: Skills, subjects, courses, projects       │
│ 4. Tutor teaches: Math foundations (if needed)             │
│ 5. Coding teaches: Python + SQL (if needed)                │
│ 6. Student has: Clear action plan + resources              │
└─────────────────────────────────────────────────────────────┘

PATHWAY 4: RESEARCH SUPPORT (PhD/M.Tech)
┌─────────────────────────────────────────────────────────────┐
│ "Help with my PhD thesis on adversarial ML"                │
├─────────────────────────────────────────────────────────────┤
│ 1. Coordinator routes to: Research + Tutor + Coding        │
│ 2. Research suggests: Relevant papers + topics              │
│ 3. Research guides: Experiment design + paper structure     │
│ 4. Coding helps: PyTorch implementation                     │
│ 5. Tutor clarifies: Deep learning concepts                 │
│ 6. Scholar can: Execute research with confidence           │
└─────────────────────────────────────────────────────────────┘
```

---

**This architecture enables:**
✅ Scalability (7 independent agents)
✅ Modularity (each agent self-contained)
✅ Extensibility (easy to add more agents)
✅ Personalization (profile-based routing)
✅ Collaboration (multi-agent responses)
✅ Quality (specialist expertise)

**Architecture designed by Team APEIRON for AMD Slingshot Hackathon 2026**
