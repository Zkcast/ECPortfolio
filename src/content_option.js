import countriesapp from './assets/images/countries-app.PNG'
import rentten from './assets/images/rentten.PNG'
import { FaReact, FaAngular } from "react-icons/fa";
import angular from "./assets/skills/angular.png"
import bootstrap from "./assets/skills/bootstrap.png"
import css from "./assets/skills/css.png"
import html from "./assets/skills/html.png"
import javascript from "./assets/skills/javascript.png"
import ngrx from "./assets/skills/ngrx.svg"
import nodejs from "./assets/skills/nodejs.png"
import postgresql from "./assets/skills/postgresql.png"
import react from "./assets/skills/react.png"
import redux from "./assets/skills/redux.png"
import sequelize from "./assets/skills/sequelize.png"
import typescript from "./assets/skills/typescript.svg"

const logotext = "EC";
const meta = {
    title: "Ezequiel Castioni's portfolio",
    description: "I’m Castioni, Ezequiel. Full stack developer, currently working in Buenos Aires",
};

const introdata = {
    title: "Ezequiel Castioni",
    animated: {
        first: "JavaScript, ",
        second: "TypeScript, ",
        third: "React, ",
        fourth: "Angular, ",
        fifth: "NodeJs, ",
        sixth: "Express, ",
        seventh: "Sequelize, ",
        eighth: "PostgreSQL, ",
    },
    description: `Fullstack JavaScript developer from Buenos Aires, Argentina. Feel free to contact me.`,
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A short description",
    aboutme: "Born in Argentina, raised in Buenos Aires city. Since kid interested in technology, and a whole life working with computers as systems & networks technician. Now keeping this way developing software in JavaScript",
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "React",
    value: 90,
},
{
    name: "Redux",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "Frontend",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Backend",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Database",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = [{
    title: 'World Countries',
    icons: <FaReact />,
    subtitle: 'Explore world countries and set activities for them',
    img: countriesapp,
    desctiption: "Made with React/Redux, Express, Sequelize & PostgreSQL",
    link: "https://worldcountries-app.vercel.app/",
    github: "https://github.com/Zkcast/SoyHenry-Bootcamp-PI",
},
{
    title: 'Rent-Ten',
    icons: <FaAngular />,
    subtitle: 'Rent or publish places around the world. \n Filters, Login, Notifications via e-mail, Payment Gateway with MercadoPago, Darkmode, etc..',
    img: rentten,
    desctiption: "Made with Angular/NgRx, Boostrap, Express, Sequelize, PostgreSQL",
    link: "https://rent-ten.vercel.app/home",
    github: "https://github.com/raulereno/rent-ten"
},
];

const contactConfig = {
    YOUR_EMAIL: "castioniezequiel@gmail.com",
    description: "Send me a message if you want to contact me, or let me know what you think. I'm open to listen any job offer, or just have a friendly talk!",
    YOUR_SERVICE_ID: "service_v3r7cn8",
    YOUR_TEMPLATE_ID: "template_g68nzi9",
    YOUR_USER_ID: "X7mle8z9EW3CxcEet",
};

const socialprofils = {
    github: "https://github.com/zkcast",
    linkedin: "https://linkedin.com/in/castioniezequiel",
    email: "castioniezequiel@gmail.com"
};

const technologies = [
    {
        title: 'CSS',
        image: css,
        link: 'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {
        title: 'HTML',
        image: html,
        link: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
        title: 'JavaScript',
        image: javascript,
        link: 'https://www.javascript.com'
    },
    {
        title: 'TypeScript',
        image: typescript,
        link: 'https://www.typescriptlang.org/'
    },
    {
        title: 'Bootstrap',
        image: bootstrap,
        link: 'https://getbootstrap.com/'
    },
    
    {
        title: 'NodeJS',
        image: nodejs,
        link: 'https://nodejs.org/'
    },
    {
        title: 'Redux',
        image: redux,
        link: 'https://redux.js.org/'
    },

    {
        title: 'NgRx',
        image: ngrx,
        link: 'https://ngrx.io/'
    },
    {
        title: 'React',
        image: react,
        link: 'https://reactjs.org/'
    },
    
    {
        title: 'Angular',
        image: angular,
        link: 'https://angular.io/'
    },

    {
        title: 'PostgreSQL',
        image: postgresql,
        link: 'https://www.postgresql.org/'
    },
    {
        title: 'Sequelize',
        image: sequelize,
        link: 'https://sequelize.org/'
    },

    
]

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    technologies
};
