import { FunctionComponent, useState } from "react"
import { IProject } from "../type"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInpUp, stagger } from "../animations"


const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetails:null|number;
    setShowDetails: (id: null|number) => void;
}> = ({
    project: {
        name, 
        image_path,
        category, 
        deployed_url,
        github_url, 
        key_techs,
        description,
        id,
    },
    showDetails,
    setShowDetails,
}) => {

    return (
        <div>
            <Image
                src={image_path} 
                alt={name} 
                className="cursor-pointer" 
                onClick={() => setShowDetails(id)}
                width="300"
                height="150"
                layout="responsive"
            />
            {/* <img 
                src={image_path} alt={name} 
                className="cursor-pointer" 
                onClick={() => setShowDetails(true)} 
            /> */}
            <p className='my-2 text-center'>{name}</p>

            {showDetails === id && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                <motion.div 
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div variants={fadeInpUp} className="border-4 border-gray-100">
                        <img src={image_path} 
                            alt={name} 
                        />
                    </motion.div>
                    <motion.div variants={fadeInpUp} className="flex justify-center my-4 space-x-3">
                        <a 
                            href={github_url}
                            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"    
                        ><AiFillGithub /><span>Github</span></a>
                        <a 
                            href={deployed_url}
                            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                        ><AiFillProject /><span>Project</span></a>

                    </motion.div>
                </motion.div>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={fadeInpUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                    <motion.h3 variants={fadeInpUp} className="mb-3 font-medium">{description}</motion.h3>
                    <motion.div 
                        variants={fadeInpUp}
                        className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
                    >
                        {
                            key_techs.map(tech =><span key={tech}
                            className="px-2 py-1 bg-gray-200 rounded dark:bg-dark-200"
                            > {tech} </span>)
                        }
                    </motion.div>

                </motion.div>
                <button 
                    className='absolute p-1 bg-gray-200 rounded-full to-3 right-3 focus:outline-none dark:bg-dark-100' 
                    onClick={() => setShowDetails(null)}>
                    <MdClose size={30} />
                </button>
            </div>
            )}
        </div>
    )
}

export default ProjectCard
