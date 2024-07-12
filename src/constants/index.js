import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/proj3.jpg";
import project4 from "../assets/projects/proj4.jpg";

export const HERO_CONTENT = `I am a passionate Web developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like ReactJS, back-end technologies like php,Node.js, MySQL and MongoDB.As well as CMS like Wordpress,Elementor,WooCommerce and Ecommerce store My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including Wordpress,Elementor,WooCommerce and Ecommerce store ,React, Three.js, php, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "JJKBROTHERS",
    description: `Develop and maintaining Ecommerce store using Php,WordPress,Elementor and WooCommerce. Develop complete Admin dashboard for client to maintain and manage the store to generate leads and increase number of orders. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Php", "Wordpress", "Elementor", "WooCommerce"],
  },
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "Skorels",
    description: `Develop and maintaining leather Products Ecommerce store using WordPress,Elementor Pro and WooCommerce. Develop complete Admin dashboard for client to maintain and manage the store to generate leads and increase number of orders. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Wordpress", "Elementor", "WooCommerce"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Store",
    image: project1,
    description:
      "A fully functional e-commerce Store with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "WordPress", "Php", "MySql"],
  },
  {
    title: "Youtube Clone",
    image: project2,
    description:
      "An Youtube clone application , with features such as channel and video search, likes ,and see views.",
    technologies: ["ReactJS", "TailwindCSS", "RapidAPI"],
  },
  {
    title: "Real Time Chat Application",
    image: project3,
    description:
      "A real time chat application where the messages were stored and user is able to chat at the real time. send and recieve simultaneously at the same time.",
    technologies: ["ReactJS", "TailwindCSS", "Socket.io","NodeJs","Express Js","Mongo Db"],
  },
  {
    title: "3D Portfolio Web Application",
    image: project4,
    description:
      "A 3D Portfolio develop with the help of three js & react js.Here i import some of the 3d modals like the personal system and the earth and balls",
    technologies: ["ReactJS", "ThreeJs","TailWind Css","Frammer-Motion"],
  },
];

export const CONTACT = {
  address: "Rawalpindi, Pakistan",
  phoneNo: "+92 330-9580915",
  email: "denzowebservice@gmail.com",
};
export const SERVICE=[
 { name:"WEBSITE DEVELOPMENT"},
 { name:"E-COMMERCE STORES"},
 { name:"CMS DEVELOPMENT"},
 { name:"PORTFOLIO WEBSITE"},
]