import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import loginpage from "@/public/loginpage.png";
import nearabac from "@/public/nearabac.png";
import ecommerce from "@/public/ecommerce.png";
import deliciousbite from "@/public/deliciousbite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "MEW Int Ltd",
    title: "Software Engineer",
    location: "LA, United State",
    description:
      "Developed a motion capture 3D model video for the web app, leveraging Three.js, React, Blender, and Ready Player Me; achieved beta MVP release in 3 months, with future plans for full 3D interactivity.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Sep 2023",
  },
  {
    company: "Golden Cherry Hotel",
    title: "Front-End Developer",
    location: "Myanmar",
    description:
      "Crafted responsive and user-friendly web pages and custom dashboards for Golden Cherry Hotel, a leading hotel chain.  Increased website traffic by 20% and increasing user engagement by 40%.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Dec 2023",
  },
  {
    company: "HAKU Clothing",
    title: "Full Stack Developer",
    location: "Myanmar",
    description:
      "Developed the web app for HAKU clothing. Developed a custom dashboard with a responsive design, integrating a new payment system feature using Stripe.And developed the CRUD feature for the web app. Increased website traffic by 30% and increased user engagement by 60%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Apr 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Near ABAC",
    description:
      "This web is suppose to help for the new students at Assumption University who struggling with searching restaurant, apartment ..etc",
    tags: ["React", "Next.js", "GoogleSheet", "Tailwind", "Cypress"],
    imageUrl: nearabac,
    url: "https://github.com/Sai-Pone-Kha-Aung/near_abac",
  },
  {
    title: "Delicious Bite",
    description:
      "Delicious Bite is built with nextjs, react. Implemented the CRUD feature for the admin and include payment gateway.",
    tags: [
      "React",
      "NextJs",
      "PostgreSQL",
      "TypeScript",
      "Tailwind",
      "Stripe",
      "NextAuth",
      "Docker",
    ],
    imageUrl: deliciousbite,
    url: "https://github.com/Sai-Pone-Kha-Aung/delicious_bites",
  },
  {
    title: "Ecommerce",
    description:
      "Ecommerce is built with nextjs, react. Implemented the CRUD feature for the admin and include payment gateway.",
    tags: ["React", "NextJs", "MySQL", "TypeScript", "Tailwind", "Stripe"],
    imageUrl: ecommerce,
    url: "https://github.com/Sai-Pone-Kha-Aung/mwe-frontend",
  },
  {
    title: "Hotel Management System",
    description:
      "This project is a window app built with JAVA. Implemented the CRUD feature for the admin and user.",
    tags: ["JAVA", "JAVAFX", "MySQL", "JAVASE"],
    imageUrl: loginpage,
    url: "https://github.com/Sai-Pone-Kha-Aung/hotel-management-system",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Unity",
  "Java",
  "Cypress",
  "Jest",
  "Blender",
  "MySQL",
  "Agile Methodology",
  "Scrum",
  "Jira",
] as const;
