// SkillAI v6.0 — Full Academic Platform | Team APEIRON

// === Multilingual Support (I18N) ===
const I18N = {
    EN: { ovp: "Overview", splan: "Study Plan", qs: "Questions", mcq: "MCQ Quiz", sans: "Short Ans", form: "Formulas", rev: "Revision", strat: "Strategy", pred: "Predict", car: "Career Path", res: "Research", code: "Coding", prog: "Progress" },
    HI: { ovp: "अवलोकन", splan: "अध्ययन योजना", qs: "प्रश्न", mcq: "बहुविकल्पीय", sans: "लघु उत्तर", form: "सूत्र", rev: "पुनरीक्षण", strat: "रणनीति", pred: "भविष्यवाणी", car: "करियर", res: "अनुसंधान", code: "कोडिंग", prog: "प्रगति" },
    TA: { ovp: "கண்ணோட்டம்", splan: "படிப்புத் திட்டம்", qs: "கேள்விகள்", mcq: "MCQ வினாடிவினா", sans: "குறு விடை", form: "சூத்திரங்கள்", rev: "மீளாய்வு", strat: "வியூகம்", pred: "கணிப்பு", car: "வேலைவாய்ப்பு", res: "ஆராய்ச்சி", code: "குறியீட்டு", prog: "முன்னேற்றம்" },
    TE: { ovp: "అవలోకనం", splan: "అధ్యయన ప్రణాళిక", qs: "ప్రశ్నలు", mcq: "MCQ క్విజ్", sans: "చిన్న సమాధానం", form: "సూత్రాలు", rev: "రివిజన్", strat: "వ్యూహం", pred: "అంచనా", car: "కెరీర్ మార్గం", res: "పరిశోధన", code: "కోడింగ్", prog: "పురోగతి" },
    KA: { ovp: "ಅವಲೋಕನ", splan: "ಅಧ್ಯಯನ ಯೋಜನೆ", qs: "ಪ್ರಶ್ನೆಗಳು", mcq: "MCQ ರಸಪ್ರಶ್ನೆ", sans: "ಸಣ್ಣ ಉತ್ತರ", form: "ಸೂತ್ರಗಳು", rev: "ಪರಿಷ್ಕರಣೆ", strat: "ತಂತ್ರ", pred: "ಭವಿಷ್ಯ", car: "ವೃತ್ತಿ ಮಾರ್ಗ", res: "ಸಂಶೋಧನೆ", code: "ಕೋಡಿಂಗ್", prog: "ಪ್ರಗತಿ" }
};
let curLang = 'EN';

