import React, {useState, useEffect} from "react";
import Button from "../elements/Buttons";
import img1 from '../assets/img/img-4.png'
import img2 from '../assets/img/img-1.png'
import img3 from '../assets/img/img-3.png'
import ImageSlider from "./ImageSlider";

const Gallery = () => {
    const [isSmallScreen, setSmallScreen] = useState(false)
    const images = [img1, img2, img3]

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
            <div className="flex flex-wrap">
                <div className="w-[400px]">
                    <img src={img1} alt="" className="scale-75 rounded-md"></img>
                </div>
                <div className="">
                    <img src={img2} alt="" className="scale-75 rounded-md"></img>
                </div>
                <div className="">
                    <img src={img3} alt="" className="scale-75 rounded-md"></img>
                </div>
            </div>
        )
    }

    const galleryDinamic = () => {
        return (
            <div className='flex justify-center'>
                <ImageSlider count = {images.length}>
                    {images.map((s, index) => (
                        <img src={s} alt={`img${index}`} className="ml-11 w-64 h-96" key={index} />
                    ))}
                </ImageSlider>
            </div>
        )
    }

    return(
        <div className="grid grid-cols-1 justify-items-center">
            <p className="mx-auto font-bold text-4xl text-primary-300 text-center md:text-6xl">Pilihan Template</p>
            <p className="mx-auto text-center md:text-xl w-64 md:w-115 text-primary-300 mt-5 md:mt-10">Mudahkan hari spesialmu dengan membuat <br/>undangan sesuai dengan template pilihanmu</p>
            {isSmallScreen? galleryDinamic() : galleryStatic()}
            <Button isGradient type={'link'} href={'/template'}>Lihat Lebih Banyak</Button>
        </div>
    )
}

export default Gallery