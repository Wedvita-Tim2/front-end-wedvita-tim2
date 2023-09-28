import React from 'react';
import Button from "../elements/Buttons";
import ImageStack from './ImageStack';
import './css/App.css'

const MakeInvitaion = () => {
    return (
        <div className="px-6 py-9 md:px-8 md:pt-12 md:pb-24 bg-gradient my-16 md:my-32">
            <div className="grid grid-flow-row auto-rows-max md:grid-cols-2 md:mt-6">
                <div className='md:align-text-middle'>
                    <p className="mx-auto font-bold text-2xl text-center md:text-5xl md:ml-12 md:text-left md:my-auto text-primary-300/80 md:text-primary-300">
                        Buat undangan dengan mudah
                    </p>
                </div>

                <div>
                    <ImageStack />
                </div>

                <div className='grid justify-items-center md:justify-items-start md:ml-12 md:order-start'>
                    <Button isGradient type={'link'} href={''}>Lihat Portofolio</Button>
                </div>
            </div>
        </div>

    )
}


export default MakeInvitaion