// === Subject Database (8 Branches × Sem 1-8 + PG + PhD) ===
const DB = {
    CSE: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Engineering Chemistry', 'Basic Electrical Engg', 'Programming in C'], 2: ['Engineering Mathematics II', 'Data Structures', 'Digital Electronics', 'OOP with Java', 'Environmental Science'], 3: ['Data Structures & Algorithms', 'Digital Logic Design', 'Discrete Mathematics', 'OOP', 'Computer Organization'], 4: ['Operating Systems', 'DBMS', 'Computer Networks', 'Theory of Computation', 'Software Engineering'], 5: ['Compiler Design', 'Machine Learning', 'Computer Graphics', 'Web Tech', 'Info Security'], 6: ['AI', 'Cloud Computing', 'Big Data', 'IoT', 'Distributed Systems'], 7: ['Deep Learning', 'Blockchain', 'NLP', 'DevOps', 'Cyber Security'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Algorithms', 'Advanced DBMS', 'Advanced Computer Networks', 'Research Methodology'], m2: ['Machine Learning', 'Cloud Architecture', 'High-Performance Computing', 'Distributed AI'], m3: ['Thesis Phase I', 'Deep Learning', 'NLP', 'Advanced AI'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['AI/ML Research', 'Systems & Networks', 'Data Science', 'Cybersecurity', 'HPC & Cloud'] },
    ECE: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Basic Electronics', 'Engineering Drawing', 'C Programming'], 2: ['Engineering Mathematics II', 'Network Theory', 'Electronic Devices', 'Digital Electronics', 'Signals & Systems'], 3: ['Signals & Systems', 'Electronic Devices', 'Network Theory', 'Digital Electronics', 'EM Theory'], 4: ['Analog Comm', 'Control Systems', 'Microprocessors', 'Linear ICs', 'Transmission Lines'], 5: ['Digital Comm', 'VLSI Design', 'DSP', 'Antenna & Propagation', 'Embedded Systems'], 6: ['Wireless Comm', 'Optical Comm', 'Satellite Comm', 'Radar Systems', 'IoT Sensors'], 7: ['5G Technologies', 'MEMS', 'RF Engineering', 'Image Processing', 'Robotics'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Signal Processing', 'VLSI Architecture', 'Advanced Communication', 'Research Methodology'], m2: ['Embedded System Design', 'Wireless Networks', 'Radar & Navigation', 'Advanced DSP'], m3: ['Thesis Phase I', 'RF & Microwave', 'Photonics', 'Nanoelectronics'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['VLSI & Nanotech', 'Wireless & 5G', 'Signal Processing', 'Embedded & IoT', 'Photonics', 'RFIC Design'] },
    ME: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Engineering Mechanics', 'Engineering Drawing', 'Workshop Practice'], 2: ['Engineering Mathematics II', 'Strength of Materials', 'Engineering Chemistry', 'Manufacturing Processes', 'Thermodynamics I'], 3: ['Engineering Mechanics', 'Thermodynamics', 'Strength of Materials', 'Manufacturing Tech', 'Fluid Mechanics'], 4: ['Kinematics', 'Heat Transfer', 'Machine Design', 'Material Science', 'Dynamics'], 5: ['IC Engines', 'CAD/CAM', 'FEA', 'Mechatronics', 'Industrial Engg'], 6: ['RAC', 'Power Plant', 'Automobile Engg', 'Robotics', 'Operations Research'], 7: ['CFD', 'Additive Manufacturing', 'Renewable Energy', 'Advanced Materials', 'Vibration Analysis'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Thermodynamics', 'Advanced Manufacturing', 'Computational Methods', 'Research Methodology'], m2: ['Advanced Heat Transfer', 'FEA', 'Robotics & Automation', 'CFD'], m3: ['Thesis Phase I', 'Advanced Materials', 'Tribology', 'Mechatronics'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['Thermal Engineering', 'Manufacturing', 'Robotics & Automation', 'Materials Science', 'CFD & FEA'] },
    EEE: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Basic Electrical Engg', 'Engineering Drawing', 'C Programming'], 2: ['Engineering Mathematics II', 'Circuit Theory', 'Electronic Devices', 'Electromagnetic Fields', 'Signals & Systems'], 3: ['Circuit Theory', 'Electrical Machines I', 'Electronic Devices', 'EM Fields', 'Signals & Systems'], 4: ['Electrical Machines II', 'Power Systems I', 'Control Systems', 'Power Electronics', 'Measurements'], 5: ['Power Systems II', 'Microprocessors', 'DSP', 'Special Machines', 'HV Engineering'], 6: ['PS Protection', 'Electric Drives', 'Renewable Energy', 'Smart Grid', 'FACTS'], 7: ['Power Quality', 'EV Technology', 'Energy Storage', 'AI in Power Systems', 'Microgrid'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Power Systems', 'Power Electronics & Drives', 'Smart Grid Tech', 'Research Methodology'], m2: ['EV Systems', 'Renewable Integration', 'Wide Bandgap Devices', 'Advanced Control'], m3: ['Thesis Phase I', 'Energy Management', 'Power Quality', 'HVDC'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['Power Systems', 'Renewable Energy', 'Electric Vehicles', 'Smart Grid', 'Power Electronics'] },
    CE: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Engineering Mechanics', 'Engineering Drawing', 'Surveying I'], 2: ['Engineering Mathematics II', 'Strength of Materials', 'Engineering Chemistry', 'Building Materials', 'Fluid Mechanics I'], 3: ['Strength of Materials', 'Fluid Mechanics', 'Surveying', 'Engg Geology', 'Building Materials'], 4: ['Structural Analysis I', 'Geotech', 'Hydraulics', 'Concrete Tech', 'Transport Engg I'], 5: ['Structural Analysis II', 'RC Design', 'Foundation Engg', 'Environmental Engg', 'Hydrology'], 6: ['Steel Structures', 'Transport Engg II', 'Water Resources', 'Construction Mgmt', 'Earthquake Engg'], 7: ['Advanced Structures', 'Green Building', 'GIS & Remote Sensing', 'Bridge Engineering', 'Urban Planning'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Structural Analysis', 'Advanced Geotechnical', 'Advanced Concrete Tech', 'Research Methodology'], m2: ['Earthquake Resistant Design', 'Environmental Remediation', 'Traffic Engineering', 'FEM'], m3: ['Thesis Phase I', 'Advanced Construction', 'Coastal Engineering', 'Rock Mechanics'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['Structural Engineering', 'Geotechnical', 'Transportation', 'Water Resources', 'Environmental'] },
    AIML: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Programming in C', 'Engineering Drawing', 'Environmental Science'], 2: ['Engineering Mathematics II', 'Data Structures', 'OOP with Python', 'Digital Logic', 'Probability & Statistics'], 3: ['Algorithms', 'Linear Algebra', 'Database Systems', 'Computer Networks', 'Probability & Random Processes'], 4: ['Machine Learning', 'Operating Systems', 'AI Fundamentals', 'Software Engineering', 'Data Mining'], 5: ['Deep Learning', 'NLP', 'Computer Vision', 'Big Data Analytics', 'Reinforcement Learning'], 6: ['Generative AI', 'MLOps', 'Edge AI', 'Recommendation Systems', 'AI Ethics'], 7: ['Advanced NLP', 'Autonomous Systems', 'Federated Learning', 'AI in Healthcare', 'Explainable AI'], 8: ['Capstone Project', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Machine Learning', 'Statistical Learning Theory', 'Advanced Deep Learning', 'Research Methodology'], m2: ['Probabilistic Graphical Models', 'Advanced NLP', 'Computer Vision', 'Optimization'], m3: ['Thesis Phase I', 'Generative Models', 'Multimodal AI', 'Causal Inference'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['Deep Learning Theory', 'NLP & LLMs', 'Computer Vision', 'Reinforcement Learning', 'AI for Science'] },
    IT: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Programming in C', 'Engineering Drawing', 'Environmental Science'], 2: ['Engineering Mathematics II', 'Data Structures', 'OOP with Java', 'Digital Electronics', 'Web Technologies'], 3: ['Algorithms', 'DBMS', 'Computer Networks', 'Operating Systems', 'Software Engineering'], 4: ['Cloud Computing', 'Information Security', 'Data Warehousing', 'Mobile App Development', 'DevOps'], 5: ['Machine Learning', 'Big Data', 'Blockchain', 'Cyber Security', 'Full Stack Development'], 6: ['AI Applications', 'Microservices', 'IoT', 'UI/UX Design', 'Project Management'], 7: ['Cloud Native Apps', 'SRE', 'Digital Forensics', 'AR/VR', 'Enterprise Architecture'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship'], m1: ['Advanced Cloud Computing', 'Advanced Security', 'Distributed Systems', 'Research Methodology'], m2: ['Data Engineering', 'DevSecOps', 'Advanced Blockchain', 'Quantum Computing'], m3: ['Thesis Phase I', 'Advanced Networks', 'Edge Computing', 'Privacy Engineering'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['Cloud & Distributed Systems', 'Cybersecurity', 'Data Engineering', 'Software Engineering', 'IoT & Edge'] },
    BME: { 1: ['Engineering Mathematics I', 'Engineering Physics', 'Engineering Chemistry', 'Human Anatomy', 'Programming in C'], 2: ['Engineering Mathematics II', 'Human Physiology', 'Biomechanics', 'Electronic Devices', 'Signals & Systems'], 3: ['Biomedical Instrumentation', 'Biomechanics', 'Analog Electronics', 'Signals & Systems', 'Biochemistry'], 4: ['Medical Imaging', 'Biomaterials', 'Digital Signal Processing', 'Control Systems', 'Pathology'], 5: ['Biomedical Signal Processing', 'Clinical Engineering', 'Rehabilitation Engineering', 'Bioinformatics', 'Medical Physics'], 6: ['Neural Engineering', 'Tissue Engineering', 'Hospital Management', 'Prosthetics', 'Telemedicine'], 7: ['AI in Healthcare', 'Wearable Devices', 'Drug Delivery Systems', 'Genomics', 'Medical Robotics'], 8: ['Project Work', 'Elective I', 'Elective II', 'Seminar', 'Clinical Internship'], m1: ['Advanced Biomedical Instrumentation', 'Computational Biology', 'Advanced Biomaterials', 'Research Methodology'], m2: ['Medical Image Analysis', 'Neural Interface', 'Regenerative Medicine', 'Biosensors'], m3: ['Thesis Phase I', 'Advanced Tissue Engg', 'Nanomedicine', 'Clinical Trials'], m4: ['Thesis Phase II', 'Elective Advanced', 'Seminar'], phd: ['Medical Devices', 'Neural Engineering', 'Tissue Engineering', 'Bioinformatics', 'AI in Medicine'] }
};

