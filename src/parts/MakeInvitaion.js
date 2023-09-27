import React, { useState, useEffect } from 'react';
import Button from "../elements/Buttons";
import AuthImage from '../pages/Auth/AuthImage';
import img1 from "../assets/img/img-1.png";
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png';

const MakeInvitaion = () => {
    return (
        <div className="grid relative md:grid-cols-2 md:mt-32">
            <div>
                <div className="px-4 md:px-10">
                    <p className="mx-auto font-bold text-4xl text-center md:text-7xl md:text-left">Buat undangan dengan mudah</p>
                    <div className="grid justify-items-center mt-9 md:justify-items-start">
                    <Button isGradient type={'link'} href={'/login'}>Lihat Portofolio</Button>
                </div>
            </div>
        </div>
        <img src={img1} alt="img" className="mx-auto md:w-115 md:h-80"></img>
      </div>
    )
  }
  

export default MakeInvitaion