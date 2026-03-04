// ============================================================
// SkillAI Multi-Agent System | Team APEIRON
// Specialized Agents for Academic Learning & Career Development
// ============================================================

// === COORDINATOR AGENT ===
class CoordinatorAgent {
    constructor() {
        this.agents = {
            tutor: new TutorAgent(),
            practice: new PracticeAgent(),
            exam: new ExamPreparationAgent(),
            career: new CareerGuidanceAgent(),
            coding: new CodingAssistantAgent(),
            research: new ResearchAssistantAgent()
        };
    }

    analyzeRequest(query, studentProfile) {
        const intent = this.identifyIntent(query);
        const agents = this.selectAgents(intent);
        
        return {
            intent,
            agents,
            response: this.routeAndCombine(query, agents, studentProfile)
        };
    }

    identifyIntent(query) {
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.match(/explain|teach|what is|how does|define|concept/)) return 'concept_learning';
        if (lowerQuery.match(/practice|solve|question|problem|exercise/)) return 'practice';
        if (lowerQuery.match(/exam|test|revision|mock|preparation|important topic/)) return 'exam_prep';
        if (lowerQuery.match(/career|job|internship|skill|path|industry/)) return 'career_planning';
        if (lowerQuery.match(/code|program|debug|algorithm|python|java|c\+\+/)) return 'coding_help';
        if (lowerQuery.match(/research|paper|topic|literature|experiment|phd|thesis/)) return 'research_support';
        
        return 'general_help';
    }

    selectAgents(intent) {
        const agentMap = {
            concept_learning: ['tutor', 'career'],
            practice: ['practice', 'tutor'],
            exam_prep: ['exam', 'practice'],
            career_planning: ['career', 'tutor'],
            coding_help: ['coding', 'practice'],
            research_support: ['research', 'tutor'],
            general_help: ['tutor']
        };
        return agentMap[intent] || ['tutor'];
    }

    routeAndCombine(query, agentNames, studentProfile) {
        const responses = {};
        agentNames.forEach(name => {
            if (this.agents[name]) {
                responses[name] = this.agents[name].respond(query, studentProfile);
            }
        });
        return responses;
    }
}

// === TUTOR AGENT ===
class TutorAgent {
    respond(query, studentProfile) {
        const concept = this.extractConcept(query);
        const level = studentProfile?.level || 'undergraduate';
        
        return {
            agent: 'Tutor',
            explanation: this.explainConcept(concept, level),
            keyPoints: this.getKeyPoints(concept),
            example: this.provideExample(concept, level),
            diagram: this.describeDiagram(concept),
            examNotes: this.getExamNotes(concept),
            nextTopics: this.suggestNextTopics(concept)
        };
    }

    explainConcept(concept, level) {
        const explanations = {
            'data_structures': `Data structures are organized ways to store and manage data for efficient access and modification. 
            In a computer, data is stored in memory. Different data structures (arrays, linked lists, trees, graphs) offer different trade-offs:
            - Arrays: Fast access (O(1)) but slow insertion
            - Linked Lists: Fast insertion (O(1)) but slow access
            - Trees: Balanced access and insertion
            - Graphs: Complex relationships between data`,
            
            'algorithms': `An algorithm is a step-by-step procedure to solve a problem. Key aspects:
            - Correctness: Does it solve the problem?
            - Efficiency: Time complexity (how fast) and space complexity (how much memory)
            - Scalability: Works for large inputs
            Common algorithms: sorting (quick sort, merge sort), searching (binary search), graph algorithms (BFS, DFS)`,
            
            'time_complexity': `Time complexity describes how runtime grows with input size (n).
            - O(1): Constant - same time regardless of n
            - O(n): Linear - time grows with n
            - O(log n): Logarithmic - time grows slowly (binary search)
            - O(n²): Quadratic - nested loops (bubble sort)
            - O(2^n): Exponential - very slow (recursion without memoization)
            We care about Big-O because it predicts behavior for large inputs.`,
            
            'space_complexity': `Space complexity measures memory usage growth with input size.
            - O(1): Constant space (no extra memory)
            - O(n): Linear space (store array or list)
            - O(n²): Quadratic space (2D matrix)
            Trade-off: Sometimes faster algorithms use more memory. Balance is key.`,
            
            'recursion': `Recursion is a function calling itself to solve smaller versions of the problem.
            Structure: Base case (stop) + Recursive case (call itself).
            Example: factorial(n) = n × factorial(n-1), base: factorial(0)=1
            Issues: Stack overflow (too deep), exponential time (recomputation).
            Solution: Memoization (cache results) or iteration (use loop instead).`,
            
            'sorting': `Sorting arranges data in order (ascending/descending).
            Key algorithms:
            - Bubble Sort: O(n²) - simple but slow
            - Quick Sort: O(n log n) avg, O(n²) worst - fast, in-place
            - Merge Sort: O(n log n) always - stable, needs extra space
            - Heap Sort: O(n log n) - in-place, not stable
            Stability: Does equal elements keep original order? (Important for records).`,
            
            'trees': `Trees are hierarchical data structures with parent-child relationships.
            - Root: top node with no parent
            - Leaves: nodes with no children
            - Height: max path from root to leaf
            Types: Binary tree (≤2 children), BST (left<parent<right), AVL (balanced), Heap (parent priority)
            Applications: File systems, databases, expression parsing.`,
            
            'graphs': `Graphs model relationships between entities (nodes connected by edges).
            Types: Directed (arrow direction matters) vs Undirected (two-way)
            Weights: Unweighted (distance=1) vs Weighted (distance varies)
            Traversal: BFS (level-by-level) vs DFS (depth-first)
            Algorithms: Dijkstra (shortest path), Topological sort (dependency order), DFS (connected components).`,
        };
        
        return explanations[concept] || `Let me explain ${concept}. This is an important concept in computer science...`;
    }

