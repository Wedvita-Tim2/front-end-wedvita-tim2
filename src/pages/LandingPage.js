import React from 'react';
import Button from '../elements/Buttons';

const LandingPage = ()=>{
    return(
        <>
            <h1 className='mb-2'>Ini Landing Page</h1>
            <Button type={'link'} href={'/login'} isPrimary>Login</Button>
        </>
    )
}

export default LandingPage