// === University Mapping ===
const UNIVERSITIES = {
    'IIT': 'Indian Institutes of Technology — Deep conceptual + Research focus',
    'NIT': 'National Institutes of Technology — Balanced theoretical & practical',
    'Anna': 'Anna University — Standardized syllabus & uniform exam patterns',
    'JNTU': 'JNTU — Application-oriented curriculum',
    'SRM': 'SRM Institute — Industry-aligned + modern electives',
    'VIT': 'VIT — Flexible credit system + project-based learning',
    'BITS': 'BITS Pilani — Intense continuous evaluation + practice school'
};

// === Career Roadmaps ===
const CAREERS = {
    'Software Engineer': { skills: ['DSA', 'System Design', 'OOP', 'Git', 'SQL', 'REST APIs', 'CI/CD'], courses: ['CS50', 'Neetcode 150', 'System Design Primer', 'Clean Code'], projects: ['Build REST API with auth', 'Full-stack CRUD app', 'CLI tool in Go/Rust', 'Open-source contribution'], internship: ['Google STEP', 'Microsoft Engage', 'Amazon SDE Intern', 'Flipkart Grid'], interview: ['DSA (Arrays, Trees, Graphs, DP)', 'System Design', 'OOP principles', 'Behavioral (STAR method)'] },
    'Data Scientist': { skills: ['Python', 'Statistics', 'SQL', 'ML (scikit-learn)', 'Deep Learning', 'Data Viz', 'Pandas/NumPy'], courses: ['Andrew Ng ML', 'Fast.ai', 'Kaggle courses', 'Statistics 110 Harvard'], projects: ['EDA on real dataset', 'ML classification pipeline', 'NLP sentiment analysis'], internship: ['Google AI', 'Amazon ML Intern', 'Fractal', 'Mu Sigma'], interview: ['Probability & Statistics', 'ML algorithms', 'SQL queries', 'Case studies'] },
    'AI Engineer': { skills: ['Python', 'PyTorch/TensorFlow', 'NLP', 'Computer Vision', 'MLOps', 'Docker', 'Cloud'], courses: ['Deep Learning Specialization', 'Hugging Face', 'Full Stack Deep Learning'], projects: ['Fine-tune LLM', 'Object detection system', 'RAG chatbot'], internship: ['OpenAI', 'DeepMind', 'NVIDIA AI', 'Microsoft Research'], interview: ['Deep Learning theory', 'Transformer architecture', 'Training optimization', 'System design for ML'] },
    'VLSI Design Engineer': { skills: ['Verilog/VHDL', 'Digital Design', 'CMOS', 'STA', 'DFT', 'Physical Design', 'Cadence/Synopsys tools'], courses: ['NPTEL Digital VLSI', 'Verilog HDL', 'CMOS VLSI Design', 'STA fundamentals'], projects: ['ALU design in Verilog', 'FIFO design', 'RISC-V processor', 'ASIC flow project'], internship: ['Intel', 'Qualcomm', 'Samsung Semiconductor', 'Texas Instruments'], interview: ['CMOS basics', 'Timing analysis', 'RTL design', 'Verification methods', 'Low power design'] }
};

// === PhD Research Guidance ===
const RESEARCH_GUIDE = {
    CSE: { topics: ['Federated Learning for Edge AI', 'LLM Alignment & Safety', 'Explainable AI in Healthcare', 'Privacy-Preserving ML'], methodology: 'Empirical evaluation with benchmark datasets, ablation studies. Combine theory with experiments.', journals: ['IEEE TPAMI', 'ACM Computing Surveys', 'NeurIPS', 'ICML', 'CVPR'] },
    ECE: { topics: ['6G Communication Systems', 'Neuromorphic Computing', 'RFIC Design for 5G/6G', 'Energy-Efficient VLSI', 'Reconfigurable Intelligent Surfaces'], methodology: 'Simulation-based (MATLAB/Cadence) + hardware prototype validation. Statistical analysis of BER/SNR.', journals: ['IEEE Trans. on Comm.', 'IEEE JSSC', 'IEEE Trans. on VLSI', 'Nature Electronics'] }
};

