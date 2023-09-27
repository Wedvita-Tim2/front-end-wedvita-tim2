import React from 'react';
import Hero from '../parts/Hero';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoils/AuthState';
import Gallery from '../parts/Gallery';
import MakeInvitation from '../parts/MakeInvitaion';


const LandingPage = ()=>{
    const auth = useRecoilValue(authState)
    console.log(auth)
    return(
        <div className='px-10 md: px-16'>
            <Hero/>
            <MakeInvitation/>
            <Gallery/>
        </div>
    )
}

export default LandingPage