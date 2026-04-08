// Text Blurbs
export const INTRO_TEXT = () => {
    return (
        <span>
            {"a "}
            <span className="highlight-intro">professionally trained</span>
            {" computer scientist who graduated from Lehigh's Rossin College of Engineering with a bachelors in computer science. I am a highly "}
            <span className="highlight-intro">ethical</span>
            {", intelligent person who takes care to make the best products and decisions possible. I specialize in "}
            <span className="highlight-intro">software engineering</span>
            {" environments and can take vague specifications and turn them into fully thought out, "}
            <span className="highlight-intro">creative</span>
            {" products. I like to be challenged and I find enjoyment in creating products that I know people use."}
        </span>
    );
};

export const DATA_ANNOTATION_DESCRIPTION = () => (
    <span>
        DataAnnotation is a company that specializes in providing high-quality{' '}
        <span className="highlight-work">training data</span> to AI agents.
        It is my job to create complex, creative tasks that push AI models to{' '}
        <span className="highlight-work">failure</span> and then show them how to properly
        complete these tasks. I specialize in{' '}
        <span className="highlight-work">coding agents</span> but I also do some work with
        creative writing agents and agents specializing in <span className="highlight-work">agentic tool use</span>.
    </span>
);

export const DA_SKILLS = () => (
    <span>
        <ul>
            <li>My job is to push models to <span className="highlight-work">failure</span>. I know where AI <span className="highlight-work">thrives</span> and where it <span className="highlight-work">falls short</span>.</li>
            <li>I view <span className="highlight-work">reasoning chains</span> and other information normally <span className="highlight-work">hidden</span> to most AI users. I understand how the AI <span className="highlight-work">thinks and reasons</span> to find its solution.</li>
            <li>I know common <span className="highlight-work">inefficiencies</span> and <span className="highlight-work">failure points</span> for AI models, which helps me build prompts and tools that minimize <span className="highlight-work">wasted tokens and time</span>.</li>
            <li>Because I need to <span className="highlight-work">double check</span> everything the AI outputs, I have become very adept at researching large <span className="highlight-work">codebases</span>, documentation, and the like.</li>
            <li>I have needed to <span className="highlight-work">integrate AI</span> into my daily workflow to increase efficiency. I know how to get the <span className="highlight-work">most out of AI</span> and make it work for you.</li>
        </ul>
    </span>
);
export const BEYOND_CLASSES = () => (
    <span>
        <ul>
            <li>As a <span className="highlight-education">teacher's assistant</span> for CSE 348, Game AI I worked with students to increase their understanding of the course through <span className="highlight-education">office hours</span>.</li>
            <li>Other duties as a teacher's assistant included upgrading homework <span className="highlight-education">autograders</span> to be more <span className="highlight-education">dynamic and scalable</span>.</li>
            <li>I participated in many different <span className="highlight-education">music ensembles</span> at Lehigh. I learned to <span className="highlight-education">budget time</span> very effectively to balance classes, rehearsals, practicing, and my social life.</li>
        </ul>
    </span>
);

