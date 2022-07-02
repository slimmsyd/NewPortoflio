
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Work from '../works';
import '../../styles/worksApp.scss'
import '../../styles/ProjectSection.scss'
const MusicApp = () => { 
    return ( 
        <motion.div
        initial ={{y: 250, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        className = "titleSection"> 
        <span className = 'empty'></span>
            <div className = "container">
                <Link className ="linkToWork" to ="/works" element = {<Work />}>Works > <span id = "span">Minting NFT Landing Page</span> </Link>
                <p>Users are able to shift from a selction of lofi beats for studious purposes. Built in beautiful UI design.</p>
                <div className = "innerContainer">
                    <ul>
                        <li><span className ="description">Github  </span>
                            <a className = "href" href = "https://github.com/slimmsyd/Music-Player-App">https://github.com/slimmsyd/Music-Player-App</a>
                        </li>
                        <li>
                            <span className = "description">Platforms </span> <p className = "href"> Windows/macOS/Linux/iOS/Android</p>
                        </li>
                        <li>
                            <span className ="description">Stack</span> <p className = "href">Javascript, ReactJs, CSS, HTML</p>
                        </li>
                    </ul>
                
                </div>
                
                <div className = "project">
                        <div className = "project-Card">
                        <img src = "../MusicPlayerApp.png" alt = ""/>
                             <div className = "project-Hover">
                            <a className='linkTo' href = "https://music-player-app-pi.vercel.app/"> GO TO </a>
                        </div>
                        </div>
                    </div>
            </div>
        </motion.div>
    )

}
export default MusicApp;