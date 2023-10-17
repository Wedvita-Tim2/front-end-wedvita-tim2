import img1 from '../assets/img/template-bg1.jpg'
import img2 from '../assets/img/template-bg2.jpg'
import img3 from '../assets/img/template-bg3.png'
import Button from '../elements/Buttons/index'
import { useEffect, useState } from 'react'


const TemplateWedvita1 = () => {
    const [isSmallScreen, setSmallScreen] = useState(false)
    useEffect(
        () => {
            const changeScreenContent =  () => {
                setSmallScreen(window.innerWidth < 768)
            }
            changeScreenContent()

            window.addEventListener('resize', changeScreenContent)

            return() => {
                window.removeEventListener('resize', changeScreenContent)
            }
        },[]
    )
    
    const smallScreen = `url(${img2})`
    const largeScreen = `url(${img1})`

    const pria = "Stefen"
    const wanita = "Stefany"
    const hariPernikahan = "Sabtu"
    const tglPernikahan = "24 September 2023"
    const inisialPria = pria[0]
    const inisialWanita = wanita[0]
    const namaOrtuPria = "Bpk. Jas & Ibu Jus"
    const namaOrtuWanita = "Bpk. Ale & Ibu Ale"
    const alamatGedung = "Jl. Politeknik Negeri Bandung, kab. Bandung Barat, Jawa Barat, Indonesia"
    const teksKonten4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const teksKonten2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return(
        <div>
            {/* ini adalah konten 1 */}
            <div className='grid grid-flow-row auto-rows-max relative h-auto z-10' style={{backgroundImage: isSmallScreen?smallScreen:largeScreen, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <div className='absolute inset-0 bg-dark-brown/10 backdrop-brightness-50 z-0'></div>
                <p className='text-center text-white text-lg pt-60 md:text-xl md:pb-16 md:pt-8 tracking-[.5rem] relative z-30'>Wedding Invitation</p>
                <div className='relative mb-32 mt-8 md:mb-44 md:mt-28'>
                    <p className='left-1/2 -translate-x-1/2 text-7xl md:text-9xl text-white text-center absolute font-kaushan'>{inisialPria}</p>
                    <p className='left-1/2 -translate-x-1/2 text-7xl top-[2vh] ml-2 md:ml-4 md:text-9xl md:top-10 text-white text-center absolute font-kaushan'>{inisialWanita}</p>
                </div>
                <p className='text-center text-white text-3xl md:text-7xl md:pt-20 tracking-[0.75rem] md:tracking-[1rem] relative z-30 font-kaushan'>{pria.toUpperCase() +' & '+ wanita.toUpperCase()}</p>
                <div className='relative mt-4 mb-64'>
                    <span className='bg-white w-80 md:w-115 md:h-8 absolute inset-0 left-1/2 -translate-x-1/2 z-20'></span>
                    <p className={`relative text-lg md:text-2xl text-center z-30 text-dark-brown tracking-[.25rem]`}>{tglPernikahan.toUpperCase()}</p>
                </div>
            </div>

            {/* ini adalah konten-2 */}

            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='md:col-span-4 relative'>
                    <div className='relative mt-10 mb-40 md:mt-16 md:mb-64 font-kaushan'>
                        <p className={`left-1/2 -translate-x-1/2 text-7xl md:text-9xl text-dark-brown text-center absolute`}>{inisialPria}</p>
                        <p className={`left-1/2 -translate-x-1/2 text-7xl top-[2vh] ml-2 md:ml-4 md:text-9xl md:top-10 text-dark-brown text-center absolute`}>{inisialWanita}</p>
                    </div>
                    <p className='text-center text-4xl md:mt-16 tracking-[1rem] md:tracking-[.5rem] text-dark-brown font-kaushan'>Lorem Ipsum</p>
                    <p className='text-center text-xl py-12 md:py-8 px-24 md:px-40 pb-20 md:pb-8 text-dark-brown'>{teksKonten2}</p>
                    <hr className='md:mx-16' style={{borderBottom: '2px solid #5A4739'}}/>
                    <p className={`text-center text-dark-brown text-xl my-4 tracking-widest font-kaushan`}>{pria.toUpperCase() +' & '+ wanita.toUpperCase()}</p>
                </div>
                <div className='h-[75vh] md:col-span-2 md:h-auto rounded-lg' style={{backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                </div>
            </div>

            {/* ini adalah konten-3 */}

            <div className='bg-gradient-to-r from-dark-brown to-light-brown'>
                <div className='grid grid-cols-1 md:grid-cols-5 relative font-kaushan'>
                    <p className={`left-[43vw] md:left-[35vw] text-8xl top-[8rem] md:top-[4rem] text-white absolute inset-y-0`}>{inisialPria}</p>
                    <p className={`left-[45vw] md:left-[36vw] text-8xl top-[10rem] md:top-[6rem] text-white absolute inset-y-0`}>{inisialWanita}</p>
                    <div className='md:col-span-5 pt-72 md:pt-32 relative font-kaushan'>
                        <p className='text-white text-xl tracking-widest text-center'>{pria.toUpperCase() + " & " + wanita.toUpperCase()}</p>
                    </div>
                    <div className='md:col-span-2 relative pt-40 pb-12 md:py-32 font-kaushan'>
                        <hr className='ml-20 mr-80 md:mx-28' style={{borderBottom: '2px white'}}/>
                        <div className='pl-20 md:pl-32 py-8 md:py-4'>
                            <p className='text-white text-5xl md:text-7xl tracking-wide font-light md:py-2'>{pria.toUpperCase()} S.T</p>
                            <p className='text-white text-lg md:text-xl py-2'>PUTRA DARI</p>
                            <p className='text-white text-xl md:text-2xl font-semibold md:py-2'>{namaOrtuPria.toUpperCase()}</p>
                        </div>
                        <hr className='ml-20 mr-80 md:mx-28 md:py-8' style={{borderBottom: '2px white'}}/>
                    </div>
                    <div className='grid md:col-span-1 place-content-center font-kaushan'>
                        <p className='text-[120px] md:text-[180px] text-center text-white'>&</p>
                    </div>
                    <div className='md:col-span-2 relative pt-12 pb-40 md:py-32 font-kaushan'>
                        <hr className='ml-80 mr-20 md:mx-28' style={{borderBottom: '2px white'}}/>
                        <div className='pr-20 md:pr-32 py-8 md:py-4'>
                            <p className='text-white text-5xl md:text-7xl text-right tracking-wide font-light md:py-2'>{wanita.toUpperCase()} S.T</p>
                            <p className='text-white text-lg md:text-xl text-right py-2'>PUTRI DARI</p>
                            <p className='text-white text-xl md:text-2xl text-right font-semibold md:py-2'>{namaOrtuWanita.toUpperCase()}</p>
                        </div>
                        <hr className='ml-80 mr-20 md:mx-28 md:py-8' style={{borderBottom: '2px white'}}/>
                    </div>
                </div>
                <hr className='' style={{borderBottom: '2px white'}}/>
                <p className='text-lg text-white text-center tracking-[1rem] py-4 font-kaushan'>WEDVITA</p>
            </div>
            
            {/* ini adalah konten-4 */}
            <div className='grid grid-cols-6'>
                <div className='col-span-4' style={{backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='col-span-2'>
                    <div className='relative font-kaushan'>
                    <p className={`left-[12rem] text-8xl top-[4rem] text-dark-brown absolute inset-y-0`}>{inisialPria}</p>
                    <p className={`left-[13rem] text-8xl top-[6rem] text-dark-brown absolute inset-y-0`}>{inisialWanita}</p>
                    </div>
                    <p className='text-center text-dark-brown pt-56 text-2xl tracking-[.25rem] font-kaushan'>MARRIAGE CONTRACT</p>
                    <hr className='mx-32' style={{borderBottom: '2px solid #5A4739'}}/>
                    <div className='my-8 mx-14 bg-dark-brown'>
                        <p className='text-white text-center text-xl py-2'>{hariPernikahan + ", " + tglPernikahan}</p>
                        <p className='text-white text-center text-xl py-2'>9.00AM - 5.00PM</p>
                        <p className='text-white text-center text-xl px-8 py-2'>{alamatGedung}</p>
                        <div className='text-center py-4 pb-8'>
                            <Button isPrimary type={'link'} href={''}>LIHAT LOKASI </Button>
                        </div>
                    </div>
                    <p className='text-center text-dark-brown text-light text-md px-24 py-4 pb-16 font-kaushan'>
                        {teksKonten4} 
                    </p>
                </div>
            </div>

            {/* ini adalah konten-5 */}
            <div className='bg-gradient-to-r from-dark-brown to-light-brown'>
                <p className='text-white text-center text-[200px] pt-16 leading-[10rem] font-kaushan'>"</p>
                <p className='text-white text-center text-6xl tracking-[.5rem] font-kaushan'>LOREM IPSUM</p>
                <p className='text-white text-center text-lg pt-8 px-32 pb-36'>{teksKonten2}</p>
                <p className={`text-center text-white text-xl my-4 tracking-[.75rem] pb-32 font-kaushan`}>{pria.toUpperCase() +'  &  '+ wanita.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default TemplateWedvita1