import TitleSection from "../components/TitleSection"
import SkillsSection from "../components/SkillSection";
import MoreSkill from "../components/MoreSkills";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact.tsx";
import Socials from "../components/Socials";
import Navbar from "../components/Navbar";
import React, {useEffect, useRef} from 'react';

const LandingPage = () => { 
    const skill = useRef(null);
    const contact = useRef(null);



    return (
        <>
            <TitleSection />
            <SkillsSection/>
            <MoreSkill />
            <Socials/>
            <Contact />
        </>

    )
}

export default LandingPage; 