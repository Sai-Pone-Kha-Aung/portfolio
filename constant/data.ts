import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import loginpage from "@/public/projects/loginpage.png";
import nearabac from "@/public/nearabac.png";
import ecommerce from "@/public/ecommerce.png";
import deliciousbite from "@/public/projects/deliciousbite.png";
import {
  Database,
  Layout,
  Layers,
  Smartphone,
  Terminal,
  Code,
  Cpu,
  GitBranch,
} from "lucide-react";

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
      "As a front-end developer, I mainly developed 3D avatars for retargeting motion with AI using React, Threejs, and Blender. I also use Unity to develop the 3D model scene to show on the web. Build character customization for the 3D model with Unity fully functional. Use the assets as a low-poly 3D model. Including cloth simulation.",
    icon: React.createElement(CgWorkAlt),
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Tailwind CSS",
      "Cypress",
      "Jira",
      "Unity",
      "Blender",
      "Three.js",
    ],
    date: "June 2022 - Sep 2023",
    achievements: [
      "Developed a 3D avatar system for retargeting motion with AI.",
      "Implemented a character customization feature using Unity.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
      "Optimized 3D models for web performance.",
      "Participated in code reviews and provided constructive feedback.",
      "Worked with Agile methodologies to deliver projects on time.",
    ],
    projects: [
      "3D Avatar Retargeting with React and Three.js",
      "Unity-based Character Customization",
      "Web-based Character Customization",
    ],
    images: ["/experience/Home/full.jpg"],
  },
  {
    company: "Golden Cherry Hotel",
    title: "Front-End Developer",
    location: "Myanmar",
    description:
      "I joined the Golden Cherry Hotel as a freelance Frontend developer. Developed responsive and user-friendly websites and custom dashboard.Collaborated with designers and backend developers to implement interactive features and optimize website performance. Provided ongoing maintenance and updates to existing websites, including troubleshooting and resolving coding issues on time.",
    icon: React.createElement(CgWorkAlt),
    skills: ["React", "JavaScript", "CSS", "Tailwind", "Cypress"],
    achievements: [
      "Developed responsive and user-friendly websites.",
      "Collaborated with designers and backend developers.",
      "Optimized website performance and loading speed.",
      "Provided ongoing maintenance and updates to existing websites.",
      "Participated in code reviews and provided constructive feedback.",
    ],
    projects: [
      "Golden Cherry Hotel Homepage & Booking System",
      "System design for Hotel Management",
      "Custom Dashboard for Hotel Management",
    ],
    images: ["/experience/Home/gch.png"],
    date: "Oct 2023 - Dec 2023",
  },
  {
    company: "HAKU Clothing",
    title: "Full Stack Developer",
    location: "Myanmar",
    description:
      "As a Fullstack at Project, I worked on developing and maintaining various web applications using both front-end and back-end. I work 70% frontend and 30% backend. Collaborated with cross-functional teams. Developed and maintained web applications. Utilized problem-solving skills. Designed and implemented innovative solutions",

    icon: React.createElement(CgWorkAlt),
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    achievements: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
      "Utilized problem-solving skills to troubleshoot and resolve issues.",
      "Designed and implemented innovative solutions to improve user experience.",
      "Participated in code reviews and provided constructive feedback.",
      "Worked with Agile methodologies to deliver projects on time.",
    ],
    projects: [
      "HAKU Clothing E-commerce Website",
      "Custom Dashboard for E-commerce Management",
      "Database design for E-commerce",
    ],
    images: ["/experience/Home/haku.png"],
    date: "Jan 2024 - Apr 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Near ABAC",
    slug: "near-abac",
    description:
      "Near ABAC is suppose to help for the new students at Assumption University who struggling with searching restaurant, apartment ..etc",
    tags: ["React", "Next.js", "GoogleSheet", "Tailwind", "Cypress"],
    imageUrl: nearabac,
    url: "https://github.com/Sai-Pone-Kha-Aung/near_abac",
  },
  {
    title: "Delicious Bite",
    slug: "delicious-bite",
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
    slug: "ecommerce",
    description:
      "Ecommerce is built with nextjs, react. Implemented the CRUD feature for the admin and include payment gateway.",
    tags: ["React", "NextJs", "MySQL", "TypeScript", "Tailwind", "Stripe"],
    imageUrl: ecommerce,
    url: "https://github.com/Sai-Pone-Kha-Aung/mwe-frontend",
  },
  {
    title: "Hotel Management System",
    slug: "hotel-management-system",
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

export const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks",
    icon: React.createElement(Layout, { className: "h-10 w-10" }),
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Redux",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    title: "UI/UX",
    description:
      "Designing intuitive and engaging user experiences with a focus on usability",
    icon: React.createElement(Layout, { className: "h-10 w-10" }),
    technologies: ["Figma"],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    icon: React.createElement(Database, { className: "h-10 w-10" }),
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "GraphQL",
    ],
  },
  {
    title: "Project Management",
    description: "Managing projects and teams using Agile methodologies",
    icon: React.createElement(Terminal, { className: "h-10 w-10" }),
    technologies: ["Agile", "Scrum", "Jira", "Trello", "Notion"],
  },
  {
    title: "3D Development",
    description: "Crafting immersive 3D experiences for the web",
    icon: React.createElement(Layers, { className: "h-10 w-10" }),
    technologies: ["Three.js", "React Three Fiber", "WebGL", "GLSL", "Blender"],
  },
  {
    title: "Game Development",
    description: "Developing interactive 3D experiences and games",
    icon: React.createElement(Smartphone, { className: "h-10 w-10" }),
    technologies: ["Unity", "Unreal Engine", "C#"],
  },
  {
    title: "Software Architecture",
    description: "Designing scalable and maintainable software systems",
    icon: React.createElement(Code, { className: "h-10 w-10" }),
    technologies: ["System Design", "API Design", "Performance Optimization"],
  },
  {
    title: "Testing & Quality",
    description: "Ensuring software quality through comprehensive testing",
    icon: React.createElement(Cpu, { className: "h-10 w-10" }),
    technologies: ["Jest", "React Testing Library", "Cypress", "E2E Testing"],
  },
  {
    title: "Version Control",
    description: "Managing code changes and collaborating with teams",
    icon: React.createElement(GitBranch, { className: "h-10 w-10" }),
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Code Reviews",
      "Branching Strategies",
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: "near-abac",
    title: "Near ABAC",
    description:
      "Near ABAC is a full-stack web application built with Next.js, TypeScript, and Tailwind CSS. Features include authentication, real-time updates, and a responsive design.",
    image: "/projects/nearabac1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Clerk"],
    category: "web-app",
    liveLink:
      "https://near-abac-git-nearabac016-sai-pone-kha-aungs-projects.vercel.app/",
    githubLink: "https://github.com/Sai-Pone-Kha-Aung/near_abac.git",
    // Additional details for the project detail page
    overview:
      "Near ABAC is a comprehensive web application designed to explore around Assumption University. It provides users with a platform to discover nearby restaurants, apartments, and other essential services. The application is built with a focus on user experience, ensuring that new students can easily navigate and find what they need.",
    challenge:
      "The main challenge was collecting data from various sources. I needed to ensure that the information was accurate and up-to-date. Additionally, I had to implement a user-friendly interface that would allow users to search and filter results efficiently.",
    solution:
      "Scrape the data from Google, Facebook, and Instagram. Implemented a robust data collection strategy that integrated various APIs and databases to ensure real-time accuracy and user-friendly navigation. I also ensured that the application was scalable and maintainable for future updates.",
    features: [
      "User authentication",
      "Real-time updates",
      "Responsive design",
      "Search and filter functionality",
      "Google Maps integration",
      "Admin dashboard for data management",
      "Image upload",
      "",
    ],
    techStack: {
      frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "E2E: Cypress",
      ],
      backend: ["Node.js", "Express", "Supabase", "PostgreSQL", "Clerk auth"],
      devOps: ["Vercel"],
    },
    screenshots: [
      "/projects/nearabac1.png",
      "/projects/nearabac2.png",
      "/projects/nearabac3.png",
      "/projects/nearabac4.png",
      "/projects/nearabac5.png",
      "/projects/nearabac6.png",
      "/projects/nearabac7.png",
      "/projects/nearabac8.png",
      "/projects/nearabac9.png",
    ],
  },
  {
    id: 2,
    slug: "car-service-pro",
    title: "Car Service Pro",
    description:
      "A web application for managing car service appointments, including features like user authentication, appointment scheduling, and service history tracking.",
    image: "/projects/carservicepro1.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN"],
    category: "web-app",
    liveLink: "",
    githubLink:
      "https://github.com/Sai-Pone-Kha-Aung/car_service_dashboard.git",
    // Additional details for the project detail page
    overview:
      "Car Service Pro is a comprehensive web application designed to streamline the process of managing car service appointments. It allows users to book appointments, track service history, and receive notifications for upcoming services. Responsive design ensures a seamless experience across devices. Includes an admin dashboard for managing services and appointments.",
    challenge:
      "The main challenge was to create a user-friendly interface that allows users to easily book appointments and manage their service history. Additionally, I needed to ensure that the application could handle real-time updates and notifications.",
    solution:
      "I implemented a robust appointment scheduling system using a combination of React and Next.js. The application features real-time notifications and a responsive design that adapts to various screen sizes. I also integrated an admin dashboard for managing services and appointments.",
    features: [
      "User authentication and profile management",
      "Appointment scheduling and management",
      "Service history tracking",
      "Real-time notifications",
      "Admin dashboard for service management",
      "Custom Payment integration",
      "Responsive design for mobile and desktop",
    ],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
    },
    screenshots: [
      "/projects/carservicepro1.png",
      "/projects/carservicepro2.png",
      "/projects/carservicepro3.png",
      "/projects/carservicepro_admin.png",
    ],
  },
  {
    id: 3,
    slug: "win-real-estate",
    title: "Win Real Estate",
    description:
      "Win Real Estate is a property management web application that allows users to search, filter, and manage real estate listings. It includes features like user authentication, property details, and real-time chat.",
    image: "/projects/win1.png",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "SCSS", "Prisma"],
    category: "web-app",
    liveLink: "https://example.com",
    githubLink: "https://github.com/Sai-Pone-Kha-Aung/win-real-estate.git",
    // Additional details for the project detail page
    overview:
      "Win Real Estate is a comprehensive property management web application designed to simplify the process of searching, filtering, and managing real estate listings. It provides users with a platform to explore various properties, view detailed information, and communicate with property managers.",
    challenge:
      "The main challenge was to create a user-friendly interface that allows users to easily search and filter properties based on their preferences. Additionally, I needed to implement a secure authentication system and ensure that the application could handle real-time chat functionality.",
    solution:
      "I implemented a robust search and filter system using React and Next.js. The application features user authentication with secure login and registration processes. I also integrated a real-time chat system to facilitate communication between users and property managers.",
    features: [
      "User authentication and profile management",
      "Property search and filter functionality",
      "Detailed property listings with images",
      "Real-time chat system for user communication",
      "Custom payment integration with Stripe",
      "Responsive design for mobile and desktop",
      "Map integration for property locations",
    ],
    techStack: {
      frontend: ["React", "SCSS", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB", "Stripe API"],
    },
    screenshots: [
      "/projects/win1.png",
      "/projects/win2.png",
      "/projects/win3.png",
      "/projects/win4.png",
      "/projects/win5.png",
    ],
  },
  {
    id: 4,
    slug: "hotel-management-system",
    title: "Hotel Management System",
    description:
      "This is a JAVA-SE application for managing hotel operations. It includes features like room booking, customer management, and billing.",
    image: "/projects/loginpage.png",
    tags: ["Java", "JavaFX", "MySQL", "JDBC", "Swing"],
    category: "web",
    liveLink: "https://example.com",
    githubLink:
      "https://github.com/Sai-Pone-Kha-Aung/hotel-management-system.git",
    // Additional details for the project detail page
    overview:
      "Hotel Management System is a comprehensive application designed to streamline hotel operations. It provides features for room booking, customer management, billing, and reporting. The application is built using Java SE and JavaFX, ensuring a responsive and user-friendly interface.",
    challenge:
      "Building a efficient desktop application that can handle multiple users and provide real-time updates was a significant challenge. I also needed to ensure that the application could manage complex data relationships between rooms, customers, and bookings.",
    solution:
      "I implemented a robust database schema using MySQL to manage data relationships effectively. The application features a user-friendly interface built with JavaFX, allowing users to easily navigate through different functionalities. I also integrated reporting features for better data analysis.",
    features: [
      "User authentication and role management",
      "Room booking and availability management",
      "Spa and restaurant management",
      "Customer management with detailed profiles",
      "Billing and invoicing system",
      "Reporting and analytics dashboard",
      "Responsive design for desktop and tablet",
      "Invoice generation and printing",
    ],
    techStack: {
      frontend: ["JavaFX", "Java Swing"],
      backend: ["Java SE", "JDBC", "MySQL"],
    },
    screenshots: ["/projects/loginpage.png"],
  },
  {
    id: 5,
    slug: "e-commerce",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include product listings, shopping cart, and payment integration.",
    image: "/projects/ecommerce.png",
    tags: [
      "React",
      "Next.Js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Stripe",
    ],
    category: "web",
    liveLink: "",
    githubLink: "https://github.com/Sai-Pone-Kha-Aung/e_commerce_admin.git",
    // Additional details for the project detail page
    overview:
      "E-commerce Platform is a comprehensive web application designed to facilitate online shopping. It provides users with a platform to browse products, add items to their cart, and complete purchases securely. The application is built with a focus on user experience, ensuring that customers can easily navigate and find what they need.",
    challenge:
      "Creating a user can have their own dashboard to manage their orders and products. I also needed to implement a secure payment system and ensure that the application could handle real-time updates.",
    solution:
      "I implemented a custom dashboard for a user who want to create their own e-commerce web-page. The dashboard allow to create the page for user what user need and they can load their product with custom details.",
    features: [
      "User authentication and profile management",
      "Product listings with search and filter functionality",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order history and tracking",
      "Admin dashboard for product management",
      "Responsive design for mobile and desktop",
      "Custom dashboard for user to create their own e-commerce web-page",
    ],
    techStack: {
      frontend: [
        "React",
        "Next.js",
        "Zustand",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN",
      ],
      backend: ["Node.js", "Express", "Prisma", "MySQL", "Stripe"],
      devOps: ["Vercel"],
    },
    screenshots: [
      "/projects/ecommerce.png",
      "/projects/ecommerce1.png",
      "/projects/ecommerce5.png",
      "/projects/ecommerce3.png",
      "/projects/ecommerce4.png",
    ],
  },
  {
    id: 6,
    slug: "delicious-bite",
    title: "Delicious Bite",
    description:
      "Delicious Bite is a food delivery application that connects users with local restaurants. It features a user-friendly interface, real-time order tracking, and secure payment options.",
    image: "/projects/deliciousbite.png",
    tags: ["React", "Docker", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    category: "mobile",
    liveLink: "",
    githubLink: "https://github.com/Sai-Pone-Kha-Aung/delicious_bites.git",
    overview:
      "Delicious Bite is a comprehensive food delivery application designed to connect users with local restaurants. It provides a user-friendly interface for browsing menus, placing orders, and tracking deliveries in real-time. The application is built with a focus on performance and scalability, ensuring a seamless experience for users.",
    challenge:
      "The main challenge was to create a responsive and intuitive interface that allows users to easily navigate through different restaurants and menus. Additionally, I needed to implement real-time order tracking and secure payment options.",
    solution:
      "I implemented a robust user interface using React and Tailwind CSS, ensuring that the application is responsive and user-friendly. Tracking notifications and updates. I also integrated secure payment options to ensure a safe transaction process.",
    features: [
      "User authentication and profile management",
      "Restaurant listings with menus",
      "Real-time order tracking",
      "Secure payment integration with Stripe",
      "User reviews and ratings",
      "Admin dashboard for restaurant management",
      "Responsive design for mobile and desktop",
      "Push notifications for order updates",
    ],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "Stripe"],
      devOps: ["Docker"],
    },
    screenshots: [
      "/projects/deliciousbite_4.png",
      "/projects/deliciousbite_1.png",
      "/projects/deliciousbite_2.png",
      "/projects/deliciousbite_3.png",
    ],
  },
  {
    id: 7,
    slug: "character-customization",
    title: "Character Customization with Unity",
    description:
      "Character Customization is a Unity-based application that allows users to create and customize 3D characters. It features a user-friendly interface, real-time rendering, and a variety of customization options.",
    image: "/projects/CC.png",
    tags: ["Unity", "LowPoly-Model", "Blender", "C#"],
    category: "3d",
    liveLink: "",
    githubLink: "https://github.com/Sai-Pone-Kha-Aung/character_customization",
    overview:
      "Character Customization is a comprehensive Unity-based application designed to allow users to create and customize 3D characters. It provides a user-friendly interface for selecting different character features, including hairstyles, clothing, and accessories. The application is built with a focus on real-time rendering and performance.",
    challenge:
      "The main challenge was to create a dynamic clothing system that allows users to mix and match different clothing items and accessories. Additionally, I needed to ensure that the application could handle real-time rendering without compromising performance. Another challenge was to build the inventotry system",
    solution:
      "I implemented a character customization system using Unity and C#. The application features a user-friendly interface that allows users to easily navigate through different customization options. I also optimized the rendering process to ensure smooth performance during real-time updates. I integrated an inventory system to manage the clothing items and accessories.",
    features: [
      "User authentication and profile management",
      "3D character customization with various options",
      "Real-time rendering and performance optimization",
      "User-friendly interface for easy navigation",
      "Export and save customized characters",
      "Integration with Blender for custom models",
      "Responsive design for mobile and desktop",
    ],
    techStack: {
      frontend: ["Unity", "C#", "Blender"],
    },
    screenshots: ["/projects/CC.png"],
  },
];
