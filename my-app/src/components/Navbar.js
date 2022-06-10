import React, {useEffect, useRef, useState} from 'react';
import '../styles/Navbar.scss'
import {Link} from 'react-router-dom';
const Navbar = () => { 

    const [navigation, setNavigation] = useState(false);

  
    const scrollSkills = () => { 
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
      
    }
    const scrollContact = () => { 
        window.scrollTo({
            top: 4500,
            behavior: 'smooth'
        })
    }
    const scrollHome = () => { 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    //functions to showNav
    function showNav() {
        setNavigation(true);
        if(navigation) { 
            console.log("Its true")
            setNavigation(false)
            
        }else { 
            console.log("its false now")
        }
        
    }


return ( 
    <>
    

    <nav className = "nav">
        <div>
        <h1> <a href = "https://sydneysanders.hashnode.dev/" >Blog</a></h1>
        </div>
            
        <Link to ="/" > Home</Link>


        <div>
        <Link to = "/works"> Works</Link>

        </div>
    
    </nav>



    <nav onClick={showNav} className = "menuBurger">
        <img src = "/BurgerMenu.png" className ="img" alt ="burgermenu"></img>
    </nav>

    <div className ={`hamburger_Div ${navigation ? "hamburgerDivShown": "" }`}>
        
        <ul className = "navLinks">
           
            <li><a href = "https://twitter.com/slimmsyd">Twitter</a></li>
        </ul>
        <ul className = "navLinks">
            <li><a href = "https://www.linkedin.com/in/sydney-sanders-dev/">LinkedIn</a></li>
        </ul>
        <ul className = "navLinks">
            <li><a href = "https://www.youtube.com/channel/UCC8yLhVL7lThf295DtD4rag">Youtube</a></li>
        </ul>
        <ul className = "navLinks">
            <li><a href = "ttps://sydneysanders.hashnode.dev/">Blog</a></li>
        </ul>


    </div>

    


</>

)
 

};
export default Navbar;