    getKeyPoints(concept) {
        const keyPoints = {
            'data_structures': [
                'Structures organize data for efficient storage and retrieval',
                'Each structure has different time/space trade-offs',
                'Choose based on your operation priorities',
                'Arrays: fast access, slow insert/delete',
                'Linked Lists: slow access, fast insert at head',
                'Trees: balanced approach for many operations'
            ],
            'time_complexity': [
                'Big-O describes worst-case asymptotic growth',
                'O(1) is best, O(2^n) is worst for competitive programming',
                'Drop constants: O(2n) → O(n)',
                'Drop lower-order terms: O(n² + n) → O(n²)',
                'Nested loops multiply: loop in loop = O(n²)',
                'Sequential loops add: loop then loop = O(n + m)'
            ],
            'recursion': [
                'Base case stops recursion (prevents infinite loop)',
                'Recursive case: solve smaller problem, combine results',
                'Each call uses stack memory (can overflow)',
                'Memoization: cache results to avoid recomputation',
                'Iteration often more efficient than recursion'
            ],
            'sorting': [
                'Quick Sort best for average cases (O(n log n))',
                'Merge Sort guaranteed O(n log n), stable',
                'Stability matters when sorting objects by one field',
                'In-place sorting saves memory (Quick, Heap)',
                'Adaptive sorting faster on partly-sorted data'
            ]
        };
        
        return keyPoints[concept] || [];
    }

    provideExample(concept, level) {
        const examples = {
            'time_complexity': {
                undergraduate: `Example: Finding max in array of n numbers.
                Linear search: Check each element once → O(n)
                Sorted array with binary search: Check half, then quarter, etc. → O(log n)
                
                For n=1,000,000:
                - Linear: ~1,000,000 checks
                - Binary: ~20 checks
                This difference defines scalability.`,
                
                postgraduate: `Amortized analysis: Dynamic array append.
                Single append: O(1)
                After n appends, array doubled ~log n times.
                Total cost = n + (n/2 + n/4 + ... ) = 2n
                Amortized cost per append: 2n/n = O(1)`
            },
            'recursion': {
                undergraduate: `Fibonacci sequence:
                fib(n) = fib(n-1) + fib(n-2)
                Base: fib(0)=0, fib(1)=1
                
                fib(4) = fib(3) + fib(2)
                       = (fib(2) + fib(1)) + (fib(1) + fib(0))
                       = ... = 3
                
                Problem: fib(2) computed twice, fib(1) three times.
                Solution: Memoization stores results.`,
                
                postgraduate: `Master's Theorem for recurrence: T(n) = aT(n/b) + f(n)
                If f(n) = O(n^k) and a > b^k: T(n) = O(n^(log_b a))
                If f(n) = O(n^k) and a = b^k: T(n) = O(n^k log n)
                If f(n) = O(n^k) and a < b^k: T(n) = O(f(n))
                
                Example: Merge sort T(n) = 2T(n/2) + O(n)
                a=2, b=2, f(n)=O(n) → a=b^k → T(n) = O(n log n)`
            }
        };
        
        const key = `${concept}`;
        return examples[key]?.[level] || 'See textbook examples for detailed walkthroughs.';
    }

    describeDiagram(concept) {
        const diagrams = {
            'trees': `
            Binary Tree Structure:
                        1 (root)
                       / \\
                      2   3
                     / \\   \\
                    4   5   6
            
            BST Property: Left subtree < parent < Right subtree
            Example: Insert 50,30,70,20,40,60,80
                        50
                       /  \\
                      30   70
                     / \\   / \\
                    20 40 60 80`,
            
            'graphs': `
            Graph with edges:
                1 ---- 2
                |\\     /|
                | \\   / |
                |  \\ /  |
                3 ---- 4
            
            Adjacency List:
            1: [2, 3, 4]
            2: [1, 4]
            3: [1, 4]
            4: [1, 2, 3]`,
            
            'linked_list': `
            Singly Linked List:
            head → [1|next] → [2|next] → [3|next] → NULL
            
            Doubly Linked List:
            NULL ← [1|next] ↔ [2|next] ↔ [3|next] → NULL`
        };
        
        return diagrams[concept] || '(Visual diagram would be displayed here)';
    }

