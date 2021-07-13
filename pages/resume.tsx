import Bar from "../components/Bar"
import { languages, tools } from "../data"
import {motion} from "framer-motion"
import { fadeInpUp, routeAnimation } from "../animations"

const resume = () => {

    return (
        <motion.div 
            className="px-6 py-2"
            variants={routeAnimation} 
            initial="initial" 
            animate="animate"
            exit="exit"
        >
            {/* // Education & exp */}

            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInpUp} initial='initial' animate='animate'>
                    <h5 className="my-3 font-bold type-2xl">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Degree 1st year</h5>
                        <p className="font-semibold">GOVERNMENT MUJIB COLLEGE(2019-2024)</p>
                        <p className="my-3">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    </div>
                </motion.div>
                <div>
                    <h5 className="my-3 font-bold type-2xl">Education</h5>
                    <motion.div variants={fadeInpUp} initial='initial' animate='animate'>
                        <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                        <p className="font-semibold">TCS(2019-2024)</p>
                        <p className="my-3">I don't know why I am doing this job.</p>
                        <br />
                        <h5 className="my-3 text-2xl font-bold">LANGUAGES</h5>
                        <p className="my-3">Bangla (Native), English (Fluent).</p>
                    </motion.div>
                </div>
            </div>

            {/* Language & tool */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(language=> <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
                
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
                    <div className="my-2">
                        {
                            tools.map(tool=> <Bar data={tool} key={tool.name} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
