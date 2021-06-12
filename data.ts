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
        description: 'This app shows a statistical view about corona virus the world',
        image_path: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg',
        deployed_url: 'https://laundry-service-48e19.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/GoWash',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'material-ui'],
    },
    {
        id: 2,
        name: 'Chart App',
        description: 'This app shows a statistical view about corona virus the world',
        image_path: 'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_960_720.jpg',
        deployed_url: 'https://chat-app-team-78.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/chat-app',
        category: ['redux'],
        key_techs: ['React.js', 'javascript', 'material-ui'],
    },
    {
        id: 3,
        name: 'Fast Repair',
        description: 'This app shows a statistical view about corona virus the world',
        image_path: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg',
        deployed_url: 'https://fast-repair-c13c2.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/fast-repair',
        category: ['JavaScript'],
        key_techs: ['React.js', 'javascript', 'material-ui'],
    },
    {
        id: 4,
        name: 'Daily Mart',
        description: 'This app shows a statistical view about corona virus the world',
        image_path: 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514_960_720.jpg',
        deployed_url: 'https://fresh-valley-e1a56.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/daily-mart',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'material-ui'],
    },
    {
        id: 5,
        name: 'Doctors Portal',
        description: 'This app shows a statistical view about corona virus the world',
        image_path: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg',
        deployed_url: 'https://doctors-portal-ac941.web.app/',
        github_url: 'https://github.com/SakhawatHossain55/doctors-portal-main',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'material-ui'],
    },
    {
        id: 6,
        name: 'Panda Commerce',
        description: 'This app shows a statistical view about corona virus the world',
        image_path: 'https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831_960_720.jpg',
        deployed_url: 'https://sakhawathossain55.github.io/panda-commerce-boostrtrap/',
        github_url: 'https://github.com/SakhawatHossain55/panda-commerce-boostrtrap',
        category: ['react'],
        key_techs: ['React.js', 'javascript', 'material-ui'],
    },
]