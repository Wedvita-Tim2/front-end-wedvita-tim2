import Button from "../elements/Buttons"

const Hero = () =>{
    return (
        <div className="grid relative md:grid-cols-2 md:mt-12">
            <div className="overflow-hidden w-full h-80 mx-auto mb-2 md:pl-6 md:h-140 md:rounded-br-[244px] contrast-125">
                <img src='/HeroThumbnail.png' alt="logo" className="mx-auto"></img>
            </div>
            <div className="md:ml-6 md:my-auto">
                <p className="mx-auto font-bold text-4xl text-primary-300 text-center md:text-7xl md:text-left">Wedding <span className="text-light-pink block">Invitation</span> Digital</p>
                <p className="mt-7 text-center mx-9 text-lg md:text-left md:text-xl md:ml-0">Platform kami menyediakan solusi modern yang menggabungkan efisiensi digital dengan kemewahan berbagi informasi kepada tamu undangan, menciptakan pengalaman pernikahan yang lebih fleksibel, dan praktis.</p>
                <div className="grid justify-items-center mt-9 md:justify-items-start">
                    <Button isGradient type={'link'} href={'/login'}>Mulai</Button>
                </div>
            </div>

        </div>
    )
}

export default Hero