// === Coding Support Database ===
const CODING = {
    'Programming in C': { lang: 'c', ex: '#include <stdio.h>\nint main() {\n    printf("Hello World!\\n");\n    return 0;\n}', q: 'Write a C program to check if a number is prime.', a: '#include <stdio.h>\nint checkPrime(int n) {\n    if (n <= 1) return 0;\n    for (int i = 2; i * i <= n; i++)\n        if (n % i == 0) return 0;\n    return 1;\n}' },
    'OOP with Java': { lang: 'java', ex: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Object Oriented Programming");\n    }\n}', q: 'Write a Java class for a Bank Account with deposit and withdraw.', a: 'class Account {\n    private double bal=0;\n    void deposit(double a) { bal+=a; }\n    void withdraw(double a) { if(bal>=a) bal-=a; }\n}' },
    'Data Structures & Algorithms': { lang: 'cpp', ex: '#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n    vector<int> v = {1, 2, 3};\n    for(int x: v) cout << x << " ";\n}', q: 'Write a C++ function to reverse a linked list.', a: 'ListNode* reverseList(ListNode* head) {\n    ListNode *prev = NULL, *curr = head;\n    while (curr) {\n        ListNode* nxt = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nxt;\n    }\n    return prev;\n}' }
};

// === Core DSA Content for fallback ===
const DSA = {
    plan: [{ day: 1, topic: 'Arrays & Strings', act: 'Array ops, 2D arrays, string algos (KMP). Solve 5 problems on sliding window & two-pointer.', time: '3h', prio: 'n' }, { day: 2, topic: 'Linked Lists', act: 'Singly/Doubly/Circular: insert, delete, reverse. Floyd cycle detection. 5 problems.', time: '3h', prio: 'n' }, { day: 3, topic: 'Stacks & Queues', act: 'Array+LL impl, infix→postfix, circular queue, deque. Next Greater Element.', time: '3h', prio: 'n' }, { day: 4, topic: 'Trees & BST', act: 'BT traversals, BST ops, AVL rotations (LL,RR,LR,RL). Height, diameter.', time: '4h', prio: 'h' }, { day: 5, topic: 'Graphs', act: 'BFS, DFS, adjacency matrix/list, Dijkstra, topological sort. Cycle detection.', time: '4h', prio: 'h' }, { day: 6, topic: 'Sorting & Searching', act: 'Quick/Merge/Heap sort — complexity analysis. Binary search variations.', time: '3h', prio: 'm' }, { day: 7, topic: 'Hashing & Revision', act: 'Hash tables, collision resolution. Full mock test under timer.', time: '4h', prio: 'm' }],
    qs: [{ q: 'Compare Array vs Linked List with time complexities.', m: 10, d: 'Medium', t: 'Theory' }, { q: 'Write infix→postfix using stack. Trace: A*(B+C)-D/E', m: 10, d: 'Medium', t: 'Algorithm' }, { q: 'Explain AVL rotations. Insert 10,20,30,15,25,5 into empty AVL.', m: 15, d: 'Hard', t: 'Problem' }, { q: 'Compare BFS vs DFS with applications. Write BFS algorithm.', m: 10, d: 'Medium', t: 'Algorithm' }, { q: 'Explain Dijkstra\'s algo with example. Prove complexity with min-heap.', m: 15, d: 'Hard', t: 'Algorithm' }, { q: 'Write Quick Sort. Derive best/avg/worst case.', m: 10, d: 'Medium', t: 'Analysis' }, { q: 'What is hashing? Compare Open Addressing vs Separate Chaining.', m: 10, d: 'Medium', t: 'Theory' }],
    mcqs: [{ q: 'Time complexity of searching in balanced BST?', o: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], a: 1, e: 'Balanced BST halves search space → O(log n).' }, { q: 'Which data structure does BFS use?', o: ['Stack', 'Queue', 'Priority Queue', 'Linked List'], a: 1, e: 'BFS uses FIFO Queue; DFS uses Stack.' }, { q: 'Worst-case of Quick Sort?', o: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], a: 2, e: 'Sorted array with bad pivot → O(n²).' }, { q: 'Max balance factor in AVL tree?', o: ['0', '1', '2', '3'], a: 1, e: 'AVL: |BF| ≤ 1.' }, { q: 'Collision resolution using linked list?', o: ['Linear Probing', 'Quadratic Probing', 'Double Hashing', 'Separate Chaining'], a: 3, e: 'Chaining uses linked list at hash index.' }],
    sa: [{ q: 'Difference between Stack and Queue?', a: 'Stack: LIFO. Queue: FIFO. Both O(1) ops.' }, { q: 'Define Big-O with example.', a: 'Asymptotic upper bound. Binary Search O(log n), Linear O(n), Bubble O(n²).' }, { q: 'What is a BST?', a: 'Binary tree where left < parent < right. O(log n) balanced, O(n) degenerate.' }, { q: 'Explain recursion with example.', a: 'Function calls itself with smaller subproblem. factorial(n)=n×factorial(n-1), base: 0!=1.' }],
    formulas: [{ t: '📦 Array', items: ['Access O(1) | Search O(n) | Insert O(n)', '2D: arr[i][j] → i*cols+j'] }, { t: '🔗 Linked List', items: ['Search O(n) | Insert head O(1)', 'Doubly: O(1) delete with pointer'] }, { t: '📚 Stack & Queue', items: ['All ops O(1)', 'Queue via 2 stacks: amortized O(1)'] }, { t: '🌳 Trees', items: ['BST: O(log n) avg', 'BF = H(left)-H(right) ∈ {-1,0,1} AVL'] }, { t: '🔀 Graphs', items: ['BFS/DFS: O(V+E)', 'Dijkstra: O((V+E)logV) with heap'] }, { t: '⚡ Sorting', items: ['Quick: O(n log n) avg, O(n²) worst', 'Merge: O(n log n) always, stable'] }],
    revision: 'DSA is CS foundation. Arrays O(1) access, O(n) insert. LLs O(1) insert. Stacks=LIFO, Queues=FIFO. BSTs O(log n) balanced. Graphs: BFS shortest, DFS cycle. Quick Sort O(n log n).',
    strategy: [{ t: '<strong>Draw before code</strong> — sketch trees, trace graphs on paper.' }, { t: '<strong>Derive complexity</strong> — count loops: single=O(n), nested=O(n²).' }, { t: '<strong>Previous year papers</strong> — 60% questions repeat patterns.' }],
    patterns: [{ t: 'Theory', p: '30%', d: 'Definitions, comparisons' }, { t: 'Algorithm', p: '35%', d: 'Write algo + trace' }, { t: 'Problem', p: '20%', d: 'Construct/insert/delete' }, { t: 'Analysis', p: '15%', d: 'Complexity derivation' }],
    timeAlloc: [{ topic: 'Trees & Graphs', hrs: 10, pct: 40, c: '#F87171' }, { topic: 'Sorting & Hashing', hrs: 5, pct: 20, c: '#FBBF24' }, { topic: 'Arrays & Lists', hrs: 6, pct: 24, c: '#34D399' }, { topic: 'Revision', hrs: 4, pct: 16, c: '#A78BFA' }]
};