    getExamNotes(concept) {
        return {
            'time_complexity': [
                '⭐ MOST ASKED: Derive time complexity of given algorithm',
                '⭐ Compare complexity of two approaches',
                '⭐ Optimize algorithm to reduce complexity',
                'Common mistakes: Forgetting to count all operations, confusing O(n) with θ(n)',
                'Pro tip: Practice deriving complexity for loops, recursion, and hybrid approaches'
            ],
            'recursion': [
                '⭐ Write recursive solution and prove correctness',
                '⭐ Derive recurrence relation T(n) = ...',
                '⭐ Solve recurrence using substitution or master theorem',
                '⭐ Memoization vs Dynamic Programming',
                'Common mistakes: Forgetting base case, wrong recursive relation'
            ]
        }[concept] || ['Review key definitions', 'Practice previous year papers'];
    }

    suggestNextTopics(concept) {
        const progressionMap = {
            'data_structures': ['Complexity Analysis', 'Searching Algorithms', 'Sorting Algorithms'],
            'arrays': ['Linked Lists', 'Stacks', 'Queues'],
            'time_complexity': ['Big-O Notation', 'Space Complexity', 'Amortized Analysis'],
            'sorting': ['Searching', 'Merge Operations', 'Selection Algorithms'],
            'trees': ['Binary Search Trees', 'AVL Trees', 'Heaps'],
            'graphs': ['BFS/DFS', 'Shortest Path', 'Minimum Spanning Tree']
        };
        return progressionMap[concept] || [];
    }

    extractConcept(query) {
        const concepts = ['data_structures', 'algorithms', 'time_complexity', 'space_complexity', 
                         'recursion', 'sorting', 'trees', 'graphs', 'arrays', 'linked_list', 
                         'stacks', 'queues', 'hashing', 'dynamic_programming'];
        for (const concept of concepts) {
            if (query.toLowerCase().includes(concept.replace(/_/g, ' '))) {
                return concept;
            }
        }
        return query.toLowerCase().split(' ')[0];
    }
}

// === PRACTICE AGENT ===
class PracticeAgent {
    respond(query, studentProfile) {
        const topic = this.extractTopic(query);
        const level = studentProfile?.level || 'undergraduate';
        
        return {
            agent: 'Practice',
            mcqs: this.generateMCQs(topic, level, 5),
            shortAnswer: this.generateShortAnswerQs(topic, level, 3),
            numerical: this.generateNumericalProblems(topic, level, 2),
            challenge: this.generateChallenge(topic, level),
            instructions: 'Answer all questions. Click "Submit Practice" to get feedback.'
        };
    }

    generateMCQs(topic, level, count) {
        const mcqs = {
            'time_complexity': [
                {
                    q: 'What is the time complexity of binary search?',
                    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
                    answer: 1,
                    explanation: 'Binary search halves the search space each step, giving O(log n).'
                },
                {
                    q: 'If an algorithm has nested loops running n times each, the complexity is:',
                    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2^n)'],
                    answer: 2,
                    explanation: 'Nested loops multiply: n × n = O(n²).'
                },
                {
                    q: 'Which sorting algorithm guarantees O(n log n) in worst case?',
                    options: ['Quick Sort', 'Bubble Sort', 'Merge Sort', 'Selection Sort'],
                    answer: 2,
                    explanation: 'Merge Sort guarantees O(n log n). Quick Sort is O(n²) in worst case.'
                },
                {
                    q: 'What does Big-O notation describe?',
                    options: ['Best case', 'Average case', 'Worst case upper bound', 'Exact time'],
                    answer: 2,
                    explanation: 'Big-O describes the worst-case asymptotic upper bound.'
                },
                {
                    q: 'If you drop constants, what is O(5n + 3) simplified to?',
                    options: ['O(5)', 'O(n)', 'O(8)', 'O(5n)'],
                    answer: 1,
                    explanation: 'In Big-O, we drop constants: O(5n + 3) = O(n).'
                }
            ],
            'recursion': [
                {
                    q: 'What must every recursive function have?',
                    options: ['Loop', 'Base case', 'Global variable', 'Array'],
                    answer: 1,
                    explanation: 'Base case stops the recursion. Without it, infinite recursion occurs.'
                },
                {
                    q: 'What is the time complexity of naive fibonacci fib(n)?',
                    options: ['O(n)', 'O(n²)', 'O(2^n)', 'O(log n)'],
                    answer: 2,
                    explanation: 'fib(n) = fib(n-1) + fib(n-2) creates a binary tree of exponential size.'
                },
                {
                    q: 'What technique stores computed results to avoid recomputation?',
                    options: ['Caching', 'Memoization', 'Hashing', 'Sorting'],
                    answer: 1,
                    explanation: 'Memoization stores results of subproblems. Caching is the general term.'
                },
                {
                    q: 'How much stack space does recursion use?',
                    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
                    answer: 2,
                    explanation: 'Each recursive call uses O(1) stack. With depth n, total is O(n).'
                },
                {
                    q: 'What is the maximum recursion depth to avoid stack overflow?',
                    options: ['100', '1000', '10000', 'Depends on system'],
                    answer: 3,
                    explanation: 'Stack size varies by system. Typically 1000-10000 before overflow.'
                }
            ]
        };

