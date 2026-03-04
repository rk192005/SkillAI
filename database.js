// ============================================================
// SkillAI Complete Subject Database | Team APEIRON
// All branches, semesters, subjects, and career paths
// ============================================================

const SKILL_AI_DATABASE = {
    // === ENGINEERING BRANCHES ===
    branches: [
        'CSE', 'ECE', 'ME', 'EEE', 'CE', 'AIDS', 'IT', 'BME'
    ],

    // === ACADEMIC LEVELS ===
    levels: [
        'undergraduate', // Semester 1-8
        'postgraduate',  // M.Tech, MS (2 years)
        'doctoral'       // PhD (3-5 years)
    ],

    // === CAREER PATHS ===
    careerPaths: [
        'Software Engineer',
        'Data Scientist',
        'AI Engineer',
        'VLSI Design Engineer',
        'Embedded Systems Engineer',
        'Cybersecurity Engineer',
        'Mechanical Design Engineer',
        'Structural Engineer',
        'DevOps Engineer',
        'Cloud Architect'
    ],

    // === COMPUTER SCIENCE & ENGINEERING (CSE) ===
    CSE: {
        name: 'Computer Science & Engineering',
        semesters: {
            1: {
                subjects: [
                    { name: 'Programming in C', code: 'CS101', credits: 4, topics: ['Variables', 'Functions', 'Arrays', 'Pointers', 'File I/O'] },
                    { name: 'Discrete Mathematics', code: 'CS102', credits: 4, topics: ['Logic', 'Sets', 'Relations', 'Graphs', 'Combinatorics'] },
                    { name: 'Digital Logic Design', code: 'CS103', credits: 4, topics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Circuits', 'Flip-flops'] },
                    { name: 'Engineering Mechanics', code: 'CS104', credits: 3, topics: ['Statics', 'Dynamics', 'Equilibrium'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Data Structures', code: 'CS201', credits: 4, topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs'] },
                    { name: 'Programming in Java', code: 'CS202', credits: 4, topics: ['OOP', 'Inheritance', 'Polymorphism', 'Collections', 'Exception Handling'] },
                    { name: 'Algorithms', code: 'CS203', credits: 4, topics: ['Sorting', 'Searching', 'Complexity Analysis', 'Greedy', 'Dynamic Programming'] },
                    { name: 'Linear Algebra', code: 'CS204', credits: 3, topics: ['Matrices', 'Vectors', 'Eigen Values', 'Transformations'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Operating Systems', code: 'CS301', credits: 4, topics: ['Processes', 'Scheduling', 'Memory Management', 'File Systems', 'Synchronization'] },
                    { name: 'Database Management Systems', code: 'CS302', credits: 4, topics: ['Relational Model', 'SQL', 'Transactions', 'Indexing', 'Normalization'] },
                    { name: 'Computer Networks', code: 'CS303', credits: 4, topics: ['Layers', 'TCP/IP', 'Routing', 'DNS', 'Firewalls'] },
                    { name: 'Digital Signal Processing', code: 'CS304', credits: 3, topics: ['Fourier Transform', 'Filters', 'Sampling', 'Convolution'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'Web Technologies', code: 'CS401', credits: 4, topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'REST APIs'] },
                    { name: 'Software Engineering', code: 'CS402', credits: 4, topics: ['SDLC', 'Design Patterns', 'Testing', 'DevOps', 'Agile'] },
                    { name: 'Machine Learning', code: 'CS403', credits: 4, topics: ['Regression', 'Classification', 'Clustering', 'Neural Networks'] },
                    { name: 'Compiler Design', code: 'CS404', credits: 3, topics: ['Lexical Analysis', 'Parsing', 'Semantic Analysis', 'Code Generation'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'Artificial Intelligence', code: 'CS501', credits: 4, topics: ['Search', 'Planning', 'Knowledge Representation', 'Expert Systems'] },
                    { name: 'Computer Graphics', code: 'CS502', credits: 4, topics: ['3D Rendering', 'Transformations', 'Lighting', 'Shaders'] },
                    { name: 'Information Security', code: 'CS503', credits: 4, topics: ['Cryptography', 'Authentication', 'Access Control', 'Network Security'] },
                    { name: 'Cloud Computing', code: 'CS504', credits: 3, topics: ['AWS', 'Azure', 'Docker', 'Kubernetes'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Deep Learning', code: 'CS601', credits: 4, topics: ['CNNs', 'RNNs', 'Transformers', 'GANs'] },
                    { name: 'Natural Language Processing', code: 'CS602', credits: 4, topics: ['Tokenization', 'Embeddings', 'RNNs for NLP', 'Transformers'] },
                    { name: 'Distributed Systems', code: 'CS603', credits: 4, topics: ['Consensus', 'Fault Tolerance', 'Load Balancing', 'Scalability'] },
                    { name: 'Electives', code: 'CS604', credits: 3, topics: ['Choose from various electives'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Big Data Technologies', code: 'CS701', credits: 4, topics: ['Hadoop', 'Spark', 'MapReduce', 'Data Warehousing'] },
                    { name: 'Internet of Things', code: 'CS702', credits: 4, topics: ['Sensors', 'Protocols', 'Edge Computing', 'IoT Platforms'] },
                    { name: 'Blockchain Technology', code: 'CS703', credits: 4, topics: ['Smart Contracts', 'Cryptocurrency', 'Consensus Mechanisms'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Project', code: 'CS801', credits: 6, topics: ['Application Development', 'Integration', 'Deployment'] },
                    { name: 'Capstone Project', code: 'CS802', credits: 4, topics: ['Industry Problem Solving'] }
                ]
            }
        }
    },

    // === ELECTRONICS & COMMUNICATION ENGINEERING (ECE) ===
    ECE: {
        name: 'Electronics & Communication Engineering',
        semesters: {
            1: {
                subjects: [
                    { name: 'Signals & Systems', code: 'EC101', credits: 4, topics: ['Continuous & Discrete Signals', 'Fourier Analysis', 'Laplace Transform'] },
                    { name: 'Electronic Devices', code: 'EC102', credits: 4, topics: ['Semiconductors', 'Diodes', 'Transistors', 'MOSFETs'] },
                    { name: 'Network Theory', code: 'EC103', credits: 4, topics: ['Circuits', 'Thevenin', 'Norton', 'Network Theorems'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Digital Electronics', code: 'EC201', credits: 4, topics: ['Logic Gates', 'Combinational Circuits', 'Sequential Circuits', 'HDL'] },
                    { name: 'Analog Circuits', code: 'EC202', credits: 4, topics: ['Amplifiers', 'Feedback', 'Oscillators'] },
                    { name: 'Electromagnetic Theory', code: 'EC203', credits: 4, topics: ['Maxwell Equations', 'Wave Propagation', 'Transmission Lines'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Analog Communication', code: 'EC301', credits: 4, topics: ['Modulation', 'Demodulation', 'Noise', 'AM, FM, PM'] },
                    { name: 'Microprocessors & Microcontrollers', code: 'EC302', credits: 4, topics: ['Assembly', 'ARM Architecture', 'Programming', 'Interfacing'] },
                    { name: 'Control Systems', code: 'EC303', credits: 4, topics: ['Transfer Functions', 'Stability', 'Root Locus', 'Bode Plot'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'Digital Communication', code: 'EC401', credits: 4, topics: ['PCM', 'Delta Modulation', 'Line Coding', 'Digital Modulation'] },
                    { name: 'VLSI Design', code: 'EC402', credits: 4, topics: ['Combinational Design', 'Sequential Design', 'Timing', 'Low Power Design'] },
                    { name: 'Antenna & Propagation', code: 'EC403', credits: 4, topics: ['Antenna Theory', 'Radiation', 'Impedance Matching'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'Microwave Engineering', code: 'EC501', credits: 4, topics: ['Waveguides', 'Microwave Devices', 'Filters', 'Amplifiers'] },
                    { name: 'Optical Communication', code: 'EC502', credits: 4, topics: ['Fiber Optics', 'Modulation', 'Receivers', 'Networks'] },
                    { name: 'Embedded Systems', code: 'EC503', credits: 4, topics: ['Real-time OS', 'Device Drivers', 'Protocol Stacks'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Wireless Communication', code: 'EC601', credits: 4, topics: ['Cellular Systems', '5G', 'Channel Modeling', 'MIMO'] },
                    { name: 'Signal Processing', code: 'EC602', credits: 4, topics: ['DSP Algorithms', 'Filtering', 'Spectrum Analysis'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Satellite Communication', code: 'EC701', credits: 4, topics: ['Orbits', 'Link Budget', 'Systems'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Project', code: 'EC801', credits: 6, topics: ['Design & Implementation'] }
                ]
            }
        }
    },

    // === MECHANICAL ENGINEERING (ME) ===
    ME: {
        name: 'Mechanical Engineering',
        semesters: {
            1: {
                subjects: [
                    { name: 'Engineering Mechanics', code: 'ME101', credits: 4, topics: ['Statics', 'Dynamics', 'Equilibrium', 'Friction'] },
                    { name: 'Thermodynamics-I', code: 'ME102', credits: 4, topics: ['First Law', 'Second Law', 'Entropy', 'Cycles'] },
                    { name: 'Manufacturing Technology', code: 'ME103', credits: 3, topics: ['Casting', 'Forming', 'Machining'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Mechanics of Materials', code: 'ME201', credits: 4, topics: ['Stress', 'Strain', 'Bending', 'Torsion'] },
                    { name: 'Fluid Mechanics', code: 'ME202', credits: 4, topics: ['Fluid Properties', 'Flow', 'Pressure', 'Drag'] },
                    { name: 'Heat Transfer', code: 'ME203', credits: 4, topics: ['Conduction', 'Convection', 'Radiation'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Machine Design-I', code: 'ME301', credits: 4, topics: ['Design Methodology', 'Failure Theories', 'Fatigue'] },
                    { name: 'Thermodynamics-II', code: 'ME302', credits: 4, topics: ['Power Cycles', 'Refrigeration', 'Phase Diagrams'] },
                    { name: 'Kinematics & Dynamics of Machines', code: 'ME303', credits: 4, topics: ['Mechanisms', 'Velocity', 'Acceleration', 'Forces'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'Machine Design-II', code: 'ME401', credits: 4, topics: ['Shaft Design', 'Bearing Design', 'Gear Design'] },
                    { name: 'CAD/CAM', code: 'ME402', credits: 4, topics: ['3D Modeling', 'Simulation', 'CNC Programming'] },
                    { name: 'Internal Combustion Engines', code: 'ME403', credits: 4, topics: ['Engine Cycles', 'Combustion', 'Performance'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'FEA (Finite Element Analysis)', code: 'ME501', credits: 4, topics: ['Meshing', 'Stress Analysis', 'Modal Analysis'] },
                    { name: 'Mechatronics', code: 'ME502', credits: 4, topics: ['Sensors', 'Actuators', 'Control', 'Robotics'] },
                    { name: 'Industrial Engineering', code: 'ME503', credits: 3, topics: ['Production Planning', 'Scheduling', 'Quality Control'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Renewable Energy', code: 'ME601', credits: 4, topics: ['Solar', 'Wind', 'Hydro', 'Biomass'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Robotics', code: 'ME701', credits: 4, topics: ['Kinematics', 'Dynamics', 'Control', 'Vision'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Project', code: 'ME801', credits: 6, topics: ['Design & Development'] }
                ]
            }
        }
    },

    // === ELECTRICAL & ELECTRONICS ENGINEERING (EEE) ===
    EEE: {
        name: 'Electrical & Electronics Engineering',
        semesters: {
            1: {
                subjects: [
                    { name: 'Circuit Theory', code: 'EE101', credits: 4, topics: ['Kirchhoff Laws', 'Network Theorems', 'Transient Analysis'] },
                    { name: 'Electrical Machines-I', code: 'EE102', credits: 4, topics: ['DC Machines', 'Transformers', 'EMF', 'Torque'] },
                    { name: 'Electronic Devices', code: 'EE103', credits: 4, topics: ['Diodes', 'Transistors', 'Semiconductor Physics'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Electrical Machines-II', code: 'EE201', credits: 4, topics: ['AC Machines', 'Induction Motors', 'Synchronous Machines'] },
                    { name: 'Power Systems-I', code: 'EE202', credits: 4, topics: ['Generation', 'Transmission', 'Distribution', 'Power Flow'] },
                    { name: 'Control Systems', code: 'EE203', credits: 4, topics: ['Feedback', 'Stability', 'Root Locus', 'Controllers'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Power Electronics', code: 'EE301', credits: 4, topics: ['Converters', 'Inverters', 'Rectifiers', 'Thyristors'] },
                    { name: 'Measurements & Instrumentation', code: 'EE302', credits: 3, topics: ['Meters', 'Calibration', 'Error Analysis'] },
                    { name: 'Signals & Systems', code: 'EE303', credits: 4, topics: ['Fourier Analysis', 'Laplace Transform', 'Z-Transform'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'Power Systems-II', code: 'EE401', credits: 4, topics: ['Fault Analysis', 'Protection', 'Stability'] },
                    { name: 'Microprocessors', code: 'EE402', credits: 3, topics: ['Architecture', 'Programming', 'Interfacing'] },
                    { name: 'Digital Signal Processing', code: 'EE403', credits: 4, topics: ['Filters', 'FFT', 'Applications'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'High Voltage Engineering', code: 'EE501', credits: 4, topics: ['Breakdown', 'Insulation', 'Testing'] },
                    { name: 'Power System Protection', code: 'EE502', credits: 4, topics: ['Relays', 'Circuit Breakers', 'Grounding'] },
                    { name: 'Special Electrical Machines', code: 'EE503', credits: 3, topics: ['Stepper Motors', 'Servo Motors', 'Linear Motors'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Electric Drives', code: 'EE601', credits: 4, topics: ['DC Drives', 'AC Drives', 'Speed Control'] },
                    { name: 'FACTS & Smart Grid', code: 'EE602', credits: 4, topics: ['Power Quality', 'Smart Metering', 'Demand Response'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Renewable Energy Integration', code: 'EE701', credits: 4, topics: ['Solar', 'Wind', 'Grid Integration'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Project', code: 'EE801', credits: 6, topics: ['System Design & Implementation'] }
                ]
            }
        }
    },

    // === CIVIL ENGINEERING (CE) ===
    CE: {
        name: 'Civil Engineering',
        semesters: {
            1: {
                subjects: [
                    { name: 'Strength of Materials', code: 'CE101', credits: 4, topics: ['Stress', 'Strain', 'Bending', 'Shear'] },
                    { name: 'Fluid Mechanics', code: 'CE102', credits: 4, topics: ['Fluid Properties', 'Pressure', 'Flow', 'Applications'] },
                    { name: 'Surveying', code: 'CE103', credits: 3, topics: ['Measurements', 'Theodolite', 'Leveling', 'Triangulation'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Structural Analysis-I', code: 'CE201', credits: 4, topics: ['Beams', 'Frames', 'Trusses', 'Virtual Work'] },
                    { name: 'Geotechnical Engineering', code: 'CE202', credits: 4, topics: ['Soil Properties', 'Consolidation', 'Bearing Capacity'] },
                    { name: 'Hydraulics', code: 'CE203', credits: 4, topics: ['Open Channel Flow', 'Pipe Flow', 'Pumps'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Concrete Technology', code: 'CE301', credits: 4, topics: ['Mix Design', 'Testing', 'Durability'] },
                    { name: 'Structural Analysis-II', code: 'CE302', credits: 4, topics: ['Matrix Methods', 'Slope Deflection', 'Moment Distribution'] },
                    { name: 'Foundation Engineering', code: 'CE303', credits: 4, topics: ['Shallow', 'Deep', 'Settlement', 'Stability'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'RCC Design', code: 'CE401', credits: 4, topics: ['Beam Design', 'Column Design', 'Slab Design', 'Limit State'] },
                    { name: 'Environmental Engineering', code: 'CE402', credits: 4, topics: ['Water Treatment', 'Wastewater', 'Air Quality'] },
                    { name: 'Transportation Engineering', code: 'CE403', credits: 4, topics: ['Road Design', 'Traffic', 'Pavement'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'Steel Structures', code: 'CE501', credits: 4, topics: ['Connections', 'Beams', 'Columns', 'Design'] },
                    { name: 'Water Resources Engineering', code: 'CE502', credits: 4, topics: ['Hydrology', 'Dams', 'Irrigation'] },
                    { name: 'Earthquake Engineering', code: 'CE503', credits: 3, topics: ['Seismic Design', 'Analysis', 'Retrofit'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Construction Management', code: 'CE601', credits: 4, topics: ['Planning', 'Scheduling', 'Cost Control'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Traffic Engineering', code: 'CE701', credits: 4, topics: ['Capacity Analysis', 'Signal Design', 'Safety'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Project', code: 'CE801', credits: 6, topics: ['Design & Planning'] }
                ]
            }
        }
    },

    // === ARTIFICIAL INTELLIGENCE & DATA SCIENCE (AIDS) ===
    AIDS: {
        name: 'Artificial Intelligence & Data Science',
        semesters: {
            1: {
                subjects: [
                    { name: 'Foundations of AI & Data Science', code: 'AI101', credits: 4, topics: ['AI History', 'Problem Solving', 'Heuristics'] },
                    { name: 'Statistics & Probability', code: 'AI102', credits: 4, topics: ['Distributions', 'Hypothesis Testing', 'Bayesian'] },
                    { name: 'Linear Algebra for AI', code: 'AI103', credits: 4, topics: ['Vectors', 'Matrices', 'Eigenvalues', 'Decomposition'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Data Structures & Algorithms', code: 'AI201', credits: 4, topics: ['DS', 'Sorting', 'Searching', 'Graph Algorithms'] },
                    { name: 'Database Systems & SQL', code: 'AI202', credits: 4, topics: ['DBMS', 'SQL', 'Indexing', 'Transactions'] },
                    { name: 'Python for Data Science', code: 'AI203', credits: 4, topics: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Machine Learning', code: 'AI301', credits: 4, topics: ['Regression', 'Classification', 'Clustering', 'Evaluation'] },
                    { name: 'Data Visualization', code: 'AI302', credits: 3, topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'] },
                    { name: 'Big Data Analytics', code: 'AI303', credits: 4, topics: ['Hadoop', 'Spark', 'MapReduce'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'Deep Learning', code: 'AI401', credits: 4, topics: ['Neural Networks', 'CNNs', 'RNNs', 'Optimization'] },
                    { name: 'Natural Language Processing', code: 'AI402', credits: 4, topics: ['Tokenization', 'Embeddings', 'Language Models'] },
                    { name: 'Computer Vision', code: 'AI403', credits: 4, topics: ['Image Processing', 'Object Detection', 'Segmentation'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'Advanced Machine Learning', code: 'AI501', credits: 4, topics: ['Ensemble Methods', 'Boosting', 'Reinforcement Learning'] },
                    { name: 'Time Series Analysis', code: 'AI502', credits: 4, topics: ['ARIMA', 'Forecasting', 'Anomaly Detection'] },
                    { name: 'MLOps & Model Deployment', code: 'AI503', credits: 3, topics: ['Model Serving', 'Monitoring', 'CI/CD'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Ethics in AI', code: 'AI601', credits: 3, topics: ['Bias', 'Fairness', 'Transparency', 'Privacy'] },
                    { name: 'Specialized Electives', code: 'AI602', credits: 4, topics: ['GAN', 'Transformers', 'AutoML', 'Federated Learning'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Capstone Project Part-1', code: 'AI701', credits: 3, topics: ['Problem Definition', 'Solution Design'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Capstone Project Part-2', code: 'AI801', credits: 3, topics: ['Implementation', 'Evaluation', 'Presentation'] }
                ]
            }
        }
    },

    // === INFORMATION TECHNOLOGY (IT) ===
    IT: {
        name: 'Information Technology',
        semesters: {
            1: {
                subjects: [
                    { name: 'Programming Fundamentals', code: 'IT101', credits: 4, topics: ['Variables', 'Control Flow', 'Functions'] },
                    { name: 'Database Fundamentals', code: 'IT102', credits: 4, topics: ['DBMS', 'Relational Model', 'SQL Basics'] },
                    { name: 'Web Fundamentals', code: 'IT103', credits: 4, topics: ['HTML', 'CSS', 'JavaScript Basics'] }
                ]
            },
            2: {
                subjects: [
                    { name: 'Object-Oriented Programming', code: 'IT201', credits: 4, topics: ['Classes', 'Inheritance', 'Polymorphism'] },
                    { name: 'Advanced Databases', code: 'IT202', credits: 4, topics: ['Normalization', 'Advanced SQL', 'Optimization'] },
                    { name: 'Web Development', code: 'IT203', credits: 4, topics: ['Frontend Frameworks', 'Backend Development', 'REST APIs'] }
                ]
            },
            3: {
                subjects: [
                    { name: 'Data Structures', code: 'IT301', credits: 4, topics: ['Linear', 'Hierarchical', 'Graph Structures'] },
                    { name: 'System Administration', code: 'IT302', credits: 4, topics: ['Linux', 'Windows Server', 'Network Configuration'] },
                    { name: 'Network Fundamentals', code: 'IT303', credits: 4, topics: ['OSI Model', 'TCP/IP', 'Routing'] }
                ]
            },
            4: {
                subjects: [
                    { name: 'Algorithms & Complexity', code: 'IT401', credits: 4, topics: ['Sorting', 'Searching', 'Graph Algorithms'] },
                    { name: 'Cybersecurity Basics', code: 'IT402', credits: 4, topics: ['Cryptography', 'Authentication', 'Firewalls'] },
                    { name: 'Enterprise Applications', code: 'IT403', credits: 4, topics: ['J2EE', 'Spring', 'Enterprise Patterns'] }
                ]
            },
            5: {
                subjects: [
                    { name: 'Cloud Computing', code: 'IT501', credits: 4, topics: ['AWS', 'Azure', 'GCP', 'Deployment'] },
                    { name: 'DevOps & Containerization', code: 'IT502', credits: 4, topics: ['Docker', 'Kubernetes', 'CI/CD Pipelines'] },
                    { name: 'Advanced Cybersecurity', code: 'IT503', credits: 3, topics: ['Penetration Testing', 'Incident Response'] }
                ]
            },
            6: {
                subjects: [
                    { name: 'Mobile Application Development', code: 'IT601', credits: 4, topics: ['iOS', 'Android', 'Cross-platform'] }
                ]
            },
            7: {
                subjects: [
                    { name: 'Project Work Part-1', code: 'IT701', credits: 3, topics: ['Design & Planning'] }
                ]
            },
            8: {
                subjects: [
                    { name: 'Project Work Part-2', code: 'IT801', credits: 3, topics: ['Implementation & Deployment'] }
                ]
            }
        }
    },

    // === POSTGRADUATE PROGRAMS ===
    MTech: {
        name: 'Master of Technology',
        specializations: [
            'Computer Science',
            'Data Science & AI',
            'Software Systems',
            'Cybersecurity',
            'IoT & Embedded Systems',
            'VLSI Design',
            'Power Systems',
            'Structural Engineering'
        ],
        semesters: {
            1: {
                subjects: [
                    { name: 'Advanced Algorithms', code: 'MT101', credits: 4 },
                    { name: 'Advanced Mathematics', code: 'MT102', credits: 4 },
                    { name: 'Research Methodology', code: 'MT103', credits: 3 },
                    { name: 'Seminar', code: 'MT104', credits: 2 }
                ]
            },
            2: {
                subjects: [
                    { name: 'Specialized Electives', code: 'MT201', credits: 4 },
                    { name: 'Advanced Topics', code: 'MT202', credits: 4 },
                    { name: 'Mini Project', code: 'MT203', credits: 3 }
                ]
            },
            3: {
                subjects: [
                    { name: 'Thesis Part-1', code: 'MT301', credits: 6 }
                ]
            },
            4: {
                subjects: [
                    { name: 'Thesis Part-2', code: 'MT401', credits: 9 }
                ]
            }
        }
    },

    // === DOCTORAL PROGRAMS ===
    PhD: {
        name: 'Doctor of Philosophy',
        fields: [
            'Computer Science & Engineering',
            'Artificial Intelligence',
            'Machine Learning',
            'Computational Science',
            'Computer Networks',
            'Cybersecurity',
            'Software Engineering',
            'Electronics & Communication',
            'Electrical Engineering',
            'Mechanical Engineering'
        ],
        structure: {
            coursework: 'First 2 semesters - Advanced courses & seminars',
            qualifier_exam: 'Comprehensive exam on research field',
            proposal_defense: 'Defense of research proposal',
            research_dissertation: 'Original research contribution',
            final_defense: 'Thesis defense before committee'
        }
    }
};

// === EXPORT ===
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SKILL_AI_DATABASE;
}
