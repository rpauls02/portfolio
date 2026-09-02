export const siteConfig = {
  name: "Robert Pauls",
  title: "Software Engineer",
  accentColor: "#7777ff",
  social: {
    linkedin: "https://linkedin.com/in/rpauls02",
    github: "https://github.com/rpauls02",
    discord: "https://discord.com/users/116657724967616518",
  },
  aboutMe: [
    "Software engineer experienced in building things end-to-end; from cloud infrastructure and backend APIs to polished frontend experiences. My projects span full-stack web development, machine learning, and computer vision, and I've shipped real systems to production on Google Cloud. Outside of code, I run a small PC repair business and follow Formula 1 closely enough that I built a statistics platform around it.",
    "On the web side, I'm most at home with React and TypeScript on the frontend, with Python or Node.js handling the backend. I've deployed production apps on Firebase and Google Cloud Run, set up CI/CD pipelines, and worked with both SQL and NoSQL databases depending on what the job needs.",
    "When I'm not writing code, I'm probably diagnosing someone's PC, reading about the latest GPU architecture, or watching a race and wondering why the strategy team made that call."],
  skills: [
    "AI/ML",
    "Analysis & Design",
    "Cloud Infrastructure",
    "Full-stack Applications",
    "Hardware",
  ],
  projects: [
    {
      name: "F1StatFinder",
      description:
        "Delve into a vast range of Formula One statistics from driver's points to the sport's circuit history, and create your own insights, all using data available since the first championship.",
      link: "https://f1statfinder.web.app",
      image: "projects/f1statfinder-preview-v4.png",
      category: "Web Development",
      skills: ["GCP", "Firebase", "Flask", "Python", "React", "Typescript", "Material UI", "Anthropic Claude", "GitHub Actions", "FastF1"],
    },
    {
      name: "F1Detect",
      description:
        "YOLO-based object detection pipeline trained on a custom dataset to track Formula 1 cars in static and real-time footage, achieving over 90% accuracy across varying conditions.",
      link: "https://github.com/rpauls02/F1Detect",
      image: "projects/f1detect-preview-v6.png",
      category: "Object Detection",
      skills: ["Python", "Roboflow", "YOLO", "OpenCV", "PyTorch"],
    },
    {
      name: "PhishingDet",
      description:
        "Phishing classifier using CBOW embeddings trained on 18,000+ Enron emails, achieving 96% accuracy. Integrated persuasion-pattern detection alongside semantic classification.",
      link: "https://github.com/rpauls02/PhishingDet",
      category: "Natural Language Processing",
      skills: ["Python", "NLTK", "Scikit", "PyTorch"],
    },
    {
      name: "Face Cover Detection",
      description:
        "Multiclass computer vision system comparing three CV pipelines to classify face mask status across 2,800+ images, with a custom CNN reaching 91% accuracy against real-world 'in the wild' testing.",
      link: "https://github.com/rpauls02/Face-Cover-Detection",
      image: "projects/facecover-preview-v1.png",
      category: "Image Classification",
      skills: ["Python", "OpenCV", "Scikit", "PyTorch"],
    },
    {
      name: "Web Development Coursework",
      description:
        "A PHP MVC application with custom controllers and models handling user auth, volunteer sign-up, and staff shift scheduling, containerised with Docker Compose on a Linux-based LAMP stack.",
      link: "https://github.com/rpauls02/Web-Development-Coursework",
      category: "Web Development",
      skills: ["PHP", "MySQL", "Docker", "Apache", "Redis", "Composer", "Linux"],
    },
    {
      name: "RaceSight (WIP)",
      description:
        "A robust detection system for motorsport vehicles in mainstream racing categories including Formula, Prototype and GT3.",
      link: "https://github.com/rpauls02/RaceSight",
      category: "Object Detection",
      skills: ["Python", "Roboflow", "YOLO", "OOAD"],
    },
  ],
  experience: [
    {
      company: "Computer Repairs",
      title: "Technician",
      dateRange: "Aug 2022 - Present",
      bullets: [
        "Small online business assembling and repairing computer systems",
      ],
    },
  ],
  education: [
    {
      logo: "City-St-Georges-Logo-Primary-Internal.png",
      school: "City St George's, University of London",
      degree: "BSc Computer Science",
      honours: "2:1",
      dateRange: "Sept 2021 - June 2026",
      subjects1: "Advanced Databases, Data Structures and Algorithms",
      subjects2: "Systems Architecture, Operating Systems, Theory of Computation, Cloud Computing",
      subjects3: "Computer Vision, Machine Learning, Natural Language Processing",
      subjects4: "Objected-oriented Analysis and Design",
      skills: ["C++", "Haskell", "Java", "JavaScript", "Node.js", "NoSQL", "Python", "React", "SQL", "TypeScript", "YOLO"],

    },
  ],
};
