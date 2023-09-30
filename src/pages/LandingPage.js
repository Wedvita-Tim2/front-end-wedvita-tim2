import React, { useEffect } from 'react';
import Hero from '../parts/Hero';
import Gallery from '../parts/Gallery';
import MakeInvitation from '../parts/MakeInvitaion';
import Testimoni from '../parts/Testimoni';
import FrequentlyQuestion from '../parts/FrequentlyQuestion';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoils/AuthState';


const LandingPage = ()=>{
    const auth = useRecoilValue(authState)

    const navigate = useNavigate()
    useEffect(() => {
        if (auth.isAuthenticated) {
            if(auth.dataUser.role_id === 1){
                navigate('/adminpanel')
            }
        }
      }, []);

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