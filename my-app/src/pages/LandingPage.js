import TitleSection from "../components/TitleSection"
import Navbar from "../components/Navbar";
import SkillsSection from "../components/SkillSection";
import MoreSkill from "../components/MoreSkills";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact.tsx";
import Socials from "../components/Socials";
const LandingPage = () => { 
    return (
        <>
            <TitleSection />
            <SkillsSection />
            <MoreSkill />
            <ProjectSection />
            <Socials />
            <Contact />
        </>

    )
}

export default LandingPage; 