import { Award, Code, Globe, Image as ImageIcon } from "lucide-react";

export const certsData = [
  {
    id: "programs",
    category: "Professional Programs",
    count: "02",
    icon: <Award size={20} />,
    themeColor: "emerald",
    items: [
      {
        title: "3rd Prize in Innovation Contest - Virtual Tour",
        date: "2025",
        issuer: "CT Group",
        skills: [
          "Creative Problem-Solving",
          "Team Collaboration",
          "System Optimization",
        ],
        impact:
          "Awarded 3rd Prize in the Innovation Contest organized by CT Group, recognizing outstanding technical skills and innovative solutions.",
      },
      {
        title: "Prize for Student of 5 merits",
        date: "2025",
        issuer: "Vietnam National University - Ho Chi Minh (VNU-HCM)",
        skills: [
          "Good Learning",
          "Good Ethics",
          "Good Health",
          "Good Volunteering",
          "Good Integration",
        ],
        impact:
          "Recognized as an outstanding student achieving the prestigious Five-Good Award at the national university level.",
        image: "/assets/certs/Prize for Student of 5 merits.jpg",
      },
    ],
  },
  {
    id: "technical",
    category: "Technical Mastery",
    count: "02",
    icon: <Code size={20} />,
    themeColor: "blue",
    items: [
      {
        title: "Associate Cloud Engineer",
        date: "2026",
        issuer: "Google Cloud",
        skills: [
          "Cloud Deployment",
          "Serverless Architecture",
          "Docker",
          "GCP Services",
        ],
        impact:
          "Earned the Associate Cloud Engineer certification, demonstrating ability to deploy, manage, and optimize applications on Google Cloud.",
      },

      {
        title: "Google Prompting Essentials Specialization",
        date: "2025",
        issuer: "Google Cloud",
        skills: ["Prompt Engineering", "Generative AI", "System Design"],
        impact:
          "Completed the Google Prompting Essentials Specialization, gaining expertise in designing effective prompts to optimize generative AI workflows.",
      },
    ],
  },
  {
    id: "languages",
    category: "Global Standards",
    count: "01",
    icon: <Globe size={20} />,
    themeColor: "purple",
    items: [
      {
        title: "TOEIC Listening & Reading",
        date: "2025",
        issuer: "ETS",
        score: "880",
        skills: ["Business English", "Technical Reading"],
        impact:
          "Preparing to obtain an international communication certificate to serve global work.",
        image: "/assets/certs/TOEIC LR Cert.jpg",
      },
    ],
  },
];