function makeGeneric(sub, level) { const w = sub.split(' ')[0]; const isAdv = level === 'PG' || level === 'PhD'; return { plan: [{ day: 1, topic: 'Fundamentals', act: `Core definitions, laws of ${sub}.${isAdv ? ' Review prerequisite knowledge.' : ''}`, time: '3h', prio: 'n' }, { day: 2, topic: 'Theory I', act: 'Key theorems, boundary conditions.', time: '3h', prio: 'n' }, { day: 3, topic: 'Theory II', act: 'Advanced concepts, special cases.', time: '3.5h', prio: 'm' }, { day: 4, topic: 'Applications', act: `Real-world ${w} problems.${isAdv ? ' Research paper examples.' : ''}`, time: '4h', prio: 'h' }, { day: 5, topic: 'Numericals', act: 'Computational methods, formula application.', time: '4h', prio: 'h' }, { day: 6, topic: 'Advanced', act: `Modern developments in ${w}.`, time: '3h', prio: 'm' }, { day: 7, topic: 'Mock Test', act: 'Full revision + timed paper solving.', time: '4h', prio: 'n' }], qs: [{ q: `State fundamental principles of ${sub}.`, m: 10, d: 'Easy', t: 'Theory' }, { q: `Derive key equation of ${sub}.`, m: 15, d: 'Hard', t: 'Derivation' }, { q: `Numerical: Apply core ${sub} formula.`, m: 10, d: 'Medium', t: 'Numerical' }, { q: `Design problem: Given constraints, design a ${w} system.`, m: 15, d: 'Hard', t: 'Design' }], mcqs: [{ q: `Core principle of ${sub}?`, o: ['Theory only', 'Applied analysis', 'Documentation', 'All above'], a: 3, e: `Integrates all aspects.` }, { q: 'Analysis method?', o: ['Analytical', 'Random', 'Trial', 'Guess'], a: 0, e: 'Analytical & numerical standard.' }, { q: 'Efficiency factor?', o: ['Design', 'Materials', 'Environment', 'All'], a: 3, e: 'Multiple factors affect efficiency.' }], sa: [{ q: `Define ${sub}.`, a: `Studies ${w.toLowerCase()} principles for design.` }, { q: 'Key assumptions?', a: 'Ideal conditions, linear behavior.' }], formulas: [{ t: `📖 ${w} Basics`, items: ['Core equations avec SI units', 'Boundary conditions'] }, { t: '📐 Analysis', items: ['Analysis formulas', 'Efficiency calc'] }], revision: `${sub} covers ${w.toLowerCase()} principles. Focus: core theorems + derivations. Solve previous year papers.`, strategy: [{ t: `<strong>Formula sheet</strong> — review 10 min/day.` }, { t: '<strong>Numericals > theory</strong> — solve 5 problems/day.' }, { t: '<strong>Diagrams</strong> — 10-15 marks per diagram.' }], patterns: [{ t: 'Theory', p: '35%', d: 'Definitions' }, { t: 'Numerical', p: '30%', d: 'Calculate' }, { t: 'Diagram', p: '20%', d: 'Draw' }], timeAlloc: [{ topic: 'Fundamentals', hrs: 3, pct: 15, c: '#34D399' }, { topic: 'Numericals', hrs: 8, pct: 40, c: '#F87171' }, { topic: 'Theory', hrs: 5, pct: 25, c: '#06B6D4' }, { topic: 'Revision', hrs: 4, pct: 20, c: '#A78BFA' }] } }
function getContent(sub, level) { return (sub === 'Data Structures & Algorithms' || sub === 'Data Structures') ? DSA : makeGeneric(sub, level); }

function calcImprovement(rating, weakCount, scores) { const profGap = 5 - rating; let base = profGap * 8 + 5 + Math.min(weakCount * 4, 16); if (scores.length > 0) { const avg = scores.reduce((a, b) => a + b, 0) / scores.length; if (avg < 35) base += 12; else if (avg < 50) base += 8; else if (avg < 65) base += 4; } const confidence = scores.length >= 2 ? 0.85 : 0.6; return { improvement: Math.min(Math.round(base * confidence), 55), confidence: Math.round(confidence * 100) }; }
function getAdaptiveMode(r) { if (r <= 2) return { mode: 'Fundamentals Focus', msg: 'Emphasizing basics — definitions, simple examples, step-by-step derivations.', color: '#F87171' }; if (r <= 3) return { mode: 'Balanced Approach', msg: 'Equal weight to theory + problem-solving. Moderate difficulty.', color: '#FBBF24' }; return { mode: 'Advanced Application', msg: 'Application questions, edge cases, optimization. Exam-level rigor.', color: '#34D399' }; }

// === Tracker Setup ===
const Tracker = {
    get: () => JSON.parse(localStorage.getItem('skillai_tracker') || '{"sessions":0,"scores":[],"weak":{}}'),
    save: (d) => localStorage.setItem('skillai_tracker', JSON.stringify(d)),
    addScore: (s) => { const d = Tracker.get(); d.scores.push(s); Tracker.save(d); },
    addWeak: (wks) => { const d = Tracker.get(); wks.forEach(w => d.weak[w] = (d.weak[w] || 0) + 1); Tracker.save(d); },
    addSession: () => { const d = Tracker.get(); d.sessions++; Tracker.save(d); }
};

