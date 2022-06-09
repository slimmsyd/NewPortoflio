
import { motion } from "framer-motion"
import ProjectSection from "../components/ProjectSection"
import TitleSection from '../components/TitleSection'
export default function Work() { 
    return ( 
        <motion.div 
        inital = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 1}}
        
        >
            <ProjectSection />
        </motion.div>
    )
}