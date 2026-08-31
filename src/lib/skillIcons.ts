// Maps skill names to iconify icon identifiers (astro-icon). Skills without a
// real brand logo or a fitting generic icon are simply omitted and render as
// plain text tags.
export const skillIcons: Record<string, string> = {
  GCP: "simple-icons:googlecloud",
  Firebase: "simple-icons:firebase",
  Flask: "simple-icons:flask",
  React: "simple-icons:react",
  Typescript: "simple-icons:typescript",
  TypeScript: "simple-icons:typescript",
  CSS: "simple-icons:css3",
  JavaScript: "simple-icons:javascript",
  "Node.js": "simple-icons:nodedotjs",
  Python: "simple-icons:python",
  PyTorch: "simple-icons:pytorch",
  Scikit: "simple-icons:scikitlearn",
  "C++": "simple-icons:cplusplus",
  Haskell: "simple-icons:haskell",
  Java: "simple-icons:openjdk",
  Roboflow: "simple-icons:roboflow",
  YOLO: "simple-icons:yolo",

  // Generic domain/field labels (no single brand logo, use a representative icon)
  "Machine Learning": "mdi:brain",
  "Artificial Intelligence": "mdi:robot-outline",
  "Statistical Reasoning": "mdi:chart-bell-curve",
  "Object Detection": "mdi:image-search-outline",
  "Natural Language Processing(NLP)": "mdi:message-text-outline",
  "Web Development": "mdi:web",
  SQL: "mdi:database",
  NoSQL: "mdi:database-outline",
};