        return mcqs[topic]?.slice(0, count) || this.generateGenericMCQs(topic, count);
    }

    generateShortAnswerQs(topic, level, count) {
        return [
            {
                q: `What are the advantages and disadvantages of ${topic}?`,
                hints: 'Think about: time complexity, space complexity, ease of implementation',
                modelAnswer: 'Provide 2-3 advantages and 2-3 disadvantages with explanations.'
            },
            {
                q: `How would you optimize a solution using ${topic}?`,
                hints: 'Consider: Can you use a different approach? What are the bottlenecks?',
                modelAnswer: 'Identify the most expensive operation and propose optimization.'
            },
            {
                q: `When would you use ${topic} instead of alternatives?`,
                hints: 'Compare with other techniques. When is it the best choice?',
                modelAnswer: 'List scenarios where this approach outperforms others.'
            }
        ];
    }

    generateNumericalProblems(topic, level, count) {
        return [
            {
                q: 'Given an array of 1000 elements, how many comparisons does binary search make in worst case?',
                solution: 'log₂(1000) ≈ 10 comparisons',
                steps: [
                    '1000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1',
                    'Count steps: 10 comparisons',
                    'Formula: ⌈log₂(n)⌉ = ⌈log₂(1000)⌉ = 10'
                ]
            },
            {
                q: 'How many times is the inner loop executed in nested loops of size n=5?',
                solution: 'n × n = 5 × 5 = 25 times',
                steps: [
                    'Outer loop runs: 5 times',
                    'Inner loop runs for each outer iteration: 5 times',
                    'Total: 5 × 5 = 25 iterations',
                    'Time complexity: O(n²)'
                ]
            }
        ];
    }

    generateChallenge(topic, level) {
        return {
            q: `Advanced Challenge: Design and implement an optimized solution for ${topic} that handles 10^6 elements efficiently.`,
            requirements: [
                'Time complexity ≤ O(n log n)',
                'Space complexity ≤ O(n)',
                'Handle edge cases',
                'Provide complexity analysis'
            ],
            points: 20
        };
    }

    generateGenericMCQs(topic, count) {
        return [{
            q: `Which is an advantage of ${topic}?`,
            options: ['Fast processing', 'Low memory', 'Easy to understand', 'All above'],
            answer: 3
        }];
    }

    extractTopic(query) {
        const topics = ['time_complexity', 'recursion', 'sorting', 'searching', 'graphs', 'trees'];
        for (const topic of topics) {
            if (query.toLowerCase().includes(topic.replace(/_/g, ' '))) {
                return topic;
            }
        }
        return 'general_algorithm';
    }
}

// === EXAM PREPARATION AGENT ===
class ExamPreparationAgent {
    respond(query, studentProfile) {
        const branch = studentProfile?.branch || 'CSE';
        const semester = studentProfile?.semester || 3;
        
        return {
            agent: 'Exam Preparation',
            importantTopics: this.getImportantTopics(branch, semester),
            frequentlyAsked: this.getFrequentlyAskedQuestions(branch, semester),
            revisionNotes: this.getRevisionNotes(branch, semester),
            mockTest: this.generateMockTest(branch, semester),
            examTips: this.getExamWritingTips(branch, semester)
        };
    }

    getImportantTopics(branch, semester) {
        const topics = {
            'CSE_3': [
                { topic: 'Time & Space Complexity', weight: '15%', frequency: 'Very High' },
                { topic: 'Arrays & Strings', weight: '12%', frequency: 'High' },
                { topic: 'Linked Lists', weight: '10%', frequency: 'High' },
                { topic: 'Stacks & Queues', weight: '10%', frequency: 'High' },
                { topic: 'Recursion & Backtracking', weight: '12%', frequency: 'High' }
            ],
            'CSE_4': [
                { topic: 'Trees & BST', weight: '15%', frequency: 'Very High' },
                { topic: 'Graphs', weight: '15%', frequency: 'Very High' },
                { topic: 'Dynamic Programming', weight: '20%', frequency: 'Very High' },
                { topic: 'Greedy Algorithms', weight: '12%', frequency: 'High' }
            ]
        };
        
        return topics[`${branch}_${semester}`] || topics['CSE_3'];
    }

    getFrequentlyAskedQuestions(branch, semester) {
        return [
            '⭐⭐⭐ Explain complexity analysis. Derive complexity of given algorithm.',
            '⭐⭐⭐ Write and trace sorting/searching algorithm. Why is it efficient?',
            '⭐⭐ Design efficient solution for a coding problem.',
            '⭐⭐ Compare two algorithms. Which is better and why?',
            '⭐ Prove correctness of an algorithm.',
            '⭐ Optimize algorithm. Reduce time/space complexity.'
        ];
    }

    getRevisionNotes(branch, semester) {
        return `
Quick Revision Checklist:
✓ Time Complexity: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n)
✓ Big-O Rules: Drop constants, drop lower-order terms, multiply for nested loops
✓ Arrays: O(1) access, O(n) insert/delete
✓ Linked Lists: O(n) access, O(1) insert/delete at head
✓ Stacks: LIFO, O(1) push/pop
✓ Queues: FIFO, O(1) enqueue/dequeue
✓ Sorting: Quick O(n log n) avg, Merge O(n log n) always, Heap O(n log n)
✓ Searching: Linear O(n), Binary O(log n) on sorted
✓ Trees: BST properties, AVL balance factor, Heap property
✓ Graphs: BFS/DFS, Dijkstra for shortest path
✓ Recursion: Base case required, Memoization for optimization
        `;
    }

