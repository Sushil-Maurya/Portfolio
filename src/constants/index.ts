import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  figma,
  viewer3d,
  capitalMovies,
  digitalKranti,
  buopso,
  BuopsoLogo,
  link,
  vitest,
  rtl,
  cms,
  tailwind,
  mui,
  antdesign,
  framer,
  zustand,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/1ZwD6qzrNyIOy-kCk2CcgpYcVH3q6RPJG/view?usp=sharing",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Ant Design",
    icon: antdesign,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vitest",
    icon: vitest,
  },
  {
    name: "rtl",
    icon: rtl,
  },
];

const experiences = [
  {
    title: "React.js Developer (Intern)",
    companyName: "Digital Kranti",
    icon: digitalKranti,
    iconBg: "#ddf",
    date: "June 2023 - Oct 2023",
    points: [
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Experience in creating secure RESTful APIs with JWT and Passport, seamlessly integrating them into React.js for frontend-backend communication. ",
      "I contributed to the development of a versatile CMS for seamless management of blogs and e-commerce products. ",
    ],
    link: "https://digitalkrantiindia.com/",
  },
  {
    title: "Software Developer",
    companyName: "Buopso",
    icon: buopso,
    iconBg: "#fff",
    date: "Oct 2023 - Present",
    points: [
      "Implemented a highly customizable Printing Page setup, enabling personalization of printouts and download them in PDF format with a 30% increase in user satisfaction and 50% reduction in print errors.",
      "Architected an intuitive UI framework facilitating effortless creation of custom forms via drag-n-drop, resulting in a 25% increase in user engagement.",
      "Build powerful forms for data collection that can be shared globally or privately. Buopso Forms lets you design custom forms with simple drag-and-drop.",
      "Implemented professional forms with ease. Share forms publicly with anyone, anywhere, or share forms privately within your organization. Additionally, integrated QR code functionality.",
      "Developed and executed test cases using Vitest and React Testing Library to validate React components, improving test coverage and maintainability.",
    ],
    link: "https://www.buopso.com/",
  },
];

const testimonials = [];

const projects = [
  {
    name: "Buopso Project",
    description:
      "Buopso software is the ultimate expression of both human intellect and skill. Buopso was founded on the belief that organizations can deliver exceptional experiences by automating resources in a way that allows them to scale without adding unnecessary complexity.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "orange-text-gradient",
      },
    ],
    image: BuopsoLogo,
    linkIcon: link,
    source_code_link: "https://one.buopso.io/",
  },
  {
    name: "E-Commerce CMS ",
    description:
      "E-commerce shop owners to create, edit and publish digital website content without writing any code. It also allows users to modify the look and feel of the online store, such as changing product page layout, adding promotional banners, or quickly adding new website sections to better promote products",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstraps",
        color: "green-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/Sushil-Maurya/cms",
  },
];

export { services, technologies, experiences, testimonials, projects };
