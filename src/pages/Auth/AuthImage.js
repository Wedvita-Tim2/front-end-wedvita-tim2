import ImageSlider from '../../parts/ImageSlider'
import img1 from '../../assets/img/img-1.png'
import img2 from '../../assets/img/img-2.png'
import img3 from '../../assets/img/img-3.png'


const AuthImage = () => {
    const images = [img1, img2, img3]
    return (
        <ImageSlider count = {images.length}>
            {images.map((s, index) => (
                <img src={s} alt={`img${index}`} key={index} className=' w-72 h-96 md:w-115 md:h-140' />
            ))}
        </ImageSlider>
    )
}

export default AuthImage
