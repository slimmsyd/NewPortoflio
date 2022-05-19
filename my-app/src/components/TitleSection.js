import React, {useEffect, useRef} from 'react';
import '../styles/Titlesection.scss'
import Navbar from './Navbar';
const TitleSection = ({skill, contact}) => { 

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
                <button className = "explore">
                    Explore My Work
                </button>
          
            </div>

          


        </section>
  


    )

};

export default TitleSection;