import React from 'react';
import Hero from '../parts/Hero';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoils/AuthState';

const LandingPage = ()=>{
    const auth = useRecoilValue(authState)
    console.log(auth)
    return(
        <div className=''>
            <Hero/>
        </div>
    )
}

export default LandingPage