import React, {useEffect, useRef} from 'react';

import '../styles/ProjectSection.scss'
import {useState } from 'react';


const ProjectSection = () => { 
const [show, setShow] = useState(false);
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


function hoverOver() { 
    console.log(show)
}

    return  ( 
        <div className = "projectSection">
            <span className = "divideLine"></span>
                <h2>Quality <span>Projects</span></h2>
                <a href = "https://github.com/slimmsyd">Click Here To Github</a>
                <div className = "skillInnerDiv">
                
                <div ref = {myRef}  className = {`skillsPortfolio ${slide ? "show" : ``}`}>

                    <div className = "project">
                        <div className = "project-Card">
                            <img src = "./MusicPlayerApp.png" alt = ""/>
                            <div onMouseEnter={hoverOver} className = "project-Hover">
                            <button className ="linkTo"><a href='https://github.com/slimmsyd/Music-Player-App'>Go to</a></button>
                        </div>
                        </div>
                        <h4>Music Player App</h4>
                        <p>ReactJS App built with modern UI</p>
                    </div>
                    <div className = "project">
                        <div className = "project-Card">
                        <img src = "./MintChildishNFT.png" alt = ""/>
                             <div onMouseEnter={hoverOver} className = "project-Hover">
                            <button className ="linkTo"><a href='https://nft-gallery-mint.vercel.app/'>Go to</a></button>
                        </div>
                        </div>
                        <h4>Minting Landing Page</h4>
                        <p>NextJs dApp with featurs of minting your own NFT built with modern UI
                                    </p>
                    </div>
                    <div className = "project">
                        <div className = "project-Card">
                        <img src = "./MetaRentals.png" alt = "https://metarentalsfrontend-e53jqnxvx-slimmsyd.vercel.app/"/>
                        <div onMouseEnter={hoverOver} className = "project-Hover">
                          <button className ="linkTo"><a href='https://github.com/MetaRentals/metaRentals-frontend'>Go to</a></button>
                        </div>
                        </div>
                        <h4>MetaRentals</h4>
                        <p>E-commerce landing page built with Next.js. </p>

                    </div>
                    <div className = "project">
                        <div className = "project-Card">
                        <img src = "./ChainLinkRandomGame.PNG" alt = "ChainLink"/>
                        <div onMouseEnter={hoverOver} className = "project-Hover">
                          <button className ="linkTo"><a href='https://github.com/slimmsyd/RandomgameWinner'>Go to</a></button>
                        </div>
                        </div>
                        <h4>RandomGameLottery</h4>
                        <p>Chainlink VRF random lottery game. Intergrates. Built with solidity code and chainlink</p>

                    </div>

                </div>
            </div>

        </div>

    )

};


export default ProjectSection;



