import { MotionConfig } from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';
import '../styles/Titlesection.scss'
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const TitleSection = ({skill, contact}) => { 
    //check if button is being hovered to get link color to change 
    const [buttonHover, setButtonHover] = useState(false); 

    

    return ( 
        <section className = "titleSection">
            <div className = "img">
                <img src = "/Group.png" alt ="design"></img>
            </div>
            <div className = "description">
                <p>Hi! There</p>
                <h1>I'm Sydney Sanders</h1>
                <h2><span>Front-End</span> Developer</h2>
                <h3>I Like To Keep Things Very Minimal</h3>
                <button onMouseEnter={() => setButtonHover(true)} onMouseLeave = {() =>setButtonHover(false)} className = "explore">
                    <Link className = {`link ${buttonHover ? "linkTransition" : ""}`} to = "/works" >Explore My Work</Link>
                </button>
          
            </div>

        </section>
             
          


  


    )

};

export default TitleSection;