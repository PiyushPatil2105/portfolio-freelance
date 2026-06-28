export const personalData = {
  name: "Piyush Patil",
  title: "Freelance Full Stack Developer",
  subTitle: "Building high-performance web applications, interactive maps, and intelligent NLP automations to scale your business.",
  email: "piyushbpatil21@gmail.com",
  github: "https://github.com/PiyushPatil2105",
  linkedin: "https://www.linkedin.com/in/piyush-patil-89b503351",
  resumeUrl: "/resume-freelance.pdf",
  stats: [
    { label: "CGPA (Academic)", value: "8.11" },
    { label: "Successful Projects", value: "4+" },
    { label: "MERN Internship", value: "1" },
    { label: "Clients Satisfaction", value: "100%" }
  ]
};

export const aboutData = {
  description: "I am a Computer Science Engineering student and a Full Stack Web Developer. I specialize in building scalable MERN stack web applications and integrating secure user authentications, cloud deployments, and NLP-based solutions. I possess a strong problem-solving mindset and thrive on turning user requirements into robust, high-performance applications.",
  bullets: [
    "Proficient in React.js, Node.js, Express.js, and MongoDB",
    "Hands-on experience in REST APIs, JWT, and Cloudinary",
    "Familiar with Java, Python, and spaCy NER for NLP applications",
    "Passionate about scalable systems, databases, and clean code"
  ],
  terminalCommands: [
    { command: "cat credentials.json", response: '{\n  "name": "Piyush Patil",\n  "education": "B.E. Computer Science & Engineering",\n  "college": "Shivajirao S. Jondhale College of Engg & Tech",\n  "graduation_year": "2027",\n  "current_cgpa": "8.11/10"\n}' },
    { command: "npm run skills --list", response: 'frontend: ["HTML", "CSS", "JS", "React.js", "Tailwind CSS", "Vite"]\nbackend: ["Node.js", "Express.js", "REST APIs", "Firebase Admin"]\ndatabase: ["MongoDB", "MySQL"]\nml_nlp: ["spaCy", "NER"]' }
  ],
  timeline: [
    {
      year: "Oct - Dec 2025",
      title: "Full Stack Developer Intern",
      company: "Sapphire Infocom Pvt. Ltd., Dombivli",
      description: "Conceptualised and developed a full-stack MERN project demonstrating proficiency in frontend and backend development. Implemented key functionalities using React, Node.js, Express.js, and MongoDB; showcased strong technical and problem-solving skills."
    },
    {
      year: "2023 - 2027",
      title: "B.E. — Computer Science & Engineering",
      company: "Shivajirao S. Jondhale College of Engg & Tech",
      description: "Currently pursuing engineering degree with a current cumulative CGPA of 8.11/10. Academic breakdown: Sem 1 (8.22), Sem 2 (8.55), Sem 3 (8.39), Sem 4 (8.13), Sem 5 (7.26)."
    },
    {
      year: "2022 - 2023",
      title: "HSC (12th)",
      company: "S.H.M College of Science, Kalyan",
      description: "Completed Higher Secondary Certificate (HSC) in Science stream with an aggregate score of 73.33%."
    },
    {
      year: "2020 - 2021",
      title: "SSC (10th)",
      company: "Don Bosco School, Kalyan",
      description: "Completed Secondary School Certificate (SSC) with a score of 90.40%."
    }
  ]
};

export const servicesData = [
  {
    id: "fullstack",
    title: "Full-Stack Web App Development",
    icon: "Mern",
    description: "End-to-end web application development using the MERN stack. I build user-friendly frontends, performant backends, and securely handle users and roles.",
    features: [
      "Secure user login (JWT, Firebase Auth)",
      "Role-based Admin Panels & Management Panels",
      "Robust REST APIs and third-party integrations",
      "Dynamic data queries and responsive modern design"
    ]
  },
  {
    id: "nlp-automation",
    title: "Intelligent Automation & NLP Tools",
    icon: "Nlp",
    description: "Custom scripts and backend modules powered by Python and NLP frameworks like spaCy. Perfect for data parsing, automated scoring, and keyword matching.",
    features: [
      "Custom NER (Named Entity Recognition) engines",
      "ATS Compatibility Grading & Parsing systems",
      "Web scraping & structured data processing scripts",
      "Fast API backends for Python integrations"
    ]
  },
  {
    id: "mapping-gis",
    title: "GIS & Map-based Dashboards",
    icon: "Map",
    description: "Interactive mapping integrations to visualize geographical data. Perfect for directories, store/dealer locators, and spatial dashboards.",
    features: [
      "Leaflet.js & Mapbox interactive configurations",
      "Multi-city geographic data search and filtering",
      "Dynamic location routing and markers caching",
      "Clean UI panels linked with custom cartography"
    ]
  },
  {
    id: "deployment-cloud",
    title: "Cloud Infrastructure & Optimization",
    icon: "Cloud",
    description: "Seamless deployment pipelines and media storage setups to keep your site fast, online, and fully secure.",
    features: [
      "Hosting configurations on Vercel, Render, and Netlify",
      "Cloudinary storage setup for fast image/media streaming",
      "Database setups and seeders (MongoDB Atlas, MySQL)",
      "SEO audit, performance indexing, and SSL setup"
    ]
  }
];

