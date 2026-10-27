export const siteConfig = {
  name: "Robert Pauls",
  title: "Software Engineer",
  description: "Robert Pauls, software engineer and Computer Science graduate building full-stack apps and machine learning systems.",
  tagline: "Computer Science graduate building full-stack apps and ML systems. Open to graduate software engineering and AI/ML roles.",
  accentColor: "#7777ff",
  cvUrl: "/cv.pdf",
  social: {
    email: "rpauls2002@gmail.com",
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
        "Delve into a vast range of Formula One statistics from drivers' points to the sport's circuit history, using data available since the first championship. Complete with AI-generated race recaps, and live weather forecasts for race weekends.",
      link: "https://f1statfinder.web.app",
      image: "projects/f1statfinder-home.png",
      category: "Web Development",
      skills: ["GCP", "Firebase", "CI/CD", "Python", "Flask", "FastF1", "React", "TypeScript", "Plotly", "Anthropic Claude"],
      wip: true,
    },
    {
      name: "F1Detect",
      description:
        "YOLOv11 object detection pipeline trained on a mix of video-game and real-world footage to track Formula 1 cars in static and real-time footage, reaching 0.945 mAP@50 on validation at ~60 FPS on GPU.",
      link: "https://github.com/rpauls02/F1Detect",
      images: [
        "projects/f1detect-01-real-hungary-single.jpg",
        "projects/f1detect-02-synthetic-imola-multi.jpg",
        "projects/f1detect-03-real-vegas-multi-night.jpg",
        "projects/f1detect-04-synthetic-hungary-single.jpg",
        "projects/f1detect-05-real-yasmarina-multi.jpg",
        "projects/f1detect-06-synthetic-vegas-multi-night.jpg",
        "projects/f1detect-07-synthetic-imola-single.jpg",
        "projects/f1detect-08-real-hungary-multi.jpg",
      ],
      category: "Object Detection",
      skills: ["Python", "Roboflow", "YOLO", "OpenCV", "PyTorch"],
    },
    {
      name: "PhishingDet",
      description:
        "Phishing classifier using CBOW word embeddings built from scratch in PyTorch, trained on 18,000+ emails. An MLP on the embeddings reached 96% accuracy with 94% phishing recall.",
      link: "https://github.com/rpauls02/PhishingDet",
      images: [
        "projects/phishingdet-1-pipeline.png",
        "projects/phishingdet-2-results.png",
      ],
      category: "Natural Language Processing",
      skills: ["Python", "NLTK", "Scikit", "PyTorch", "Pandas", "NumPy"],
    },
    {
      name: "Face Cover Detection",
      description:
        "Multiclass computer vision system comparing three CV pipelines to classify face mask status across 2,800+ images. A custom CNN reached 91% test accuracy, and a separate 'in the wild' test set showed where it struggles to generalise.",
      link: "https://github.com/rpauls02/Face-Cover-Detection",
      images: [
        "projects/facecover-1-samples.png",
        "projects/facecover-2-imbalance.png",
        "projects/facecover-3-results.png",
        "projects/facecover-4-pipeline.png",
      ],
      category: "Image Classification",
      skills: ["Python", "OpenCV", "Scikit", "PyTorch"],
    },
    /*{
      name: "VolunteerHub",
      description:
        "A full-stack volunteer management platform built from scratch with a custom PHP MVC framework, featuring role-based auth, volunteer sign-up, and staff shift scheduling. Containerised with Docker Compose across Apache, MySQL and Redis on a LAMP stack.",
      link: "https://github.com/rpauls02/Web-Development-Coursework",
      category: "Web Development",
      skills: ["PHP", "Twig", "MySQL", "Docker", "Apache", "Redis", "Composer", "Linux"],
    },*/
    {
      name: "RaceSight (WIP)",
      description:
        "A robust detection system for motorsport vehicles in mainstream racing categories including Formula, Prototype and GT3.",
      // link: "https://github.com/rpauls02/RaceSight", // repo is private: re-enable once public
      category: "Object Detection",
      skills: ["Python", "Roboflow", "YOLO", "OOAD"],
      wip: true,
    },
  ],
  experience: [
    {
      company: "Computer Repairs, Hornchurch",
      title: "Founder",
      dateRange: "Aug 2022 - Present",
      bullets: [
        "Diagnose and repair desktop systems, cutting average turnaround time by 30% through systematic hardware/software fault-finding.",
        "Advise customers on tailored hardware builds for gaming, creative, and business use cases, translating technical trade-offs into plain-language recommendations.",
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
      subjects4: "Object-oriented Analysis and Design",
      skills: ["C++", "Haskell", "Java", "JavaScript", "Node.js", "NoSQL", "Python", "React", "SQL", "TypeScript", "YOLO"],

    },
  ],
};
