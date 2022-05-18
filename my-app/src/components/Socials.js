import React from 'react';
import '../styles/SocialsSection.scss'
export default function Socials() { 

    return ( 
        <section className = "socialSection">
            <span className = "divideLine"></span>
                <h2>Hey! Come Chat With Me!</h2>

            <div className ="app-Footer">
                <div className = "app-Cards">
                    <a href = "https://www.youtube.com/channel/UCC8yLhVL7lThf295DtD4rag">
                    <img src = "/Youtube.png"></img>
                    </a>
                    
                </div>
                <div className = "app-Cards">
                    <a href = "https://twitter.com/slimmsyd">
                    <img src = "/Twitter 1.png"></img>
                    </a>

                </div>
               
            </div>

            <div className ="app-Footer">
                 <div className = "app-Cards">
                    <a href = "https://www.linkedin.com/in/sydney-sanders-dev/">
                    <img src = "/Linkin.png"></img>
                    </a>
                </div>
               
            </div>

            <div className ="app-Footer">
            <div className = "app-Cards">
                    <a href = "https://www.instagram.com/sydcodes/">
                        <img src = "/InstagramLogo.png"></img>
                    </a>
                </div>
             
                <div className = "app-Cards">
                    <img src = "/Phone.png"></img>
                </div>
               
            </div>


        </section>


    )


}