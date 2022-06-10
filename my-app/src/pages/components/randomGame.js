
import React from 'react';
import { Link } from 'react-router-dom';
import { motion  } from 'framer-motion';
import Work from '../works';
import "../../styles/worksApp.scss"
import '../../styles/ProjectSection.scss'
const RandomGame = () => { 
    return ( 
        <motion.div
        initial ={{y: 250, opacity: 0}}
        animate = {{y: 0, opacity: 1}}
        className = "titleSection"> 
        <span className = 'empty'></span>
            <div className = "container">
                <Link className ="linkToWork" to ="/works" element = {<Work />}>Works > <span id = "span">Minting NFT Landing Page</span> </Link>
                <p>A minting NFT landing page. Allows users to mint 1/1 NFTS.</p>
                <div className = "innerContainer">
                    <ul>
                        <li><span className ="description">Github  </span>
                            <a className = "href" href = "https://github.com/slimmsyd/NFT-Gallery-Mint">https://github.com/slimmsyd/NFT-Gallery-Mint</a>
                        </li>
                        <li>
                            <span className = "description">Platforms </span> <p className = "href"> Windows/macOS/Linux/iOS/Android</p>
                        </li>
                        <li>
                            <span className ="description">Stack</span> <p className = "href">Solidity, ReactJs, ScrollMagic, Javascript, CSS</p>
                        </li>
                    </ul>
                
                </div>
                
                <div className = "project">
                        <div className = "project-Card">
                        <img src = "../ChainLinkRandomGame.png" alt = ""/>
                             <div className = "project-Hover">
                            <a className='linkTo' href = "#"> GO TO </a>
                        </div>
                        </div>
                    </div>
            </div>
        </motion.div>
    )

}
export default RandomGame;