// === DOM Init ===
document.addEventListener('DOMContentLoaded', () => { initNav(); initLevel(); initDropdowns(); initRating(); initForm(); initTabs(); initLang(); animateCounters(); scrollReveal(); });

function initLang() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            curLang = btn.dataset.l;
            translateTabs();
        };
    });
}
function translateTabs() {
    const d = I18N[curLang];
    const map = { overview: d.ovp, plan: d.splan, questions: d.qs, mcq: d.mcq, shortans: d.sans, formulas: d.form, revision: d.rev, strategy: d.strat, predict: d.pred, career: d.car, research: d.res, coding: d.code, progress: d.prog };
    document.querySelectorAll('.tab').forEach(t => { const k = t.dataset.t; if (map[k]) t.innerHTML = t.innerHTML.replace(/[A-Za-z ]+$/, ' ' + map[k]); });
}

function initNav() { const n = document.getElementById('nav'); window.addEventListener('scroll', () => n.classList.toggle('scrolled', scrollY > 40)); }
function initLevel() {
    const lv = document.getElementById('academicLevel'), sem = document.getElementById('semester');
    if (!lv) return;
    lv.onchange = () => {
        const v = lv.value;
        sem.innerHTML = '<option value="">Select</option>';
        if (v === 'UG') { for (let i = 1; i <= 8; i++)sem.innerHTML += `<option value="${i}"${i === 3 ? ' selected' : ''}>${i}${i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} Semester</option>`; }
        else if (v === 'PG') { for (let i = 1; i <= 4; i++)sem.innerHTML += `<option value="m${i}">${i}${i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} Semester (M.Tech)</option>`; }
        else if (v === 'PhD') { ['Coursework', 'Qualifying Exam', 'Proposal Defense', 'Thesis Work'].forEach(s => sem.innerHTML += `<option value="phd">${s}</option>`); }
        const cg = document.getElementById('careerGoalField'); if (cg) cg.style.display = (v === 'UG' || v === 'PG') ? 'block' : 'none';
        updateSubjects();
    };
}
function initDropdowns() {
    const b = document.getElementById('branch'), s = document.getElementById('semester'), sub = document.getElementById('subject');
    b.onchange = updateSubjects; s.onchange = updateSubjects; sub.onchange = () => populateChips();
}
function updateSubjects() {
    const b = document.getElementById('branch').value, s = document.getElementById('semester').value, sub = document.getElementById('subject');
    sub.innerHTML = '<option value="">Select Subject</option>'; document.getElementById('weakChips').innerHTML = '';
    if (b && s && DB[b]?.[s]) DB[b][s].forEach(n => sub.innerHTML += `<option value="${n}">${n}</option>`);
    else if (b && s === 'phd' && DB[b]?.phd) DB[b].phd.forEach(n => sub.innerHTML += `<option value="${n}">${n}</option>`);
}
function populateChips() { const sub = document.getElementById('subject').value, g = document.getElementById('weakChips'); g.innerHTML = ''; if (!sub) return; const lv = document.getElementById('academicLevel')?.value || 'UG'; getContent(sub, lv).plan.forEach(d => { const c = document.createElement('span'); c.className = 'chip'; c.textContent = d.topic; c.onclick = () => c.classList.toggle('flagged'); g.appendChild(c); }); }
function initRating() { const sl = document.getElementById('selfRating'), badge = document.getElementById('ratingBadge'), msg = document.getElementById('adaptMsg'); sl.oninput = () => { const v = +sl.value, m = getAdaptiveMode(v); badge.textContent = `${v}/5 — ${m.mode}`; msg.textContent = m.msg; }; }
function initTabs() { document.addEventListener('click', e => { if (!e.target.classList.contains('tab')) return; document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === e.target)); document.querySelectorAll('.tp').forEach(p => p.style.display = 'none'); const p = document.getElementById('tp-' + e.target.dataset.t); if (p) p.style.display = 'block'; }); }

const sleep = ms => new Promise(r => setTimeout(r, ms));

function initForm() {
    document.getElementById('mentorForm').onsubmit = async e => {
        e.preventDefault();
        const sub = document.getElementById('subject').value; if (!sub) { alert('Select a subject first.'); return; }
        const rating = +document.getElementById('selfRating').value;
        const weak = [...document.querySelectorAll('.chip.flagged')].map(c => c.textContent);
        const scores = [document.getElementById('sc1').value, document.getElementById('sc2').value, document.getElementById('sc3').value].filter(Boolean).map(Number);
        const level = document.getElementById('academicLevel')?.value || 'UG';
        const career = document.getElementById('careerGoal')?.value || '';
        const branch = document.getElementById('branch').value;
        const uni = document.getElementById('university').value;
        const btn = document.getElementById('genBtn');

        Tracker.addSession();
        if (weak.length) Tracker.addWeak(weak);

        document.getElementById('genText').style.display = 'none'; document.getElementById('genLoader').style.display = 'inline-flex'; btn.disabled = true;
        document.getElementById('outIdle').style.display = 'none'; document.getElementById('outResults').style.display = 'none';
        const proc = document.getElementById('outProc'); proc.style.display = 'flex';
        document.getElementById('procRating').textContent = rating + '/5';

        const steps = proc.querySelectorAll('.pl'); for (const s of steps) { s.classList.add('active'); await sleep(400); s.classList.remove('active'); s.classList.add('done'); } await sleep(300);

        const C = getContent(sub, level), { improvement, confidence } = calcImprovement(rating, weak.length, scores), mode = getAdaptiveMode(rating);

        renderOverview(sub, rating, weak, scores, improvement, confidence, mode, C, level, career, uni);
        renderPlan(C, weak, rating); renderQuestions(C, rating); renderMCQs(C); renderShortAns(C); renderFormulas(C); renderRevision(C); renderStrategy(C); renderPredict(improvement, confidence, C, rating);

        if (career) renderCareer(career);
        if (level === 'PhD') renderResearch(branch);
        renderCoding(sub);
        renderProgress();

        const getTab = t => document.querySelector(`[data-t="${t}"]`);
        if (getTab('career')) getTab('career').style.display = career ? 'inline-flex' : 'none';
        if (getTab('research')) getTab('research').style.display = level === 'PhD' ? 'inline-flex' : 'none';
        if (getTab('coding')) getTab('coding').style.display = CODING[sub] ? 'inline-flex' : 'none';

        proc.style.display = 'none'; steps.forEach(s => s.classList.remove('active', 'done'));
        document.getElementById('outResults').style.display = 'block'; document.querySelectorAll('.tab')[0].click();
        document.getElementById('genText').style.display = 'inline'; document.getElementById('genLoader').style.display = 'none'; btn.disabled = false;
        if (innerWidth < 768) document.getElementById('mOutput').scrollIntoView({ behavior: 'smooth' });
    };
}

