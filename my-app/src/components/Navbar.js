import React, {useEffect, useRef} from 'react';
import '../styles/Navbar.scss'
const Navbar = () => { 
  
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

return ( 
    <>
    

    <nav className = "nav">
    <div>
     <h1 onClick={scrollSkills} > Skills</h1>
    </div>
    <div>
    <h1 onClick={scrollHome}> Home</h1>

    </div>

    <div>
    <h1 onClick={scrollContact} > Contact</h1>

    </div>
</nav>


</>

)
 

};
export default Navbar;