export const workflowData = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description: "We align on your goals, write user stories, define technical stack requirements, and establish budget/timeline milestones."
  },
  {
    step: "02",
    title: "Architecture & Mockups",
    description: "I map out the database schema, plan the REST API endpoints, and structure wireframes/components to establish the visual path."
  },
  {
    step: "03",
    title: "Agile Coding & Demos",
    description: "I code the frontend and backend in sprints. You receive regular live testing links and walkthroughs to provide feedback."
  },
  {
    step: "04",
    title: "QA, Launch & Handoff",
    description: "After extensive cross-browser responsiveness, performance, and security tests, we launch to production and hand off 100% code ownership."
  }
];

export const faqData = [
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes. I prioritize client confidentiality. I am fully open to signing a mutual NDA before you share any proprietary project details or source code."
  },
  {
    question: "How do we communicate and track project progress?",
    answer: "We will communicate through Slack, Discord, Email, or WhatsApp for daily async updates. For milestone reviews and live demos, we can schedule brief Zoom or Google Meet calls."
  },
  {
    question: "What is your project payment structure?",
    answer: "I generally work on a milestone basis to build trust: 25% initial booking/kickoff deposit, 25% when the database and backend APIs are completed, 25% upon frontend completion and visual styling, and 25% when the application is fully deployed and the codebase is handed over."
  },
  {
    question: "Can you collaborate with other developers or work with existing codebases?",
    answer: "Absolutely. I am highly proficient in Git, GitHub, and modular coding patterns. I can review your current codebase, address issues, optimize APIs, or build custom features that mesh seamlessly with your existing layout."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, every project includes 30 days of free support for any bug fixes or technical issues that arise after deployment. I also offer affordable monthly support plans if you need ongoing features or updates."
  }
];

