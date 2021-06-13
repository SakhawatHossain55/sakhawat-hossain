import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai"
import {RiComputerLine} from "react-icons/ri"
import { FaServer } from "react-icons/fa"
import { MdDeveloperMode } from "react-icons/md"
import { IProject, IService, ISkill } from "./type"
import { BsCircleFill } from "react-icons/bs"


export const services:IService[] = [

    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>',
    },
    {
        Icon: FaServer,
        title: 'Backend Development',
        about: 'Handle database, server, api using <b>Express</b> & other popular frameworks',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Development',
        about: 'I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competitive Coder',
        about: 'A daily problem solver in <b>HackerRank</b> & <b>Leet Code</b>',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX designer',
        about: 'Stunning user interface designer using <b>Figma</b> & <b>Framer</b>',
    },
    {
        Icon: RiComputerLine,
        title: 'Whatever',
        about: 'I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>',
    }
]

export const languages:ISkill[] = [
    {
        name: 'React.js',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'JavaScript',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'React Native',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Node.js',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Express.js',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'MOngoDB',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Bootstrap',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'Material-ui',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'HTML5',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS',
        level: '90%',
        Icon: BsCircleFill
    },
]
export const tools:ISkill[] = [
    {
        name: 'Git',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: ' VS Code',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Heroku',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Netlify',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Firebase',
        level: '95%',
        Icon: BsCircleFill
    },
    {
        name: 'Github',
        level: '95%',
        Icon: BsCircleFill
    },
]

export const projects:IProject[] = [
    {
        id: 1,
        name: 'Go Wash',
        description: 'A full-stack single-page web application where customers can book a service for washing their dresses by pay the fees. The website contains a separate dashboard for the admin and user.',
        image_path: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg',
        deployed_url: 'https://laundry-service-48e19.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/GoWash',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'material-ui', 'MOngoDB', 'Stripe.js', 'FontAwesome', 'Firebase', 'Express.js', 'Bootstrap'],
    },
    {
        id: 2,
        name: 'Chart App',
        description: 'This is a Communicating website where a person can contact him/her friend & customer community. If a person wants to use this website, he/she must first sign in to the Google Authentication process. They can create Room and contact easily.',
        image_path: 'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg',
        deployed_url: 'https://chat-app-team-78.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/chat-app',
        category: ['redux'],
        key_techs: ['React.js', 'React Redux', 'Redux Toolkit', 'Style Component', 'Material-ui', 'Firebase', 'React Firebase Hook'],
    },
    {
        id: 3,
        name: 'Fast Repair',
        description: 'A full-stack single-page web application where customers can book a service for repairing their smart phone by pay the fees. The website contains a separate dashboard for admin and user.',
        image_path: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg',
        deployed_url: 'https://fast-repair-c13c2.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/fast-repair',
        category: ['JavaScript'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'material-ui', 'MOngoDB', 'Stripe.js', 'FontAwesome', 'Firebase', 'Express.js', 'React Bootstrap'],
    },
    {
        id: 4,
        name: 'Daily Mart',
        description: 'A full-stack single-page web application where users can choose, explore and order food by submitting relevant information.',
        image_path: 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514_960_720.jpg',
        deployed_url: 'https://fresh-valley-e1a56.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/daily-mart',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'material-ui', 'MOngoDB', 'FontAwesome', 'Firebase', 'Express.js', 'Bootstrap'],
    },
    {
        id: 5,
        name: 'Doctors Portal',
        description: 'A single-page web app with a dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.',
        image_path: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg',
        deployed_url: 'https://doctors-portal-ac941.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/doctors-portal-main',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'material-ui', 'MOngoDB', 'FontAwesome', 'Firebase', 'Express.js', 'Bootstrap'],
    },
    {
        id: 5,
        name: 'Volunteer Networks',
        description: 'A single-page web app. Admin can add any event and he can see all events. Users can register for an event and see all registered event details. with a dashboard where people can pick the date and time and fix an appointment.',
        image_path: 'https://cdn.pixabay.com/photo/2016/07/11/21/23/water-lily-1510707_960_720.jpg',
        deployed_url: 'https://volunteer-network-3bcf3.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/volunteer-network',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'material-ui', 'MOngoDB', 'FontAwesome', 'Firebase', 'Express.js', 'Bootstrap'],
    },
    {
        id: 5,
        name: 'Fast_Ride',
        description: 'A single-page web app with a dashboard where users can request a ride by selecting their pick-up location and their destination location and date.',
        image_path: 'https://cdn.pixabay.com/photo/2018/04/21/20/23/tulips-3339416_960_720.jpg',
        deployed_url: 'https://urban-riders-9bf60.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/fast-ride',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'material-ui', 'MOngoDB', 'FontAwesome', 'Firebase', 'Express.js', 'Bootstrap'],
    },
    {
        id: 6,
        name: 'Panda Commerce',
        description: 'A simple, static, and one-page e-commerce website design. It is an XD to HTML conversion.',
        image_path: 'https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_960_720.jpg',
        deployed_url: 'https://sakhawathossain55.github.io/panda-commerce-boostrtrap/',
        github_url: 'https://github.com/SakhawatHossain55/panda-commerce-boostrtrap',
        category: ['react'],
        key_techs: ['HTML', 'CSS', 'Bootstrap'],
    },
    {
        id: 6,
        name: 'Football Facts',
        description: 'Football Facts is a professional react web app what I made for programming heros assignment #8. The project is totally simple and made using latest version functionality.',
        image_path: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_960_720.jpg',
        deployed_url: 'https://cranky-visvesvaraya-ed5ebc.netlify.app/',
        github_url: 'https://github.com/SakhawatHossain55/Football-Facts',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'Node.js', 'Heroku', 'FontAwesome', 'Bootstrap'],
    },
]