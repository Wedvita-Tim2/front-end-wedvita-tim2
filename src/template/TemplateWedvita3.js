import img4 from '../assets/img/template-bg4.png'
import img5 from '../assets/img/template-bg5.png'
import img6 from '../assets/img/template-bg6.png'
import img7 from '../assets/img/img-7.png'
import img8 from '../assets/img/img-8.png'
import img9 from '../assets/img/img-9.png'
import img10 from '../assets/img/img-10.png'
import { useEffect, useState } from 'react'
import { apiBackend } from "../recoils/Api";
import LeafletMap from "../component/LeafletMap";
import FormWish from "../component/FormWish";
import ListWish from "../component/ListWish";
import Button from "../elements/Buttons";



const TemplateWedvita3 = ()=>{
    const tglPernikahan = "27 Maret 2025"
    const inisialPria = "jonathan"
    const inisialWanita = "claudia"
    const namaIbuPria = "Ibu Jors"
    const namaBapaPria = "Bpk. Belle"
    const namaOrtuPria = "Bpk. Jors & Ibu Belle"
    const namaIbuWanita = "Ibu Bryan"
    const namaBapaWanita = "Bpk. Rose"
    const namaOrtuWanita = "Bpk. Bryan & Ibu Rose"
    const alamatGedung = "Jl. Cihampelas No.23 25, Pasir Kaliki"
    const buildingName = "Novotel Bandung"
    const teksKonten4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const imgGallery1 = img4
    const imgGallery2 = img5
    const imgGallery3 = img6
    const imgGallery4 = img7
    const imgGallery5 = img8
    const imgGallery6 = img9
    const imgGallery7 = img10
    const imageUrls = [];
    const kata = "WEDVITA"
    const kata2 = "Lorem Ipsum"
    
    return(
        <>       
            <div>
                {/* ini adalah konten 1 */}
                <div className='grid grid-flow-row auto-rows-max relative h-auto z-10' style={{backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: "1478px", height: "888px"}}>
                <div className='absolute inset-0 bg-dark-brown/10 backdrop-brightness-50 z-0' style={{width: "1478px", height: "888px"}}></div>
                    <img className='absolute inset-0 w-full h-full object-cover z-10' src={img5} alt='Another Image' style={{width: "1478px", height: "888px"}}/>
                    <div className='relative mb-32 mt-8 md:mb-44 md:mt-28' style={{width: "1478px", height: "350px"}}>
                        <p className='text-center text-white text-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-2xl md:pb-16 md:pt-8 tracking-[.5rem] relative z-30 font-monserrat-classic'>WELCOME TO</p>
                        <p className='text-center text-white text-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl md:pb-16 md:pt-8 tracking-[.5rem] relative z-30 font-belleza'>THE WEDDING</p>
                        <p className='text-center text-white text-1xl md:text-2xl absolute top-1/3 left-1/2 transform -translate-x-1/2 md:pt-15 tracking-[0.75rem] md:tracking-[1rem] relative z-30 font-arimo'>{inisialPria.toUpperCase() +' & '+ inisialWanita.toUpperCase()}</p>
                    </div>
                        <div className='relative mt-4 mb-64'>
                    </div>
                </div>
            </div>

                {/* ini adalah konten 2 */}
                <div className='bg-gradient-to-r from-gray-400 to-white' style={{height: "900px"}}>
                <div className='grid grid-cols-1 md:grid-cols-5 relative font-belleza'>
                    <div className='md:col-span-5 pt-72 md:pt-32 relative font-belleza'>
                        <p className='text-black font-bold text-3xl md:text-7xl tracking-widest text-center'>{"J".toUpperCase() + "C".toUpperCase()}</p>
                    </div>
                    <div className='absolute w-15 h-3 bg-black left-0' style={{width: "290px", height: "30px", marginTop: "210px"}}>
                    </div>
                    <div className='md:col-span-2 relative pt-40 pb-12 md:py-32 font-belleza'>
                        <div className='pl-20 md:pl-32 py-8 md:py-4'>
                            <p className='text-black text-5xl md:text-7xl tracking-wide font-belleza md:py-2'>{inisialPria.toUpperCase()}</p>
                            <p className='text-black text-lg md:text-xl py-2'>PUTRA DARI</p>
                            <p className='text-black text-xl md:text-4xl font-arimo md:py-2'>{namaOrtuPria.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className='grid md:col-span-1 place-content-center font-belleza'>
                        <p className='text-[120px] md:text-[120px] text-center font-belleza text-black'>&</p>
                    </div>
                    <div className='md:col-span-2 relative pt-12 pb-40 md:py-32 font-belleza'>

                        <div className='pr-20 md:pr-32 py-8 md:py-4'>
                            <p className='text-black text-5xl md:text-7xl text-right tracking-wide font-belleza md:py-2'>{inisialWanita.toUpperCase()}</p>
                            <p className='text-black text-lg md:text-xl text-right py-2'>PUTRI DARI</p>
                            <p className='text-black text-xl md:text-4xl text-right font-arimo md:py-2'>{namaOrtuWanita.toUpperCase()}</p>
                        </div>
                        <div className='absolute w-15 h-3 bg-black right-0' style={{width: "290px", height: "30px", marginTop: "95px"}}>
                        </div>
                    </div>
                </div>
            </div>

                { /* ini adalah konten 3 */}
                <div className='px-48' style={{height: "800px", background: 'linear-gradient(to right, #000000, #737373)'}}>
                    <div className='grid grid-cols-1 md:grid-cols-3 relative font-belleza'>
                        <div className='md:col-span-5 pt-72 md:pt-32 relative font-belleza'>
                        <p className='text-white text-lg md:text-m tracking-widest text-center'>{inisialPria.toUpperCase() + ' & ' + inisialWanita.toUpperCase()}
                        </p>
                        <div className='grid md:col-span-1 md:row-span-2 flex items-center justify-start mx-4 my-10'>
                            <img className='w-84 h-72 object-cover ml-4' src={img6} alt='Foto Pria dan Wanita' style={{marginTop: "130px"}}/>
                            </div>
                            <div className='md:col-span-2'>
                                 <div className='grid grid-cols-1' style={{marginLeft: "700px", marginTop: "-325px", marginBottom: "200px", height: "160px"}}>
                                     <div className='rounded-lg bg-gradient-to-r from-gray-400 to-white p-4'>
                                     <p className='rounded-lg text-white text-center' style={{ height: "30px", width: "330px", background: '#545454', marginTop: "25px", marginLeft: "15px"}}>
                                        {alamatGedung}
                                     </p>
                                     <p className='rounded-lg text-white text-center' style={{ height: "30px", width: "330px", background: '#545454', margin: "15px"}}>
                                        {buildingName}
                                     </p>
                                    </div>
                                 </div>
                                 <hr className='border-t-2 border-white my-4 mx-auto w-3/4' style={{width: "1476px", marginLeft: "-190px"}}/>
                                 <p className='text-white text-lg md:text-lg tracking-widest text-center font-neuton' style={{marginTop: "35px"}}>{kata}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ini adalah konten 4 */}
                <div className='px-64' style={{height: "900px", background: 'linear-gradient(to right, #a6a6a6, #ffffff)'}}></div>
                <p className='text-black text-lg md:text-7xl tracking-widest text-center font-belleza' style={{marginTop: "-850px"}}>
                    {kata2}
                </p>
                <p className='text-black text-lg md:text-2xl tracking-widest text-center font-arimo' style={{padding: "55px", marginRight: "250px", marginLeft: "250px"}}>
                    {teksKonten4}
                </p>

                {/* ini adalah konten 5 */}
                <div className='px-48' style={{height: "800px", background: 'linear-gradient(to right, #000000, #737373)'}}></div>
                    <p className='text-white font-bold text-5xl md:text-7xl tracking-widest text-center' style={{marginTop: "-740px", marginLeft: "1280px", height: "55px"}}>{"J".toUpperCase() + "C".toUpperCase()}</p>
                    <img className='w-84 h-72 object-cover ml-4' src={img7} alt='Foto Pria dan Wanita' style={{marginTop: "300px", marginLeft: "135px"}}/>
                    <img className='w-84 h-72 object-cover ml-4' src={img8} alt='Foto Pria dan Wanita' style={{marginTop: "-320px", marginLeft: "740px", width: "625px", height: "340px"}}/>
                    <img className='w-84 h-72 object-cover ml-4' src={img9} alt='Foto Pria dan Wanita' style={{marginTop: "-650px", marginLeft: "85px", width: "675px", height: "350px"}}/>
                    <img className='w-84 h-72 object-cover ml-4' src={img10} alt='Foto Pria dan Wanita' style={{marginTop: "-390px", marginLeft: "770px"}}/>

                {/* ini adalah konten 6 */}
        </>

    )
}

export default TemplateWedvita3