    generateMockTest(branch, semester) {
        return {
            name: `Mock Test - ${branch} Semester ${semester}`,
            totalQuestions: 5,
            duration: 90,
            questions: [
                {
                    number: 1,
                    q: 'Derive time complexity of Quick Sort. When does it degrade to O(n²)?',
                    marks: 10,
                    difficulty: 'Medium'
                },
                {
                    number: 2,
                    q: 'Write iterative and recursive solutions for binary tree traversal. Compare.',
                    marks: 15,
                    difficulty: 'Hard'
                },
                {
                    number: 3,
                    q: 'Design an O(n log n) solution to find k closest elements in array.',
                    marks: 15,
                    difficulty: 'Hard'
                },
                {
                    number: 4,
                    q: 'Explain AVL tree rotations. Insert 10,20,30 and show balancing steps.',
                    marks: 10,
                    difficulty: 'Medium'
                },
                {
                    number: 5,
                    q: 'Apply Dijkstra\'s algorithm. Trace on given weighted graph.',
                    marks: 10,
                    difficulty: 'Medium'
                }
            ]
        };
    }

    getExamWritingTips(branch, semester) {
        return [
            '📝 Read all questions before starting. Allocate time: harder questions first.',
            '📝 For theory questions: Define + explain + example + diagram.',
            '📝 For algorithm questions: Pseudocode + trace example + complexity analysis.',
            '📝 Show all steps. Partial credit for method even if answer is wrong.',
            '📝 Draw diagrams clearly. Label all parts.',
            '📝 Time complexity proof is must-have for full marks.',
            '📝 Don\'t just write code. Write derivation and explanation.',
            '📝 Manage time: Theory (5 min/question) vs Numerical (10 min/problem).'
        ];
    }
}

// === CAREER GUIDANCE AGENT ===
class CareerGuidanceAgent {
    respond(query, studentProfile) {
        const careerGoal = this.extractCareerGoal(query);
        
        return {
            agent: 'Career Guidance',
            careerPath: this.getCareerPath(careerGoal),
            requiredSkills: this.getRequiredSkills(careerGoal),
            universitySubjects: this.getUniversitySubjects(careerGoal, studentProfile?.branch),
            externalCourses: this.getExternalCourses(careerGoal),
            projects: this.getProjectIdeas(careerGoal),
            internships: this.getInternshipSuggestions(careerGoal),
            interviewPrep: this.getInterviewTopics(careerGoal)
        };
    }

    extractCareerGoal(query) {
        const careers = {
            'software engineer': 'software_engineer',
            'data scientist': 'data_scientist',
            'ai engineer': 'ai_engineer',
            'vlsi': 'vlsi_engineer',
            'embedded': 'embedded_engineer',
            'cybersecurity': 'cybersecurity_engineer',
            'mechanical': 'mechanical_engineer',
            'structural': 'structural_engineer'
        };
        
        for (const [key, career] of Object.entries(careers)) {
            if (query.toLowerCase().includes(key)) return career;
        }
        return 'software_engineer';
    }

    getCareerPath(career) {
        const paths = {
            'software_engineer': {
                description: 'Design and develop software applications across various domains.',
                growth: 'Junior Dev → Senior Dev → Tech Lead → Engineering Manager → Director',
                salary: '₹6-8L entry → ₹15-20L senior → ₹30-50L+ for directors',
                companies: 'FAANG, Flipkart, Amazon India, Microsoft, Google, Apple'
            },
            'data_scientist': {
                description: 'Extract insights from data using statistics, ML, and programming.',
                growth: 'Data Analyst → Data Scientist → ML Engineer → AI Researcher → Head of AI',
                salary: '₹8-10L entry → ₹18-25L experienced → ₹40L+ senior roles',
                companies: 'Analytics firms, Tech companies, Finance, E-commerce'
            },
            'ai_engineer': {
                description: 'Develop and deploy artificial intelligence and ML solutions.',
                growth: 'ML Engineer → Senior ML Engineer → ML Lead → AI Director',
                salary: '₹8-12L entry → ₹20-30L experienced → ₹50L+ senior',
                companies: 'AI startups, Tech giants, Research organizations'
            }
        };
        
        return paths[career] || paths['software_engineer'];
    }

    getRequiredSkills(career) {
        const skills = {
            'software_engineer': [
                'Core: Data Structures, Algorithms, System Design, OOP',
                'Languages: C++, Java, Python, JavaScript',
                'Web: Frontend (React), Backend (Node.js, Spring)',
                'Database: SQL, NoSQL, Redis',
                'Version Control: Git, GitHub',
                'Soft Skills: Communication, Problem-solving, Teamwork'
            ],
            'data_scientist': [
                'Core: Statistics, Linear Algebra, Probability',
                'Languages: Python, R, SQL',
                'Tools: Pandas, NumPy, Scikit-learn, TensorFlow',
                'Visualization: Matplotlib, Seaborn, Tableau',
                'ML Algorithms: Regression, Classification, Clustering',
                'Big Data: Spark, Hadoop (optional)',
                'Domain Knowledge: Business understanding'
            ],
            'ai_engineer': [
                'Core: ML, Deep Learning, NLP, Computer Vision',
                'Frameworks: PyTorch, TensorFlow, Keras',
                'Math: Linear Algebra, Calculus, Probability',
                'Languages: Python, CUDA',
                'Tools: Jupyter, MLflow, Docker',
                'Research Papers: Reading and understanding latest AI papers'
            ]
        };
        
        return skills[career] || [];
    }

