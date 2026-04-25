import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Learning Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
  { value: 3, suffix: "", label: "Freelance Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Innovation-Driven Development",
    desc: "Creating fast, modern, and user-friendly apps using React, React Native, and Next.js with a focus on performance and scalability.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Strong API Integration",
    desc: "Building smooth connections between frontend and backend using Express.js, Prisma, and MySQL for reliable, secure systems.",
  },
  {
    imgPath: "/images/time.png",
    title: "Problem-Solving Mindset",
    desc: "Turning challenges into smart, efficient solutions while ensuring quality and precision in every project I build.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Data Analyst",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Data Analyst",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "A highly dedicated developer with strong expertise in building scalable and user-friendly applications. Delivers clean, efficient solutions with a focus on performance and usability.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend & Mobile Developer",
    date: "2023 - Present",
    responsibilities: [
      "Developed responsive web and mobile applications using React and React Native.",
      "Built reusable components and optimized UI for performance and scalability.",
      "Integrated REST APIs to deliver dynamic and real-time user experiences.",
    ],
  },
  {
    review:
      "Demonstrated the ability to build real-world business solutions from scratch, focusing on solving practical problems with efficient system design.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "2024 - Present",
    responsibilities: [
      "Developed 'Elite Agency', an invoice and inventory management system.",
      "Designed and integrated backend services using Express.js and Prisma.",
      "Implemented data visualization and efficient business workflow features.",
    ],
  },
  {
    review:
      "A reliable freelance developer who understands client needs and delivers tailored, high-quality solutions within deadlines.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Freelance Developer",
    date: "2025 - Present",
    responsibilities: [
      "Built and delivered custom business applications for clients.",
      "Translated client requirements into functional, user-friendly solutions.",
      "Maintained clean code standards and ensured smooth deployment.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Siva Subramanian",
    mentions: "@client1",
    review:
      "He did an excellent job developing our Railway Ticket Booking application for a final year project. The system was smooth, well-structured, and easy to use. His technical skills and support throughout the project were highly appreciated.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Deoplexis",
    mentions: "@deoplexis",
    review:
      "We had a great experience working with him on our company portfolio. He understood our requirements clearly and delivered a modern, responsive website that represents our brand perfectly. Highly professional and reliable.",
    imgPath: "/images/client3.jpeg",
  },
  {
    name: "M.K. Balan Water Service",
    mentions: "@client3",
    review:
      "The Elite Agency system he built for our business made billing and stock management much easier. The application is fast, simple, and saves us a lot of time daily. We are very satisfied with his work.",
    imgPath: "/images/client2.png",
  },
];
const socialImgs = [
  {
    name: "github",
    Icon: FaGithub,
    link: "https://github.com/Thangarajiv2006",
  },
  {
    name: "linkedin",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/thangarajiv-s-53164b2bb/",
  },
  {
    name: "insta",
    Icon: FaInstagram,
    link: "https://www.instagram.com/360_photospot/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
