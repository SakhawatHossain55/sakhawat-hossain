import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"
import React from "react"
import {useTheme} from "next-themes"

const Sidebar = () => {

    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <img 
                src="https://i.ibb.co/tcrCy4j/Shakib.jpg" 
                alt="user Shakib" 
                className="mx-auto rounded-full"
                height="128px"
                width="128px"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
                <span className="text-green">Sakhawat </span> Hossain
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer
            </p>
            <a  className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href='./images/Sakhawat-Hossain__Resume.pdf' download='Resume.pdf' >
                <GiTie className="w-6 h-6" /> <span>Download Resume</span>
            </a>
            {/* // social icon */}
            <div className="flex justify-around mx-auto my-5 text-green md:w-full">
                <a href="">
                    <AiFillYoutube className="w-6 h-6 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-6 h-6 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
                </a>
            </div>
            {/* // address */}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Dhaka Bangladesh</span>
                </div>
                <p className="my-2">sakhawathossain7969@gmail.com</p>
                <p className="my-2">01849687969/01811973362</p>
            </div>
            {/* Email Button */}
            <button className="w-8/12 px-3 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none" onClick={() => window.open('mailto:sakhawathossain7969@gmail.com')}>Email Me</button>
            <button
            onClick={changeTheme}
            className="w-8/12 px-3 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Toggle Theme</button>
        </>
    )
}

export default Sidebar