    getUniversitySubjects(career, branch) {
        const subjects = {
            'software_engineer': [
                'Data Structures & Algorithms (crucial)',
                'Operating Systems',
                'Database Management Systems',
                'Computer Networks',
                'Software Engineering',
                'Web Technologies',
                'System Design concepts'
            ],
            'data_scientist': [
                'Data Structures (for optimization)',
                'Discrete Mathematics',
                'Probability & Statistics',
                'Linear Algebra',
                'Database Systems',
                'Databases (SQL)',
                'Operations Research'
            ],
            'ai_engineer': [
                'Data Structures & Algorithms',
                'Linear Algebra',
                'Probability & Statistics',
                'Machine Learning (elective)',
                'Deep Learning (elective)',
                'Natural Language Processing (elective)',
                'Computer Vision (elective)'
            ]
        };
        
        return subjects[career] || [];
    }

    getExternalCourses(career) {
        const courses = {
            'software_engineer': [
                'LeetCode / HackerRank: Daily coding practice',
                'System Design: Grokking System Design Interview (Educative)',
                'LLD: Low Level Design patterns (courses)',
                'Competitive Programming: Codeforces, AtCoder',
                'Web Development: Full-stack MERN/Django course',
                'Microservices: Docker, Kubernetes basics'
            ],
            'data_scientist': [
                'Andrew Ng\'s ML course (Coursera)',
                'Fast.ai: Practical Deep Learning',
                'Kaggle: Practice on real datasets',
                'SQL: DataCamp SQL course',
                'Statistics: Probability course',
                'Specialization: Cloud (GCP, AWS for ML)'
            ],
            'ai_engineer': [
                'Deep Learning Specialization (Coursera)',
                'Fast.ai: Practical Deep Learning',
                'Stanford CS224N: NLP with Deep Learning',
                'CS231N: Computer Vision',
                'Research: ArXiv papers, reading latest',
                'Frameworks: TensorFlow/PyTorch deep dive'
            ]
        };
        
        return courses[career] || [];
    }

    getProjectIdeas(career) {
        const projects = {
            'software_engineer': [
                'URL Shortener service (like bit.ly)',
                'Chat application with WebSockets',
                'E-commerce platform (full-stack)',
                'Blog CMS with user authentication',
                'Real-time notification system',
                'Payment gateway integration'
            ],
            'data_scientist': [
                'Movie recommendation system',
                'Customer churn prediction',
                'Sentiment analysis on Twitter data',
                'House price prediction (regression)',
                'Fraud detection in transactions',
                'Time series forecasting'
            ],
            'ai_engineer': [
                'Fine-tuned LLM for domain-specific task',
                'Image classification with custom dataset',
                'Object detection using YOLO/Faster R-CNN',
                'Chatbot with RAG (Retrieval-Augmented Generation)',
                'Text-to-image generation',
                'Named Entity Recognition system'
            ]
        };
        
        return projects[career] || [];
    }

    getInternshipSuggestions(career) {
        const internships = {
            'software_engineer': [
                'Summer Internship at tech companies (Google, Microsoft, Amazon)',
                'Early-bird programs (sophomore internship)',
                'Startup internships (more responsibility, learning)',
                'Open source contributions (GitHub, Linux Foundation)',
                'Hackathons: Code and pitch in 24-48 hours'
            ],
            'data_scientist': [
                'Data Analysis internships',
                'ML internships at tech companies',
                'Finance/Fintech internships (quant, risk)',
                'E-commerce companies (recommendation systems)',
                'Research internships (universities, labs)'
            ],
            'ai_engineer': [
                'AI/ML research internships',
                'Deep Learning specialized roles',
                'NLP teams (language models)',
                'Computer Vision teams',
                'AI startup internships'
            ]
        };
        
        return internships[career] || [];
    }

    getInterviewTopics(career) {
        const topics = {
            'software_engineer': [
                'DSA: Arrays, Linked Lists, Trees, Graphs (50% of interview)',
                'System Design: Scalability, databases, caching (30%)',
                'Coding Problems: LeetCode Medium/Hard level',
                'Behavioral: STAR method, past projects',
                'Optimization: Can you reduce time/space complexity?'
            ],
            'data_scientist': [
                'Statistics: Hypothesis testing, A/B testing',
                'ML Algorithms: When to use what',
                'SQL: Write complex queries',
                'Python: Pandas, NumPy, Scikit-learn',
                'Case Studies: Design ML system for problem',
                'Behavioral: Data-driven decision making'
            ],
            'ai_engineer': [
                'Deep Learning architectures: CNN, RNN, Transformer',
                'Loss functions, optimization (SGD, Adam)',
                'Regularization: Dropout, Batch Norm, L1/L2',
                'State-of-the-art papers in NLP/CV',
                'Deployment: Model serving, optimization',
                'Coding: PyTorch/TensorFlow implementation'
            ]
        };
        
        return topics[career] || [];
    }
}

