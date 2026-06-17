export const siteConfig = {
  name: "Robert Pauls",
  title: "Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#7777ff",
  social: {
    email: "rpauls2002@gmail.com",
    linkedin: "https://linkedin.com/in/rpauls02",
    github: "https://github.com/rpauls02",
  },
  aboutMe: "",
  skills: [
    "Python",
    "TypeScript",
    "Node.js",
    "SQL",
    "NLTK",
    "NumPy",
    "OpenCV",
    "Pandas",
    "PyTorch",
    "Roboflow",
    "Scikit",
    "YOLO",
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
        "Computer vision pipeline leveraging YOLO's state-of-the-art object detection model, trained on a custom-made dataset, for detecting and tracking Formula 1 cars in static and real-time imagery.",
      link: "https://github.com/rpauls02/F1Detect",
      skills: ["Python", "Roboflow", "YOLO"],
      video: "https://youtu.be/Eezjer004OM",
    },
    {
      name: "PhishDetector",
      description:
        "NLP pipeline making use of persuasion detecton and CBOW embeddings for filtering out phishing in 18000+ Enron emails. Includes advanced preprocessing and error analysis.",
      link: "https://github.com/rpauls02/PhishingDet",
      skills: ["Python", "NLTK", "Scikit", "PyTorch"],
    },
    {
      name: "Earthquake Magnitude Prediction",
      description: "A dabble into regressive statistical ML algorithms. Preprocessing and error analysis included.",
      link: "https://github.com/rpauls02/Earthquake-Magnitude-Prediction",
      skills: ["MATLAB"],
    },
    {
      name: "RaceSight",
      description: "A robust detection system for motorsport vehicles in mainstream racing categories including Formula, Prototype and GT3.",
      link: "https://github.com/rpauls02/RaceSight",
      skills: ["Python", "Roboflow"]
    }
  ],
  experience: [
    {
      company: "Company",
      title: "Role",
      dateRange: "MMM/YYYY - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
  ],
  education: [
    {
      school: "City St George's, University of London",
      degree: "MSci Computer Science",
      dateRange: "2021 - 2026",
      achievements: [
        "Graduated 2:1",
        "Experience with AI/ML and Full-stack Software Engineering",
      ],
    },
  ],
};
