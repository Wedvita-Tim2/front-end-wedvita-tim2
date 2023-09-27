import img1 from '../assets/img/img-1.png'
import img2 from '../assets/img/img-2.png'
import img3 from '../assets/img/img-3.png'

const images = [img1, img2, img3]

const ImageStack = () => {
    

    return (
        <div className="flex justify-center">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute ml-${8 * index} scale-75 md:scale-100`}
                ><img src={image}></img></div>
            ))}
        </div>
    )
}

export default ImageStack