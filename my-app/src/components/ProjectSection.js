import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';


import '../styles/ProjectSection.scss'
import NftLandingPage from '../pages/components/NftLandingPage';

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
                <h2>Quality <span>Projects</span></h2>
                <a href = "https://github.com/slimmsyd">Click Here To Github</a>
                <div className = "skillInnerDiv">
                
                <div ref = {myRef}  className = {`skillsPortfolio ${slide ? "show" : ``}`}>

                    <div className = "project">
                        <div className = "project-Card">
                            <img src = "./MusicPlayerApp.png" alt = ""/>
                            <div onMouseEnter={hoverOver} className = "project-Hover">
                            <Link className ="linkTo" to ="/works/musicapp">Go To</Link>
                        </div>
                        </div>
                        <h4>Music Player App</h4>
                        <p>ReactJS App built with modern UI</p>
                    </div>
                    <div className = "project">
                        <div className = "project-Card">
                        <img src = "./MintChildishNFT.png" alt = ""/>
                             <div onMouseEnter={hoverOver} className = "project-Hover">
                            <Link className = "linkTo" to ="/works/nftlandingpage" element = {NftLandingPage}> Go To </Link>
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
                          <Link className ="linkTo" to = "/works/metarentals" >Go to</Link>
                        </div>
                        </div>
                        <h4>MetaRentals</h4>
                        <p>E-commerce landing page built with Next.js. </p>

                    </div>
                    <div className = "project">
                        <div className = "project-Card">
                        <img src = "./ChainLinkRandomGame.PNG" alt = "ChainLink"/>
                        <div onMouseEnter={hoverOver} className = "project-Hover">
                          <Link className ="linkTo" to ="/works/randomgame">Go To</Link>
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



