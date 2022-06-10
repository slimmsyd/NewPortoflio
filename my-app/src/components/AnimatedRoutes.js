
import React from 'react';
import { useLocation, Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Work from '../pages/works';

//framer motion libarary 
import {AnimatePresence} from 'framer-motion';
import NftLandingPage from '../pages/components/NftLandingPage';
import MusicApp from '../pages/components/musicApp';
import MetaRentals from '../pages/components/metaRentals';
import RandomGame from '../pages/components/randomGame';
export default function AnimatedRoutes() { 
      //need to access the location for this work 
      //has to be in the router component 
  const location = useLocation(); 
      
    return ( 
        <AnimatePresence>
             <Routes location = {location} key = {location.pathname}>
                <Route path = "/" element = {<LandingPage />}></Route>
                <Route path = "/works" element = {<Work />}> </Route>
                <Route path = "/works/nftlandingpage" element = {<NftLandingPage/>} ></Route>
                <Route path = "/works/musicapp" element = {<MusicApp/>} ></Route>
                <Route path = "/works/randomgame" element = {<RandomGame/>} ></Route>
                <Route path = "/works/metarentals" element = {<MetaRentals/>} ></Route>
            </Routes>

    </AnimatePresence>
       
    )

}