export const SIGNIFICANT_CLASSES = () => (
    <span>
        <ul>
            <li><span className="highlight-education">CSE 303 & CSE 202</span> - Operating Systems, <span className="highlight-education">Multi-Threaded Development</span>, Security (SHA-256 Hashing, Public/Private Keys, etc)</li>
            <li><span className="highlight-education">CSE 326</span> - <span className="highlight-education">Machine Learning</span> Techniques</li>
            <li><span className="highlight-education">CSE 216</span> - <span className="highlight-education">Software Engineering</span> (Agile Methodology, Sprints, Demoing, Peer Programming, Communication Software (Slack), Organization Software (Trello), SaaS, PaaS, IaaS)</li>
            <li><span className="highlight-education">CSE 241</span> - <span className="highlight-education">Database Architecture & SQL</span></li>
            <li><span className="highlight-education">CSE 340 & CSE 140</span> - <span className="highlight-education">Time Complexity</span>, Code Analysis, Common Algorithms (Dijkstra's, BFS, DFS, etc), <span className="highlight-education">Dynamic Programming</span></li>
            <li><span className="highlight-education">CSE 262</span> - <span className="highlight-education">Compiler Design</span></li>
            <li><span className="highlight-education">CSE 342</span> - Structure of the Internet, <span className="highlight-education">TCP, UDP</span>, Security (Packet Sniffing, Network Analysis, etc)</li>
            <li><span className="highlight-education">CSE 348</span> - AI Techniques (<span className="highlight-education">A*, FSM, Generative Algorithms</span>, etc)</li>
        </ul>
    </span>
);

export const UNITE_PRO_ENHANCED_DESCRIPTION = () => (
    <span>
        <ul>
            <li><span style={{ fontWeight: 'bold' }}>What is Unite-Pro?</span> Unite-Pro is a web app designed, implemented, and maintained solely <span className="highlight-portfolio">by myself</span>.</li>
            <li><span style={{ fontWeight: 'bold' }}>What Does It Do?</span> Unite-Pro is an online <span className="highlight-portfolio">Draft-Sim</span> and <span className="highlight-portfolio">Pro Stat Tracking/Analysis</span> tool. It also can be used for some common tasks like making <span className="highlight-portfolio">tierlists</span>.</li>
            <li><span style={{ fontWeight: 'bold' }}>Why Does It Exist?</span> <span className="highlight-portfolio">Myself and others</span> who play this game <span className="highlight-portfolio">competitively</span> were searching for a tool to practice draft. I made the base draft sim and expanded on it, continuously adding features that myself and the <span className="highlight-portfolio">community were needing</span>.</li>
        </ul>
    </span>
)

export const UNITE_PRO_ENHANCED_SKILLS = () => (
    <span>
        <ul>
            <li>Unite-Pro has forced me to learn about <span className="highlight-portfolio">CI/CD, deployment, and hosting</span> long-term projects.</li>
            <li>I receive <span className="highlight-portfolio">direct feedback</span> from users and have to decide what to pursue and what to ignore as <span className="highlight-portfolio">scope creep</span>.</li>
            <li>New characters and pro matches take place regularly. I need to <span className="highlight-portfolio">continuously update</span> my database with new releases.</li>
            <li>I have learned several technologies such as <span className="highlight-portfolio">websockets</span> and <span className="highlight-portfolio">graph.js</span>.</li>
        </ul>
    </span>
)

export const ENROLLD_ENHANCED_DESCRIPTION = () => (
    <span>
        <ul>
            <li><span style={{ fontWeight: 'bold' }}>What is Enrolld?</span> Enrolld is a web app designed to streamline <span className="highlight-portfolio">enrollment</span> at Lehigh University.</li>
            <li><span style={{ fontWeight: 'bold' }}>What Does It Do?</span> Enrolld has 3 key <span className="highlight-portfolio">user personas</span>: Students, Advisors, Coordinators. Students use the software to <span className="highlight-portfolio">create mock schedules</span>. Then, Advisors can <span className="highlight-portfolio">review</span> these schedules and give targeted, direct feedback. Coordinators see data on <span className="highlight-portfolio">predicted enrollment per class</span> to be able to estimate how many sessions / teachers they need per course for <span className="highlight-portfolio">future</span> semesters.</li>
            <li><span style={{ fontWeight: 'bold' }}>Why Does It Exist?</span> Students were failing to meet <span className="highlight-portfolio">graduation requirements</span>, advisors were struggling to <span className="highlight-portfolio">understand students' plans</span> and coordinators were struggling to predict <span className="highlight-portfolio">class interest</span>.</li>
        </ul>
    </span>
)

export const ENROLLD_ENHANCED_SKILLS = () => (
    <span>
        <ul>
            <li>Enrolld was my first experience in a true <span className="highlight-portfolio">agile</span> environment. I would <span className="highlight-portfolio">demo to stakeholders</span> weekly, whose feedback would directly influence project priorities.</li>
            <li>Enrolld taught me to work with real <span className="highlight-portfolio">constraints</span>. We had to limit our scope and avoid any potential data collection that would be against <span className="highlight-portfolio">FERPA</span>.</li>
            <li>Enrolld forced real, hard <span className="highlight-portfolio">deadlines</span>. We needed to get the product out to test groups a minimum of 2 weeks <span className="highlight-portfolio">before registration</span> in order to be useful. Stakeholders also expected results before the <span className="highlight-portfolio">end of the semester</span>.</li>
            <li>Enrolld exercised my <span className="highlight-portfolio">full-stack</span> development skills. I needed to regularly edit the database, create routes, and display that information on the frontend. I was primarily in charge of the <span className="highlight-portfolio">student and coordinator</span> personas.</li>
        </ul>
    </span>
)

export const OTHER_PROJECTS_DESCRIPTION = () => (
    <span>
        <ul>
            <li><span style={{ fontWeight: 'bold' }}>What Other Projects Do I Have?</span> None of my other projects on GitHub are as extensive as Unite-Pro or Enrolld. Many are quick and dirty <span className="highlight-portfolio">tools, games, or websites</span> that I spun up in under a day to play with friends.</li>
            <li><span style={{ fontWeight: 'bold' }}>A Specific Example:</span> In two days I spun up an online 'pickems' tracker with its own <span className="highlight-portfolio">postgreSQL database</span> in order to track how many times each person <span className="highlight-portfolio">picked the winning team</span>. This was done for a 200+ member draft league Discord I run.</li>
            <li><span style={{ fontWeight: 'bold' }}>Other Smaller Examples:</span> <span className="highlight-portfolio">Randomizers</span> for different games to dictate how me and my friends play games for an extra challenge. A <span className="highlight-portfolio">boids simulation</span> that had its behaviors changed to act like migratory birds.</li>
        </ul>
    </span>
)

export const OTHER_PROJECTS_SKILLS = () => (
    <span>
        <ul>
            <li><span className="highlight-portfolio">Programming is truly a love of mine.</span> I am extremely passionate about making tools that people enjoy.</li>
            <li>When I get involved in a project I can tend to <span className="highlight-portfolio">obsess</span> because I genuinely enjoy the process and payoff of creating a great product.</li>
        </ul>
    </span>
)

// Image Carousels
export const EDUCATION_CAROUSEL = [
    {img: '/assets/carousel/education/music.jpg', desc: "Played trombone for Lehigh's: The Marching 97, Wind Ensemble, Jazz Orchestra, and Brass Ensemble."},
    {img: '/assets/carousel/education/grad.png', desc: 'Graduated from Lehigh in Summer 2025'},
    {img: '/assets/carousel/education/deansList.png', desc: "Made the Dean's List my last 5 semesters at Lehigh (out of 7 total)."}
];
export const DA_CAROUSEL = [
    {img: '/assets/DA.png', desc: "Placeholder"}
]



// Outdated
export const MONROE_ACHIEVEMENTS = [
    'Reached Out To Schools Surrouding our Pipeline To Provide Lines of Communication, Emergency Procedures, and General Information',
    'Filled Out Permits',
    'During An Emergency Where A Tank Had A Cracked Base, I Assisted In Taking Meeting Minutes and Going Out To The Surrounding Community To Ease Concerns and Open Lines of Communication',
    'Read Recent Legislation To Update Handbooks and Processes in order to Comply'
]
export const INTRO_CAROUSEL = [
    {img: '/assets/carousel/intro/Lehigh.jpg', desc: 'Lehigh Graduate 2025 - Bachelors in Computer Science from Rossin College of Engineering.'},
    {img: '/assets/carousel/intro/Monroe.jpg', desc: 'Summer internship at Monroe Energy / MIPC during Summer 2024'},
    {img: '/assets/carousel/intro/DA.jpg', desc: 'Started working for Data Annotation in Winter of 2025.'},
    {img: '/assets/carousel/intro/unite-pro.png', desc: 'Solo dev on draft-sim and pro-stat analysis web app for Pokemon Unite.'},
    {img: '/assets/carousel/intro/capstone.png', desc: 'Capstone project. Web app to help students and advisors communicate / make schedules.'}
]

// Listings (Outdated)
export const SKILLS = [
    "Frontend Skills: Node.js, React.js, Vue.js, JavaScript, CSS, HTML, jQuery, Understanding of Internet Protocol Stack, Understanding of Internet (TCP, UDP, etc)", 
    "Backend Skills: RESTful APIs, C++, C, SQL, Database Structure",
    "Data Structures: Hash Tables, Linked List, Queue, Priority Queue, Stack, Trees, Binary Search Trees (BSTs), Time Complexity",
    "Other Coding Skills: Multithreaded Programming, Compiler Design, Operating Systems, Embedded Systems, Proofs",
    "AI Techniques: Finite State Machines (FSMs), A* Search, Generative Algorithms, NavMesh, Blackboards, Planning, Procedural Content Generation, Grammars, Minimax, Hill Climbing",
    "Machine Learning Techniques: Backpropogation, Neural Networks, Deep Learning, Regression, Discriminants, Approximation, Kernels",
    "Other Languages: Python, Java, Rust, Flutter, TypeScript, Assembly",
    "Cybersecurity Knowledge: NIST, Network Architecture, Google Chronicle, Wireshark, Linux",
    "Other Technologies: Excel, CAD"
]
export const TA_TAKEAWAYS = [
    `Increased grading efficiency by creating autograders that were easy to maintain.`,
    `Made the autograder more dynamic by making test cases mathematically determine if a solution was correct rather than using arbitrary test cases.`,
    `Increased student enjoyment by making autograders provide specific feedback on what was failing.`,
    `Improved student understanding by holding office hours where I would explain class topics and assignments.`
]
export const CLASSES = [
    'CSE 017 Data Structures & Algorithms',
    'CSE 216 Software Engineering',
    'CSE 241 Database Systems & Applications',
    'CSE 326 Machine Learning',
    'CSE 340 Design & Analysis of Algorithms',
    'CSE 348 Game AI',
    'CSE 202 Computer Organization Architecture',
    'CSE 262 Progamming Languages (Creating A Languages)',
    'CSE 303 Operating System Design',
    'CSE 342 Fundamentals of Internetworking',
    'CSE 280 & 281 Capstone'
]
export const UNITE_PRO_SKILLS = [
    'Setting Up a Website / Database for Production (Heroku in this Case).',
    'Deploy Scripts',
    'Establishing / Managing Connections for Multiplayer',
    'Creating An AI From Scratch',
    'Data Analysis',
    'Data Collection'
]
export const UNITE_PRO_TECH = [
    'React.js',
    'Chart.js',
    'RESTful APIs',
    'AI Techniques',
    'POSTGREsql Database',
    'Google OAuth',
    'Heroku',
    'Supabase'
]
export const ENROLLD_SKILLS = [
    'Agile Methodology',
    'Demoing',
    'Feedback Integration From Stakeholders',
    'Group Coding',
    'Unit Testing',
    'Pull Requests',
    'Taking Meeting Notes / Meeting Etiquette',
    'User Personas'
]
export const ENROLLD_TECH = [
    'React.js',
    'React-Flow',
    'POSTGREsql Database',
    'Postman',
    'Heroku',
    'Middleware'
]
export const UTA_SKILLS = [
    'Working under a time constraint',
    'Fast Development',
    'Prioritization'
]
export const DA_ACHIEVEMENTS = [
    'Have Learned More Niche Languages like Rust to Tackle Unpopular Tasks',
    'Have Learned How To Research Efficiently To Maximize Efficiency',
    'Have Completed 100s of Tasks'
]
export const DA_TASKS = [
    'Scrape Information App With The Entertainment and Gaming Tags from the Google Playstore',
    'Correct an AI Response on Fluid Physics in LUA',
    'Correct an AI Response to Create an Interactive Art Gallery Using Vue.js',
    'Analyze Issue Posted on Apache, Review the Pull Request and Test Files, and Determine Whether the Tests are Adequate and Why'
]

export const EDUCATION_TEXT = `I am a 2025 graduate from Lehigh University. I graduated with a 3.71 GPA with a major in Computer Science in the Rossin College of Engineering. I also
graduated with minors in Spanish & Music.`;
export const BEYOND_CLASSES_TEXT = `I was a grader / teacher's assistant for Professor Lee-Urban for CSE 348: Game AI. In this role I increased grading efficiency
by creating autograders for the different assignments. These autograders were all set up using the same baseplate so that they will be easy to maintain. I also hosted office hours
and fielded questions from students taking the class.`;
export const EXTRACURRICULARS_TEXT = `I participated in many different music ensembles for the entirety of my stay at Lehigh: Brass Ensemble, Wind Ensemble,
Marching 97, & Jazz Orchestra.`;
export const UNITE_PRO_TEXT = `This is my project that I have taken the furthest. It is a live website that you can find at unite-pro.net! The web app that has two main draws; 1: it
serves as a draft sim where users can practice drafting alone, with others online, or versus an AI. 2: I use this web app to store and do data anlysis on pro matches. These are two
niches that are completely unfilled anywhere else in the Pokemon Unite community so I wanted to create the web app for myself and others to use. The Web app is hosted on Heroku with
a database on Supabase. The web app is completely stateless and employs AI techniques like planning and A* search. For the future: I have broken every Pokemon down into their core 
attributes and once I have gathered enough data, I plan to train a better AI using deep learning, I am just limited by data right now.`
export const UNITE_PRO_DESCRIPTION = `Unite-Pro is a draft-sim and pro stat tracker that is used to help competitive players improve at the game Pokemon Unite. The web app teaches players 
by allowing them to draft by themselves, against an AI, or against other players online. The AI is primarily made using A* search and planning with future plans to use deep learning 
as I collect more data. The stat tracker lets users view and filter old matches to review what is important to them, view and filter individual character stats to find which characters 
are effective in different scenarios, and perform data analysis on team comps to understand what lets a pokemon thrive or be countered.`;
export const ENROLLD_DESCRIPTION = `Enrolld is a project I worked on for a full year as my Senior Capstone. It is a web app designed to help faciliate communication between students
and advisors. The idea is to have students create their expected schedules for future semesters many months, or even years, early. This way that data can be collected and coordinators
can use it to more accurately create classes and electives that students need and are interested in. I did work on both the frontend and backend, mostly creating new frontend features
and creating backend functions and routes that the frontend then uses. In this project I learned to coordinate with 3 other students to be efficient and avoid merge conflicts. The group
also demo'd to stakeholder weekly and would be responsible for tracking their feedback and implementing it.`
export const MONROE_DESCRIPTION = `Monroe Energy is an energy company, specifically focused on gasoline and jet fuel production. During my time here, I worked at their pipeline, MIPC.
In my summer worker role most of my tasks were centered on improving the efficiency of future work. I would handle tasks like filling out permits, performing inspections of the tanks 
that store the fuel, and labeling / documenting every valve and instrument on the pipeline.`;
