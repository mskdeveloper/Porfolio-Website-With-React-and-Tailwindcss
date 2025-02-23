import {
      FaReact,
      FaHtml5,
      FaCss3,
      FaNodeJs,
      FaFacebook,
      FaInstagram,
      FaLinkedin,
} from "react-icons/fa"
import { BiLogoJavascript } from "react-icons/bi"
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si"
import {
      VscVscode,
      VscCommentUnresolved,
      VscTerminalPowershell,
} from "react-icons/vsc"
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6"
import { MdGroup } from "react-icons/md"

import PROJECT_IMG_1 from "../assets/images/project-1.jpg"
import PROJECT_IMG_2 from "../assets/images/project-2.jpg"
import PROJECT_IMG_3 from "../assets/images/project-3.jpg"
import PROJECT_IMG_4 from "../assets/images/project-4.jpg"
import PROJECT_IMG_5 from "../assets/images/project-5.jpg"
import PROJECT_IMG_6 from "../assets/images/project-6.jpg"

export const MENU_LINKS = [
      { id: "01", lable: "Home", offset: "-100", to: "hero" },
      { id: "02", lable: "Skills", offset: "-80", to: "skills" },
      { id: "03", lable: "About Me", offset: "-80", to: "about" },
      { id: "04", lable: "Projects", offset: "-80", to: "projects" },
      { id: "05", lable: "Contacts", offset: "-80", to: "contact" },
]

export const STATS = [
      { id: "01", count: "10", lable: "Years of \nExperience" },
      { id: "02", count: "12", lable: "Certifications \nEarned" },
      { id: "03", count: "43", lable: "Projects \nCompleted" },
      { id: "04", count: "37+", lable: "Happly \nClients" },
]
export const SKILL_TABS = [
      { id: "01", lable: "All", value: "all" },
      { id: "02", lable: "Frontend", value: "frontend" },
      { id: "03", lable: "Backend", value: "backend" },
      { id: "04", lable: "Tools", value: "tools" },
      { id: "05", lable: "Skills", value: "soft-skills" },
]
export const SKILLS = [
      {
            id: "01",
            icon: FaReact,
            skill: "next Js",
            progress: 95,
            type: "frontend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "02",
            icon: FaHtml5,
            skill: "React Js",
            progress: 99,
            type: "frontend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "03",
            icon: FaCss3,
            skill: "CSS",
            progress: 65,
            type: "frontend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "04",
            icon: BiLogoJavascript,
            skill: "JavaScript",
            progress: 88,
            type: "backend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "05",
            icon: FaNodeJs,
            skill: "Node.js",
            progress: 75,
            type: "backend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "06",
            icon: SiExpress,
            skill: "Express.js",
            progress: 92,
            type: "backend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "07",
            icon: SiMongodb,
            skill: "MongoDB",
            progress: 73,
            type: "backend",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "08",
            icon: SiMysql,
            skill: "SQL",
            progress: 69,
            type: "soft-skills",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
            id: "09",
            icon: FaGitAlt,
            skill: "Git",
            progress: 88,
            type: "tools",
            description:
                  "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
]

export const ABOUT_ME = {
      content: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. giving information on its origins, as well as a random Lipsum generator. ",
      socialLinks: [
            { id: "01", lable: "FaceBook", icon: FaFacebook, link: "" },
            { id: "02", lable: "Instagram", icon: FaInstagram, link: "" },
            { id: "03", lable: "Twitter", icon: FaXTwitter, link: "" },
            { id: "04", lable: "Linkedin", icon: FaLinkedin, link: "" },
            { id: "05", lable: "Dribble", icon: FaDribbble, link: "" },
      ],
      email: "admin@website.com",
      phone: "+1 9176448221",
      website: "https://website.com",
}

export const PROJECTS = [
      {
            id: 1,
            title: "Reference site about Lorem Ipsum",
            image: PROJECT_IMG_1,
            tags: ["React", "Html", "css"],
      },
      {
            id: 2,
            title: "Reference site about Lorem Ipsum",
            image: PROJECT_IMG_2,
            tags: ["React", "Html", "css"],
      },
      {
            id: 3,
            title: "Reference site about Lorem Ipsum",
            image: PROJECT_IMG_3,
            tags: ["React", "Html", "css"],
      },
      {
            id: 4,
            title: "Reference site about Lorem Ipsum",
            image: PROJECT_IMG_4,
            tags: ["React", "Html", "css"],
      },
      {
            id: 5,
            title: "Reference site about Lorem Ipsum",
            image: PROJECT_IMG_5,
            tags: ["React", "Html", "css"],
      },
      {
            id: 6,
            title: "Reference site about Lorem Ipsum",
            image: PROJECT_IMG_6,
            tags: ["React", "Html", "css"],
      },
]