export const skillsData = [
  {
    category: "Frontend & Backend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB / Mongoose", level: 88 },
      { name: "MySQL", level: 75 },
      { name: "Vercel / Render", level: 80 },
      { name: "Cloudinary", level: 85 },
      { name: "Firebase Admin SDK", level: 70 }
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "spaCy (NLP / NER)", level: 70 },
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Leaflet.js", level: 75 }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AutoDev",
    category: "MERN Stack",
    shortDescription: "Vehicle Catalog & Comparison Portal with 3-way spec diffing and interactive maps.",
    fullDescription: "AutoDev is a full-featured vehicle comparison portal that helps dealerships display their catalogs dynamically. It resolves standard browsing frustrations by providing a 3-way specification difference toggle, interactive dealership maps, and user roles.",
    problem: "Dealership websites are often sluggish, lack side-by-side spec comparison filters, and have static contact forms instead of dynamic geolocation features.",
    solution: "Developed a MERN stack portal featuring JWT roles and an admin dashboard. Engineered a comparison engine with diff-toggling, a multi-criteria search (brand, price, fuel), and Leaflet.js locator map.",
    impact: "Provides smooth pagination under 100ms, offers seamless comparison options, and makes it easy for admins to update catalog assets via Cloudinary storage.",
    features: [
      "JWT-based role authentication & custom admin panel",
      "Dynamic comparison matrix comparing up to 3 vehicles with visual diff indicators",
      "Leaflet.js map integration showing dealer locations across 4 cities",
      "Robust MongoDB pagination and filtering (brand, fuel, price) with seed scripts"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Cloudinary", "Leaflet.js"],
    demoLink: "https://autodev-vehicle-portal.vercel.app/",
    codeLink: "https://github.com/PiyushPatil2105/autodev-vehicle-portal"
  },
  {
    id: 2,
    title: "Upskillr",
    category: "MERN Stack",
    shortDescription: "Online learning platform featuring role-based portals and secure authentication.",
    fullDescription: "Upskillr is a collaborative learning and skill development platform. It features structured channels for Instructors and Learners to interact, upload course materials, submit assignments, and track progression.",
    problem: "Standard learning portals are overly generic, complex, and lack secure, modular role segregation for courses.",
    solution: "Contributed Firebase token verification backend middleware to protect routes. Built distinct interface dashboards for course creation and enrollment tracking.",
    impact: "Created a secure multi-role portal supporting streamlined assignment delivery, reducing server latency during file checks.",
    features: [
      "Firebase Token Verification backend middleware",
      "Role-based UI flows for Instructors (course management) and Learners (course enrollment)",
      "Interactive course viewer and assignment progress dashboard",
      "Responsive UI built using custom CSS and Tailwind"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    demoLink: "https://upskillr-theta.vercel.app/",
    codeLink: "https://github.com/PiyushPatil2105/Upskillr"
  },
  {
    id: 3,
    title: "Resume Checker",
    category: "Machine Learning / NLP",
    shortDescription: "ATS resume analyzer powered by spaCy NLP and entity extraction.",
    fullDescription: "An automated ATS Analysis Tool built to optimize candidates' resumes. It parses resume text and matches keywords, certifications, and educational credentials against target job descriptions.",
    problem: "Applicants are frequently filtered out by rigid automated Applicant Tracking Systems (ATS) due to formatting errors or lack of industry keywords.",
    solution: "Built a Python parser with spaCy's Named Entity Recognition (NER) to extract experience, skills, and scoring. Created a custom phrase-matching weights calculation algorithm.",
    impact: "Achieved over 90% extraction accuracy on standard formats and provided immediate scoring analysis with clear keyword recommendations.",
    features: [
      "spaCy Custom NER model for structured parsing of resume details",
      "ATS compatibility rating system comparing skills weightings",
      "Keyword matching highlighting missing industry buzzwords",
      "Lightweight Flask web interface for instant uploads and analysis"
    ],
    tech: ["Python", "spaCy", "NLP", "Flask", "Tailwind CSS"],
    demoLink: "https://resume-checker-q80h.onrender.com",
    codeLink: "https://github.com/PiyushPatil2105/resume-checker"
  },
  {
    id: 4,
    title: "Developer Portfolio & Resume",
    category: "Frontend",
    shortDescription: "Premium interactive developer portfolio website with a print-optimized PDF resume.",
    fullDescription: "A custom portfolio project that demonstrates client-centered web development standards. It features interactive panels, modern aesthetics, custom themes, and an automated HTML-to-PDF compiler pipeline.",
    problem: "Most portfolios use standard templates that feel dry or load slowly, and standard PDF resumes are difficult to keep styled in lockstep with the web version.",
    solution: "Designed a glassmorphic React app with a particle background, custom cursor, theme customizers, and an integrated headless-chrome PDF printer pipeline.",
    impact: "Delivers an impressive first-impressions layout with interactive theme adjustments, and outputs a print-ready PDF resume dynamically with zero layout shifts.",
    features: [
      "Headless Chromium PDF printing pipeline suppressing browser margins",
      "Dynamic theme panels and custom fluid mouse physics",
      "Interactive credentials verification linking to hosted public assets"
    ],
    tech: ["React", "Vite", "Framer Motion", "CSS3", "Headless Chrome"],
    demoLink: "https://portfolio-eta-nine-10wun0jnrm.vercel.app/",
    codeLink: "https://github.com/PiyushPatil2105/portfolio"
  }
];

export const certificatesData = [
  {
    id: 1,
    title: "Machine Learning & NLP Certification",
    issuer: "Success Classes of Engineering",
    date: "2025–2026",
    credentialId: "SC-ML-2025",
    verificationLink: "/ml-nlp-cert.pdf"
  },
  {
    id: 2,
    title: "MERN Stack Development",
    issuer: "Success Classes",
    date: "2024–2025",
    credentialId: "SC-MERN-2024",
    verificationLink: "/mern-cert.pdf"
  },
  {
    id: 3,
    title: "Java Programming",
    issuer: "Success Classes",
    date: "2024–2025",
    credentialId: "SC-JAVA-2024",
    verificationLink: "/java-cert.pdf"
  },
  {
    id: 4,
    title: "Full Stack Developer Internship Certificate",
    issuer: "Sapphire Infocom Pvt. Ltd.",
    date: "Dec 2025",
    credentialId: "SI-MERN-2025",
    verificationLink: "/internship-cert.pdf"
  }
];
