import profileImg from "./Profile-img.png";
import profileImg2 from "./Profile-img2.jpg";
import { FaLightbulb, FaPaintBrush,FaCodeBranch,FaLayerGroup, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import Trees from '../assets/Trees.jpg'
import JSProject from "../assets/JewelleryShopManagement.jpg";

export const assets = {
  profileImg,
  profileImg2
};



export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React.Js', 'JavaScript','Tailwind CSS','Html','Css']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Java', 'Spring Boot', 'C#','.Net', 'Entity FrameWork']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: [ 'PostgreSQL', 'MySQL', 'SqlServer']
  },
  {
    title: 'Frameworks & Libraries',
    icon: FaLayerGroup,
    description: 'Creating fast, structured, and reusable UI components using modern frontend frameworks.',
    tags: ['React', 'Framer Motion', 'Vite','Tailwind CSS']
  },
  {
    title: 'Tools & IDEs',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub',  'Spring Tool Suite (STS)', 'Visual Studio Code', 'Eclipse IDE']
  },
  {
    title: 'Version Control & Deployment',
    icon: FaCodeBranch,
    description: 'Using Git & GitHub to track changes, collaborate on projects, and maintain organized codebases..',
    tags: ['Git & GitHub',  'CI/CD (basic)', 'Vercel Deployment']
  }
];



export const projects = [
   {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React","Tailwind CSS", "Java", "SpringBoot", "MySql"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Jewellery Shop Management",
    description: " Designed and developed a desktop-based jewellery shop management application.",
    image: JSProject,
    tech: ["C#", ".Net", "WPF", "Entity FrameWork","MY SQL"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Adobe Trees ",
    description: "Designed and developed a role-based web application for online tree plantation.",
    image: Trees,
    tech: ["React","Tailwind CSS", "NodeJs", "MongoDB"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
 
  /*{
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }*/
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
