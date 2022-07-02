
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Work from '../works';
import '../../styles/worksApp.scss'
import '../../styles/ProjectSection.scss'
const CultureEDU = () => { 
    return ( 
        <motion.div
        initial ={{y: 250, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        className = "titleSection"> 
        <span className = 'empty'></span>
            <div className = "container">
                <Link className ="linkToWork" to ="/works" element = {<Work />}>Works > <span id = "span">Culture University</span> </Link>
                <p>Educational website designed for educating users on the blockchain{"(work in progress)"}.</p>
                <div className = "innerContainer">
                    <ul>
                        <li><span className ="description">Github  </span>
                            <a className = "href" href = "https://github.com/slimmsyd/CultureUni">https://github.com/slimmsyd/CultureUni</a>
                        </li>
                        <li>
                            <span className = "description">Platforms </span> <p className = "href"> Windows/macOS/Linux/iOS/Android</p>
                        </li>
                        <li>
                            <span className ="description">Stack</span> <p className = "href">Javascript, ReactJs, CSS</p>
                        </li>
                    </ul>
                
                </div>
                
                <div className = "project">
                        <div className = "project-Card">
                        <img src = "../CultureEDU.png" alt = ""/>
                             <div className = "project-Hover">
                            <a className='linkTo' href = "https://culture-uni.vercel.app/"> GO TO </a>
                        </div>
                        </div>
                    </div>
            </div>
        </motion.div>
    )

}
export default CultureEDU;