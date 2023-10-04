import img1 from '../assets/img/template-bg1.jpg'
import img2 from '../assets/img/template-bg2.jpg'
import img3 from '../assets/img/template-bg3.png'
import Button from '../elements/Buttons/index'


const TemplateWedvita1 = () => {
    const pria = "Sodiq"
    const wanita = "Sarah"
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
            <div className='grid grid-flow-row auto-rows-max relative h-auto z-10' style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <div className='absolute inset-0 bg-dark-brown/10 backdrop-brightness-50 z-0'></div>
                <p className='text-center text-white text-xl pb-16 pt-8 tracking-[.5rem] relative z-30'>Wedding Invitation</p>
                <div className='relative mb-44 mt-28'>
                    <p className='left-1/2 -translate-x-1/2 text-9xl text-white text-center absolute'>{inisialPria}</p>
                    <p className='left-1/2 -translate-x-1/2 ml-4 text-9xl top-10 text-white text-center absolute'>{inisialWanita}</p>
                </div>
                <p className='text-center text-white text-7xl mt-16 tracking-[1rem] relative z-30 font-kaushan'>{pria.toUpperCase() +' & '+ wanita.toUpperCase()}</p>
                <div className='relative mt-4 mb-64'>
                    <span className='bg-white w-80 h-8 absolute inset-0 left-1/2 -translate-x-1/2 z-20'></span>
                    <p className={`relative text-2xl text-center z-30 text-dark-brown tracking-[.25rem]`}>{tglPernikahan}</p>
                </div>
            </div>

            {/* ini adalah konten-2 */}

            <div className='grid grid-cols-6'>
                <div className='col-span-4 relative'>
                    <div className='relative mt-16 mb-64 font-kaushan'>
                        <p className={`left-1/2 -translate-x-1/2 text-9xl text-dark-brown text-center absolute`}>{inisialPria}</p>
                        <p className={`left-1/2 -translate-x-1/2 ml-4 text-9xl top-10 text-dark-brown text-center absolute`}>{inisialWanita}</p>
                    </div>
                    <p className='text-center text-4xl mt-16 tracking-[.5rem] text-dark-brown font-kaushan'>Lorem Ipsum</p>
                    <p className='text-center text-xl mt-8 mx-44 mb-16 text-dark-brown'>{teksKonten2}</p>
                    <hr className='mx-16' style={{borderBottom: '2px solid #5A4739'}}/>
                    <p className={`text-center text-dark-brown text-xl my-4 tracking-widest font-kaushan`}>{pria.toUpperCase() +' & '+ wanita.toUpperCase()}</p>
                </div>
                <div className='col-span-2' style={{backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                </div>
            </div>

            {/* ini adalah konten-3 */}

            <div className='bg-gradient-to-r from-dark-brown to-light-brown'>
                <div className='grid sm:grid-cols-5 '>
                    <div className='sm: col-span-6 pt-32 relative font-kaushan'>
                        <p className='text-white text-xl tracking-widest text-center'>{pria.toUpperCase() + " & " + wanita.toUpperCase()}</p>
                        <p className={`left-[37vw] text-8xl top-[4rem] text-white absolute inset-y-0`}>{inisialPria}</p>
                        <p className={`left-[38vw] text-8xl top-[6rem] text-white absolute inset-y-0`}>{inisialWanita}</p>
                    </div>
                    <div className='sm:col-span-2 relative sm:py-32 font-kaushan'>
                        <hr className='sm:mx-28' style={{borderBottom: '2px white'}}/>
                        <div className='pl-32'>
                            <p className='text-white text-7xl tracking-wide font-light sm:py-2 sm:pt-4'>{pria.toUpperCase()} S.T</p>
                            <p className='text-white text-xl py-2'>PUTRA DARI</p>
                            <p className='text-white text-2xl font-semibold pb-8'>{namaOrtuPria.toUpperCase()}</p>
                        </div>
                        <hr className='sm:mx-28 sm:py-4' style={{borderBottom: '2px white'}}/>
                    </div>
                    <div className='sm:col-span-1 sm:py-20 font-kaushan'>
                        <p className='text-[146px] text-center text-white'>&</p>
                    </div>
                    <div className='sm:col-span-2 relative sm:py-32 font-kaushan'>
                        <hr className='sm:mx-28' style={{borderBottom: '2px white'}}/>
                        <div className='pr-32'>
                            <p className='text-white text-7xl text-right tracking-wide font-light sm:py-2 sm:pt-4'>{wanita.toUpperCase()} S.T</p>
                            <p className='text-white text-xl text-right py-2'>PUTRI DARI</p>
                            <p className='text-white text-2xl text-right font-semibold pb-8'>{namaOrtuWanita.toUpperCase()}</p>
                        </div>
                        <hr className='sm:mx-28 sm:py-4' style={{borderBottom: '2px white'}}/>
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