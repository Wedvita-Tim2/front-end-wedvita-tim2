import img1 from '../assets/img/img-1.png'
import img2 from '../assets/img/img-2.png'
import img3 from '../assets/img/img-3.png'

const ImageStack = () => {
    const images = [img1, img2, img3]


    return (
        <div className='relative h-96'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`w-56 h-64 md:w-80 md:h-96 my-4 mx-auto absolute inset-0 z-${40 - index*10}`}
                >
                    <img 
                        src={image}
                        alt={image}
                        style={{marginLeft:-35+index*35,}}
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageStack
