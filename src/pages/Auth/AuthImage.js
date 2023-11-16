import ImageSlider from '../../parts/ImageSlider'
import img1 from '../../assets/img/img-4.webp'
import img2 from '../../assets/img/img-1.webp'
import img3 from '../../assets/img/img-3.webp'


const AuthImage = () => {
    const images = [img1, img2, img3]
    return (
        <ImageSlider count = {images.length}>
            {images.map((s, index) => (
                <img src={s} alt={`img${index}`} key={index} className=' w-64 h-96 md:w-115 md:h-[580px] rounded-md' />
            ))}
        </ImageSlider>
    )
}

export default AuthImage
