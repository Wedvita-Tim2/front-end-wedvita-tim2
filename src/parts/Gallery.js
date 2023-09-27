import React, {useState, useEffect} from "react";
import Button from "../elements/Buttons";
import img1 from '../assets/img/img-1.png'
import img2 from '../assets/img/img-2.png'
import img3 from '../assets/img/img-3.png'
import AuthImage from "../pages/Auth/AuthImage";

const Gallery = () => {
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

    

    const galleryStatic = () => {
        return (
            <div className="grid md: grid-cols-3">
                <div className="flex justfy-center">
                    <img src={img1} alt="" className="scale-75"></img>
                </div>
                <div className="flex justfy-center">
                    <img src={img2} alt="" className="scale-75"></img>
                </div>
                <div className="flex justfy-center ">
                    <img src={img3} alt="" className="scale-75"></img>
                </div>
            </div>
        )
    }

    const galleryDinamic = () => {
        return (
            <div className='flex justify-center'>
                <AuthImage
                    className="w-auto"
                />
            </div>
        )
    }

    return(
        <div className="grid grid-cols-1">
            <p className="mx-auto font-bold text-4xl text-center md:text-7xl">Pilihan Template</p>
            <p className="mx-auto text-center mt-5 md:mt-10">Mudahkan hari spesialmu dengan membuat <br/>undangan sesuai dengan template pilihanmu</p>
            {isSmallScreen? galleryDinamic() : galleryStatic()}
            <div className="flex justify-center">
                <Button isGradient type={'link'} href={''}>Lihat Lebih Banyak</Button>
            </div>
        </div>
    )
}

export default Gallery