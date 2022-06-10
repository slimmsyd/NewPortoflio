
import React from 'react';
import { Link } from 'react-router-dom';
import Work from '../works';
import "../../styles/worksApp.scss"
import '../../styles/ProjectSection.scss'
const MetaRentals = () => { 
    return ( 
        <div className = "titleSection"> 
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
                        <img src = "../MetaRentals.png" alt = ""/>
                             <div className = "project-Hover">
                            <a href = "#"> GO TO </a>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )

}
export default MetaRentals;