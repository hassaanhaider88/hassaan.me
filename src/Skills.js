import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { FaJsSquare, FaNode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const SkillsObj = [
  {
    id: 1,
    skillname: "HTML",
    icon: AiFillHtml5,
    desc: "The foundation of every web page, used to structure content clearly and accessibly."
  },
  {
    id: 2,
    skillname: "CSS",
    icon: DiCss3,
    desc: "Controls layout, responsiveness, and visual design to turn structure into real interfaces."
  },
  {
    id: 3,
    skillname: "JavaScript",
    icon: FaJsSquare,
    desc: "Brings interactivity, logic, and dynamic behavior to the web and modern applications."
  },
  {
    id: 4,
    skillname: "React Js",
    icon: RiReactjsFill,
    desc: "Helps build fast, scalable, and component-based user interfaces efficiently."
  },
  {
    id: 5,
    skillname: "Node Js",
    icon: FaNode,
    desc: "Enables JavaScript to run on the server for building fast and scalable backend services."
  },
  {
    id: 6,
    skillname: "Express Js",
    icon: SiExpress,
    desc: "Simplifies backend development by handling routing, APIs, and middleware efficiently."
  },
  {
    id: 7,
    skillname: "MongoDB",
    icon: DiMongodb,
    desc: "Stores application data flexibly and scales easily for modern web applications."
  },
  {
    id: 8,
    skillname: "Git",
    icon: BsGit,
    desc: "Tracks code changes and enables collaboration in professional development workflows."
  },
  {
    id: 9,
    skillname: "Next Js",
    icon: SiNextdotjs,
    desc: "Improves performance and SEO with server-side rendering and modern routing."
  },
  {
    id: 10,
    skillname: "TypeScript",
    icon: SiTypescript,
    desc: "Adds type safety to JavaScript, reducing bugs and improving code maintainability."
  },
];


export default SkillsObj;
