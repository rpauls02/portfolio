export const siteConfig = {
  name: "Robert Pauls",
  title: "Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#7777ff",
  social: {
    linkedin: "https://linkedin.com/in/rpauls02",
    github: "https://github.com/rpauls02",
    discord: "https://discord.com/users/116657724967616518",
  },
  aboutMe: [
    "Software engineer with a passion for building things end-to-end; from cloud infrastructure and backend APIs to polished frontend experiences. My projects span full-stack web development, machine learning, and computer vision, and I've shipped real systems to production on Google Cloud. Outside of code, I run a small PC repair business and follow Formula 1 closely enough that I built a statistics platform around it.",
    "On the web side, I'm most at home with React and TypeScript on the frontend, with Python or Node.js handling the backend. I've deployed production apps on Firebase and Google Cloud Run, set up CI/CD pipelines, and worked with both SQL and NoSQL databases depending on what the job needs.",
    "When I'm not writing code, I'm probably diagnosing someone's PC, reading about the latest GPU architecture, or watching a race and wondering why the strategy team made that call."],
  skills: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Full-stack Applications",
    "Hardware",
  ],
  projects: [
    {
      name: "F1StatFinder",
      description:
        "Delve into a vast range of Formula One statistics from driver's points to the sport's circuit history, and create your own insights, all using data available since the first championship.",
      link: "https://f1statfinder.web.app",
      skills: ["GCP", "Firebase", "Flask", "React", "Typescript", "CSS"],
    },
    {
      name: "F1Detect",
      description:
        "YOLO-based object detection pipeline trained on a custom dataset to track Formula 1 cars in static and real-time footage, achieving over 90% accuracy across varying conditions.",
      link: "https://github.com/rpauls02/F1Detect",
      skills: ["Python", "Roboflow", "YOLO"],
    },
    {
      name: "PhishingDet",
      description:
        "Phishing classifier using CBOW embeddings trained on 18,000+ Enron emails, achieving 96% accuracy. Integrated persuasion-pattern detection alongside semantic classification.",
      link: "https://github.com/rpauls02/PhishingDet",
      skills: ["NLP", "Python", "NLTK", "Scikit", "PyTorch"],
    },
    {
      name: "Earthquake Magnitude Prediction",
      description:
        "A dabble into regressive statistical ML algorithms. Preprocessing and error analysis included.",
      link: "https://github.com/rpauls02/Earthquake-Magnitude-Prediction",
      skills: ["MATLAB"],
    },
    {
      name: "RaceSight (WIP)",
      description:
        "A robust detection system for motorsport vehicles in mainstream racing categories including Formula, Prototype and GT3.",
      link: "https://github.com/rpauls02/RaceSight",
      skills: ["Python", "Roboflow"],
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
      school: "City St George's, University of London",
      degree: "MSci Computer Science",
      dateRange: "Oct 2021 - June 2026",
      achievements: ["2:1", "Experienced in AI/ML and Software Engineering"],
    },
  ],
};