// === Render Functions ===
function renderOverview(sub, rating, weak, scores, imp, conf, mode, C, level, career, uni) {
    const avg = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(0) : '—';
    const lvBadge = level === 'PhD' ? '🎓 PhD Research' : level === 'PG' ? '🎓 M.Tech' : '📚 Undergraduate';
    const uniText = uni ? UNIVERSITIES[uni] : '';
    document.getElementById('tp-overview').innerHTML = `<h3>📊 ${I18N[curLang].ovp} — ${sub}</h3>
    <div class="info-box ib-info" style="margin-bottom:12px">${lvBadge}${uniText ? ` · 🏫 ${uniText.split('—')[0]}` : ''}${career ? ` · 🎯 Career: ${career}` : ''}</div>
    <div class="ov-grid">
      <div class="ov-card"><div class="ov-icon">🎯</div><div class="ov-val">${rating}/5</div><div class="ov-lbl">Self Rating</div></div>
      <div class="ov-card"><div class="ov-icon">📈</div><div class="ov-val">+${imp}%</div><div class="ov-lbl">Predicted Gain</div></div>
      <div class="ov-card"><div class="ov-icon">🧠</div><div class="ov-val">${mode.mode.split(' ')[0]}</div><div class="ov-lbl">Adaptive Mode</div></div>
      <div class="ov-card"><div class="ov-icon">📝</div><div class="ov-val">${avg}</div><div class="ov-lbl">Avg Score</div></div>
    </div>
    <h4>Concept Classification (Bloom's Taxonomy)</h4>
    <div class="concept-badges">
      ${C.plan.slice(0, 2).map(d => `<span class="cbadge cb-f">🟢 ${d.topic}</span>`).join('')}
      ${C.plan.slice(2, 5).map(d => `<span class="cbadge cb-i">🟡 ${d.topic}</span>`).join('')}
    </div>
    ${weak.length ? `<div class="info-box ib-warn">⚠️ <strong>Flagged weak:</strong> ${weak.join(', ')} — these get 2.5× study time.</div>` : ''}
    <div class="info-box ib-info">🎯 <strong>${mode.mode}:</strong> ${mode.msg}</div>`;
}

function renderPlan(C, weak, rating) {
    document.getElementById('tp-plan').innerHTML = `<h3>📅 7-Day Adaptive ${I18N[curLang].splan}</h3><table class="stable"><thead><tr><th>Day</th><th>Topic</th><th>Activities</th></tr></thead><tbody>${C.plan.map(d => `<tr><td><span class="day-b">Day ${d.day}</span></td><td style="font-weight:600;color:#E8ECF4">${d.topic}</td><td>${d.act}</td></tr>`).join('')}</tbody></table>`;
}

function renderQuestions(C, rating) {
    document.getElementById('tp-questions').innerHTML = `<h3>❓ 10 Exam Questions</h3>${C.qs.map((q, i) => `<div class="qi"><div class="qi-n">${i + 1}</div><div class="qi-body"><div class="qi-text">${q.q}</div><div class="qi-tags"><span class="qi-tag qt-marks">${q.m}M</span><span class="qi-tag qt-${q.d.toLowerCase()}">${q.d}</span></div></div></div>`).join('')}`;
}

function renderMCQs(C) {
    window._mcq = { ans: new Set(), score: 0, total: C.mcqs.length };
    document.getElementById('tp-mcq').innerHTML = `<h3>🎯 MCQ Quiz (${C.mcqs.length})</h3><p style="color:#4B5563;font-size:.78rem;margin-bottom:10px">Evaluate understanding instantly. Scores are tracked in Progress.</p>
    ${C.mcqs.map((m, qi) => `<div class="mcq-card" id="mcq${qi}"><div class="mcq-q">Q${qi + 1}. ${m.q}</div><div class="mcq-opts">${m.o.map((o, oi) => `<div class="mcq-opt" onclick="checkMCQ(${qi},${oi},${m.a})">${String.fromCharCode(65 + oi)}) ${o}</div>`).join('')}</div><div class="mcq-exp" id="exp${qi}">💡 Feedback: ${m.e}</div></div>`).join('')}
    <div class="mcq-score-box" id="mcqSc" style="display:none"><div class="mcq-score-big" id="mcqScN"></div></div>`;
}
window.checkMCQ = function (qi, oi, ans) {
    if (window._mcq.ans.has(qi)) return;
    window._mcq.ans.add(qi);
    const opts = document.getElementById('mcq' + qi).querySelectorAll('.mcq-opt');
    opts.forEach((o, i) => { o.style.pointerEvents = 'none'; if (i === ans) o.classList.add('correct'); if (i === oi && i !== ans) o.classList.add('wrong'); });
    if (oi === ans) window._mcq.score++;
    document.getElementById('exp' + qi).classList.add('show');
    if (window._mcq.ans.size === window._mcq.total) {
        document.getElementById('mcqSc').style.display = 'block';
        const pct = Math.round((window._mcq.score / window._mcq.total) * 100);
        document.getElementById('mcqScN').innerHTML = `${window._mcq.score}/${window._mcq.total} — ${pct}%<div style="font-size:0.4em;margin-top:5px;font-weight:400">${pct < 50 ? 'Need Revision. Added to Weak Topics.' : 'Good Job!'}</div>`;
        Tracker.addScore(pct);
        renderProgress(); // Update progress panel with new score
    }
};