// === CODING ASSISTANT AGENT ===
class CodingAssistantAgent {
    respond(query, studentProfile) {
        const language = this.extractLanguage(query);
        const topic = this.extractTopic(query);
        
        return {
            agent: 'Coding Assistant',
            language: language,
            algorithmExplanation: this.explainAlgorithm(topic, language),
            codeExample: this.provideCode(topic, language),
            debugTips: this.getDebugTips(topic),
            practiceProblems: this.generateProblems(topic, language),
            interviewQuestions: this.getInterviewQuestions(topic)
        };
    }

    extractLanguage(query) {
        const languages = ['python', 'java', 'c++', 'javascript', 'matlab'];
        for (const lang of languages) {
            if (query.toLowerCase().includes(lang)) return lang;
        }
        return 'python';
    }

    extractTopic(query) {
        const topics = ['binary search', 'merge sort', 'quick sort', 'dfs', 'bfs', 'dynamic programming'];
        for (const topic of topics) {
            if (query.toLowerCase().includes(topic)) return topic;
        }
        return 'general';
    }

    explainAlgorithm(topic, language) {
        return `
Algorithm: ${topic}
Language: ${language}

Step-by-step explanation:
1. Understand the problem
2. Identify constraints
3. Choose approach
4. Implement with comments
5. Test with examples
6. Optimize if needed
        `;
    }

    provideCode(topic, language) {
        const codeExamples = {
            'binary_search_python': `
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Not found

# Time: O(log n), Space: O(1)
            `,
            
            'merge_sort_python': `
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Time: O(n log n), Space: O(n)
            `,
            
            'dfs_python': `
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited

# Time: O(V + E), Space: O(V) for recursion
            `
        };
        
        return codeExamples[`${topic}_${language}`] || `Code example for ${topic} in ${language}`;
    }

    getDebugTips(topic) {
        return [
            'Add print statements to trace execution',
            'Test with edge cases: empty input, single element, duplicates',
            'Verify boundary conditions: off-by-one errors are common',
            'Check base case for recursion',
            'Validate assumptions about input (sorted? unique?)',
            'Use debugger or Python pdb for step-by-step execution'
        ];
    }

    generateProblems(topic, language) {
        return [
            { level: 'Easy', problem: `Implement ${topic} with complexity analysis` },
            { level: 'Medium', problem: `Modify ${topic} for a variant of the problem` },
            { level: 'Hard', problem: `Optimize ${topic} for space complexity` }
        ];
    }

    getInterviewQuestions(topic) {
        return [
            `Explain ${topic}. What are its time/space complexities?`,
            `When would you use ${topic} vs alternative approaches?`,
            `Implement ${topic} from scratch (write code, not pseudocode).`,
            `Can you optimize further? What about space complexity?`,
            `Trace through an example: input [3,1,4,1,5], target=4`
        ];
    }
}

// === RESEARCH ASSISTANT AGENT ===
class ResearchAssistantAgent {
    respond(query, studentProfile) {
        const researchArea = this.extractResearchArea(query);
        
        return {
            agent: 'Research Assistant',
            topicSuggestions: this.suggestTopics(researchArea),
            literatureReview: this.guideLiteratureReview(researchArea),
            experimentDesign: this.guideExperimentDesign(researchArea),
            paperStructure: this.getPaperStructure(),
            citations: this.getCitationGuide(),
            venues: this.getConferencesAndJournals(researchArea),
            ethicsChecklist: this.getEthicsChecklist()
        };
    }

    extractResearchArea(query) {
        const areas = ['machine learning', 'systems', 'nlp', 'computer vision', 'security', 'networks'];
        for (const area of areas) {
            if (query.toLowerCase().includes(area)) return area;
        }
        return 'general_cs';
    }

    suggestTopics(area) {
        const topics = {
            'machine_learning': [
                'Federated Learning for Privacy-Preserving ML',
                'Efficient Fine-tuning of Large Language Models',
                'Uncertainty Quantification in Deep Learning',
                'Few-Shot Learning with Limited Data',
                'Adversarial Robustness in Neural Networks'
            ],
            'systems': [
                'Distributed Consensus Algorithms',
                'Memory-Efficient Database Indexing',
                'Microkernel Architecture for OS',
                'Resource Allocation in Cloud Computing',
                'Low-Latency Network Protocol Design'
            ],
            'nlp': [
                'Multimodal AI: Text + Image Understanding',
                'Efficient Transformer Variants',
                'Knowledge Graphs for Semantic Search',
                'Zero-Shot Cross-Lingual NLP',
                'Bias Detection in Language Models'
            ]
        };
        
        return topics[area] || [];
    }

