import React, {useEffect, useRef} from 'react';
import '../styles/SkillSection.scss'

const MoreSkill = () => { 
    return (

        <section className = "skillSection">
            <span className = "divideLine"></span>
                <h2>More Skills</h2>
        
            <div className = "outerLayer">
                
                <div className = "innerSkills">
                    <div className = "skills">
                        <p>HTML</p>
                    </div>
                    <div className = "skills">
                        <p>NextJs</p>
                    </div>
                    <div className = "skills">
                        <p>CSS</p>
                    </div>

                </div>
                
                <div className = "innerSkills">
                    <div className = "skills">
                        <p>SCSS</p>
                    </div>
                    <div className = "skills">
                        <p>Python</p>
                    </div>
                    <div className = "skills">
                        <p>Javascript</p>
                    </div>

                </div>
                
                <div className = "innerSkills">
                    <div className = "skills">
                        <p>Tailwindcss</p>
                    </div>
                    <div className = "skills">
                        <p>MongoDB</p>
                    </div>
                    <div className = "skills">
                        <p>GraphQl</p>
                    </div>

                </div>

            </div>


    </section>


    )
   
};

export default MoreSkill;