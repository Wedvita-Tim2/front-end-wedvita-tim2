import React, { useState, useEffect } from 'react';
import Button from "../elements/Buttons";
import ImageStack from './ImageStack';

const MakeInvitaion = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-32">
            <div className="grid h-[600px]">
                <p className="mx-auto font-bold text-4xl text-center md:text-7xl md:text-left">Buat undangan dengan mudah</p>
                <div className='mt-10'>
                    <Button isGradient type={'link'} href={''}>Lihat Portofolio</Button>
                </div>
                <div className="grid justify-items-center mt-9 md:justify-items-start">
                </div>
                
            </div>
            <div className='mt-0'>
               <ImageStack />
            </div>
        </div>
    )
}


export default MakeInvitaion