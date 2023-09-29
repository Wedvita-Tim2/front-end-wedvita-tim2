import React from 'react';
import Button from "../elements/Buttons";
import ImageStack from './ImageStack';
import './css/App.css'

const MakeInvitaion = () => {
    return (
        <div className="px-6 py-9 md:px-8 md:pt-12 md:pb-24 bg-gradient my-16 md:my-32">
            <div className="grid grid-flow-row auto-rows-max md:grid-cols-2 md:mt-6">
                <div className='md:align-text-middle md:ml-12'>
                    <p className="mx-auto font-bold text-2xl text-center md:text-5xl md:text-left md:my-auto text-primary-300/80 md:text-primary-300">
                        Buat undangan dengan mudah
                    </p>
                    <ul className='text-primary-200 mt-4 md:text-left'>
                        <li className='flex flex-wrap mt-1 md:mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 stroke-green-500 fill-green-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='ml-1 text-sm md:text-xl md:ml-2'>Cukup memilih template dan mengisi detail undangan</p>

                        </li>
                        <li className='flex flex-wrap mt-1 md:mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 stroke-green-500 fill-green-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='ml-1 text-sm md:text-xl md:ml-2'>Akses selamanya meski tanggal pernikahan Sudah Terlewati</p>

                        </li>
                        <li className='flex flex-wrap mt-1 md:mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 stroke-green-500 fill-green-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='ml-1 text-sm md:text-xl md:ml-2'>Sebarkan undangan kepada siapapun dan dimanapun</p>

                        </li>
                    </ul>

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