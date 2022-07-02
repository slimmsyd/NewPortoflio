
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Work from '../works';
import "../../styles/worksApp.scss"
import '../../styles/ProjectSection.scss'
const MetaRentals = () => { 


    
    return ( 
        <motion.div
        initial ={{y: 250, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
         className = "titleSection"> 
        <span className = 'empty'></span>
            <div className = "container">
                <Link className ="linkToWork" to ="/works" element = {<Work />}>Works > <span id = "span">E-Commere landing page built with Nextjs</span> </Link>
                <p>Goal was to be a decentralized rental marketplace. Built for chainlink hackathon.</p>
                <div className = "innerContainer">
                    <ul>
                        <li><span className ="description">Github  </span>
                            <a className = "href" href = "https://github.com/slimmsyd/metarentalsfrontend">https://github.com/slimmsyd/metarentalsfrontend</a>
                        </li>
                        <li>
                            <span className = "description">Platforms </span> <p className = "href"> Windows/macOS/Linux/iOS/Android</p>
                        </li>
                        <li>
                            <span className ="description">Stack</span> <p className = "href">Solidity, ReactJs, Hardhat, Ether.js, Rinkeby Testnet</p>
                        </li>
                    </ul>
                
                </div>
                
                <div className = "project">
                        <div className = "project-Card">
                        <img src = "../MetaRentals.png" alt = ""/>
                             <div className = "project-Hover">
                            <a className = "linkTo" href = "https://metarentalsfrontend.vercel.app/"> GO TO </a>
                        </div>
                        </div>
                    </div>
            </div>
        </motion.div>
    )

}
export default MetaRentals;