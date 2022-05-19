import React, {useEffect, useRef} from 'react';
import '../styles/SkillSection.scss';
import { useState} from 'react';


const SkillsSection = ({skill}) =>  { 
    const myRef = useRef();
    const [slide, setSlide] = useState("");
    console.log("setSlide", slide); 

    useEffect(()=> { 
        const observer = new IntersectionObserver((entries) => { 
          //This will be the function fired 
          const entry = entries[0]
          setSlide(entry.isIntersecting)
          //Tell the element what element to observer
  
        })
        observer.observe(myRef.current);
        
        
      },[])

    return ( 
        <section className = "skillSection">
            <span className = "divideLine"></span>
            <h2>What I Do</h2>
            <div className = "skillInnerDiv">
                
                <div ref = {myRef} className = {`skillsPortfolio ${slide ? "show" : ``}`}>

                    <div ref = {skill} className = "cards">
                        <div className = "card">
                        <h3>ReactJs</h3>
                        </div>
                        <p>Compentent when designing and implementing user-facing features fore websites and applications using React.js</p>
                    </div>
                    <div className = "cards">
                        <div className = "card">
                            <h3>Web <span>Designer</span></h3>
                        </div>
                        <p>I am a web desinger with a passion for building beautiful and functional web applications.
                                    </p>
                    </div>
                    <div className = "cards">
                        <div className = "card">
                        <h3>Front-End</h3>
                        </div>

                        <p>Love to juggle through code and structure UI which can give user a good experience while surfing. </p>

                    </div>

                </div>
            </div>

        </section>
    )

};

export default SkillsSection;