import React from 'react';
import Hero from '../parts/Hero';
import Gallery from '../parts/Gallery';
import MakeInvitation from '../parts/MakeInvitaion';


const LandingPage = ()=>{
    return(
        <div className='px-10 md:px-16'>
            <Hero/>
            <MakeInvitation/>
            <Gallery/>
        </div>
    )
}

export default LandingPage