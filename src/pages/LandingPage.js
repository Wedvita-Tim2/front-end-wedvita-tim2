import React from 'react';
import Hero from '../parts/Hero';
import Gallery from '../parts/Gallery';
import MakeInvitation from '../parts/MakeInvitaion';
import Testimoni from '../parts/Testimoni';
import FrequentlyQuestion from '../parts/FrequentlyQuestion';


const LandingPage = ()=>{
    return(
        <div className=''>
            <Hero/>
            <MakeInvitation/>
            <Gallery/>
            <Testimoni/>
            <FrequentlyQuestion/>
        </div>
    )
}

export default LandingPage