function renderShortAns(C) { document.getElementById('tp-shortans').innerHTML = `<h3>✍️ Short-Answer Questions</h3>${C.sa.map((s, i) => `<div class="sa-card"><div class="sa-q">Q${i + 1}. ${s.q}</div><span class="sa-toggle" onclick="this.nextElementSibling.classList.toggle('show')">Show Answer →</span><div class="sa-ans">${s.a}</div></div>`).join('')}`; }
function renderFormulas(C) { document.getElementById('tp-formulas').innerHTML = `<h3>⚡ Formulas & Concepts</h3>${C.formulas.map(f => `<div class="f-card"><h4>${f.t}</h4>${f.items.map(i => `<div class="f-item">${i}</div>`).join('')}</div>`).join('')}`; }
function renderRevision(C) { document.getElementById('tp-revision').innerHTML = `<h3>📝 Revision Summary</h3><div class="rev-box"><p>${C.revision}</p></div>`; }
function renderStrategy(C) { document.getElementById('tp-strategy').innerHTML = `<h3>🛠️ Problem-Solving Strategy</h3>${C.strategy.map((s, i) => `<div class="strat-item"><div class="strat-n">${i + 1}</div><div class="strat-text">${s.t}</div></div>`).join('')}`; }
function renderPredict(imp, conf, C, rating) { document.getElementById('tp-predict').innerHTML = `<h3>📈 Performance Prediction</h3><div class="pred-hero"><div class="pred-big"><span class="pred-plus">+${imp}%</span></div><div class="pred-sub">Expected gain · ${conf}% confidence</div></div>`; }

function renderCareer(career) {
    const c = CAREERS[career]; if (!c) return;
    document.getElementById('tp-career').innerHTML = `<h3>🎓 Career Roadmap: ${career}</h3>
    <h4>🛠️ Required Skills</h4><div class="concept-badges">${c.skills.map(s => `<span class="cbadge cb-f">✅ ${s}</span>`).join('')}</div>
    <h4>📚 Recommended Courses</h4><div class="career-list">${c.courses.map((r, i) => `<div class="strat-item"><div class="strat-n">${i + 1}</div><div class="strat-text">${r}</div></div>`).join('')}</div>`;
}

function renderResearch(branch) {
    const r = RESEARCH_GUIDE[branch] || RESEARCH_GUIDE['CSE'];
    document.getElementById('tp-research').innerHTML = `<h3>🔬 Research Guidance — ${branch}</h3>
    <h4>📌 Suggested Research Topics</h4><div class="career-list">${r.topics.map((t, i) => `<div class="strat-item"><div class="strat-n">${i + 1}</div><div class="strat-text">${t}</div></div>`).join('')}</div>
    <h4>📰 Target Journals</h4><div class="concept-badges">${r.journals.map(j => `<span class="cbadge cb-f">📰 ${j}</span>`).join('')}</div>`;
}

function renderCoding(sub) {
    const c = CODING[sub]; if (!c) return;
    document.getElementById('tp-coding').innerHTML = `<h3>💻 Coding Playground</h3>
    <div class="info-box ib-info">Language: <strong>${c.lang.toUpperCase()}</strong></div>
    <h4>Code Example</h4><pre class="code-block"><code>${c.ex}</code></pre>
    <h4>Exercise</h4><p style="margin-bottom:10px">${c.q}</p>
    <span class="sa-toggle" onclick="this.nextElementSibling.classList.toggle('show')">Show Solution →</span><pre class="code-block" style="display:none"><code>${c.a}</code></pre>`;
}

function renderProgress() {
    const tr = Tracker.get();
    const avgScore = tr.scores.length ? Math.round(tr.scores.reduce((a, b) => a + b, 0) / tr.scores.length) : 0;
    const wf = Object.entries(tr.weak).sort((a, b) => b[1] - a[1]).map(x => x[0]).slice(0, 3);

    document.getElementById('tp-progress').innerHTML = `<h3>📊 Adaptive Progress</h3>
    <div class="ov-grid">
      <div class="ov-card"><div class="ov-icon">🔄</div><div class="ov-val">${tr.sessions}</div><div class="ov-lbl">Sessions Generated</div></div>
      <div class="ov-card"><div class="ov-icon">🎯</div><div class="ov-val">${avgScore}%</div><div class="ov-lbl">Avg MCQ Score</div></div>
    </div>
    ${wf.length ? `<h4>⚠️ Persistent Weak Areas</h4><div class="concept-badges">${wf.map(w => `<span class="cbadge cb-a">🔴 ${w}</span>`).join('')}</div>` : ''}
    <div class="info-box ib-info">Progress is automatically tracked using your browser storage.</div>`;
}

// === Counters & Animations ===
function animateCounters() { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (!e.isIntersecting) return; const el = e.target, target = +el.dataset.count; let cur = 0; const inc = target / 40; const t = setInterval(() => { cur += inc; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = Math.floor(cur); }, 30); obs.unobserve(el); }); }, { threshold: .5 }); document.querySelectorAll('.hstat-val').forEach(el => obs.observe(el)); }
function scrollReveal() { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } }); }, { threshold: .06, rootMargin: '0px 0px -30px 0px' }); document.querySelectorAll('.feat-card,.imp-card,.arch-layer,.cta-box').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(24px)'; el.style.transition = 'all .5s cubic-bezier(.4,0,.2,1)'; obs.observe(el); }); }
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth' }); }); });
