import React from 'react';
import Hero from '../parts/Hero';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoils/AuthState';
import Gallery from '../parts/Gallery';



const LandingPage = ()=>{
    const auth = useRecoilValue(authState)
    console.log(auth)
    return(
        <div className=''>
            <Hero/>
            <Gallery/>
        </div>
    )
}

export default LandingPage