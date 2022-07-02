
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Work from '../works';
import '../../styles/worksApp.scss'
import '../../styles/ProjectSection.scss'
const BalataBabies = () => { 
    return ( 
        <motion.div
        initial ={{y: 250, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        className = "titleSection"> 
        <span className = 'empty'></span>
            <div className = "container">
                <Link className ="linkToWork" to ="/works" element = {<Work />}>Works > <span id = "span">BalataBabies Web App</span> </Link>
                <p>NFT minting site designed and developed for a client{"(work in progress)"}.</p>
                <div className = "innerContainer">
                    <ul>
                        <li><span className ="description">Github  </span>
                            <a className = "href" href = "https://github.com/slimmsyd/BalataBabies-Landing-Page">https://github.com/slimmsyd/BalataBabies-Landing-Page</a>
                        </li>
                        <li>
                            <span className = "description">Platforms </span> <p className = "href"> Windows/macOS/Linux/iOS/Android</p>
                        </li>
                        <li>
                            <span className ="description">Stack</span> <p className = "href">Javascript, ReactJs, CSS, Solidity, EtherJs</p>
                        </li>
                    </ul>
                
                </div>
                
                <div className = "project">
                        <div className = "project-Card">
                        <img src = "../BalataBabies.png" alt = ""/>
                             <div className = "project-Hover">
                            <a className='linkTo' href = "https://music-player-app-pi.vercel.app/"> GO TO </a>
                        </div>
                        </div>
                    </div>
            </div>
        </motion.div>
    )

}
export default BalataBabies;