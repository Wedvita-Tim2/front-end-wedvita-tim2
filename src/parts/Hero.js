import Button from "../elements/Buttons"

const Hero = () =>{
    return (
        <div className="grid relative md:grid-cols-2 md:mt-32">
            <img src="/HeroThumbnail.png" alt="logo" className="mx-auto w-72 h-64 md:w-115 md:h-96"></img>
            <div>
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