    guideLiteratureReview(area) {
        return {
            steps: [
                '1. Define research question clearly',
                '2. Search databases: Google Scholar, ArXiv, ACM Digital Library',
                '3. Keywords: Vary terms, use AND/OR operators',
                '4. Screen titles and abstracts (rough filter)',
                '5. Read full papers of relevant ones',
                '6. Extract: objectives, methods, findings, gaps',
                '7. Synthesize: How does literature relate to your question?',
                '8. Identify: What is NOT well studied? (Your research gap)'
            ],
            databases: [
                'Google Scholar (scholar.google.com)',
                'ArXiv.org (latest ML, systems papers)',
                'ACM Digital Library (ACM publications)',
                'IEEE Xplore (electrical, computing papers)',
                'JSTOR (multidisciplinary)'
            ],
            tools: ['Zotero', 'Mendeley', 'Papers', 'Notion']
        };
    }

    guideExperimentDesign(area) {
        return {
            steps: [
                '1. Hypothesis: Clear, testable prediction',
                '2. Variables: Independent (you control), Dependent (you measure)',
                '3. Controls: What stays constant? What\'s the baseline?',
                '4. Replicability: Can others repeat your experiment?',
                '5. Sample Size: Statistical power? Need power analysis?',
                '6. Measurements: What metric proves/disproves hypothesis?',
                '7. Validation: Cross-validation? Test set evaluation?',
                '8. Statistical Significance: p-value? Confidence interval?'
            ],
            mlSpecific: [
                'Train/Validation/Test split (typically 60/20/20)',
                'Cross-validation (k-fold for small datasets)',
                'Baseline: Compare against existing methods',
                'Ablation study: Remove components to understand importance',
                'Hyperparameter tuning: Grid search or Bayesian optimization',
                'Report: Mean ± std over multiple runs (not single run!)'
            ]
        };
    }

    getPaperStructure() {
        return {
            sections: [
                '1. Abstract (150 words): Problem, method, results, impact',
                '2. Introduction: Context, motivation, contributions, roadmap',
                '3. Related Work: Existing solutions, what\'s missing',
                '4. Methodology: Technical approach, novelty explained clearly',
                '5. Experiments: Setup, baselines, results with graphs/tables',
                '6. Results & Discussion: What worked? Why? Limitations?',
                '7. Conclusion: Summary, future work, broader implications',
                '8. References: Complete citations'
            ],
            tips: [
                'Use clear figures: flow diagrams, result plots, comparisons',
                'Tables: Clear header, caption explaining result',
                'Writing: Active voice, clear English, no jargon without definition',
                'Length: Conference (4-8 pages), Journal (10-20 pages)',
                'Title: Specific, searchable, reflects novelty'
            ]
        };
    }

    getCitationGuide() {
        return {
            formats: {
                'IEEE': 'Author(s), "Title," Conference/Journal, Year.',
                'ACM': 'Author(s). Year. Title. Conference/Journal.',
                'APA': 'Author(s) (Year). Title. Journal, Volume(Issue), pages.'
            },
            tools: ['Zotero (Free, browser integration)', 'Overleaf (LaTeX with BibTeX)'],
            ethics: [
                'Cite original sources, not secondary mentions',
                'Distinguish own work from cited work clearly',
                'Self-plagiarism: Don\'t reuse your own text without citation',
                'Paraphrase with citation, not copy-paste'
            ]
        };
    }

    getConferencesAndJournals(area) {
        const venues = {
            'machine_learning': {
                topConferences: [
                    'NeurIPS (Neural Information Processing Systems)',
                    'ICML (International Conference on Machine Learning)',
                    'ICCV (International Conference on Computer Vision)',
                    'ACL (Association for Computational Linguistics)',
                    'IJCAI (International Joint Conference on AI)'
                ],
                journals: [
                    'IEEE Transactions on Pattern Analysis and Machine Intelligence',
                    'Journal of Machine Learning Research',
                    'Nature Machine Intelligence'
                ]
            },
            'systems': {
                topConferences: [
                    'OSDI (Operating Systems Design and Implementation)',
                    'SOSP (Symposium on Operating Systems Principles)',
                    'NSDI (Networked Systems Design & Implementation)',
                    'SIGMOD (Database systems)'
                ],
                journals: [
                    'ACM Transactions on Computer Systems',
                    'IEEE Transactions on Software Engineering'
                ]
            }
        };
        
        return venues[area] || { topConferences: [], journals: [] };
    }

    getEthicsChecklist() {
        return [
            '✓ Does your research involve human subjects? (Need IRB approval)',
            '✓ Privacy: How is sensitive data handled? GDPR compliance?',
            '✓ Bias: Does your ML model discriminate against groups?',
            '✓ Fairness: Is your algorithm equitable?',
            '✓ Reproducibility: Can others verify your claims?',
            '✓ Transparency: Are methods and data available?',
            '✓ Environmental impact: Carbon footprint of training?',
            '✓ Dual-use risk: Could this be misused? (Security research)'
        ];
    }
}

// === Export for use ===
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CoordinatorAgent,
        TutorAgent,
        PracticeAgent,
        ExamPreparationAgent,
        CareerGuidanceAgent,
        CodingAssistantAgent,
        ResearchAssistantAgent
    };
}
