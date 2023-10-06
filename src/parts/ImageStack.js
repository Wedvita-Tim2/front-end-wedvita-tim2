import img1 from '../assets/img/img-1.png'
import img2 from '../assets/img/img-4.png'
import img3 from '../assets/img/img-3.png'

const ImageStack = () => {
    const images = [img1, img2, img3]
    const scale = ['scale-[0.75]', 'scale-[0.85]', 'scale-[1]']

    return (
        <div className='relative h-96'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`w-48 h-56 md:w-80 ${scale[index]} md:h-96 my-4 mx-auto absolute inset-0 z-${50}`}
                >
                    <img 
                        src={image}
                        alt={image}
                        className={`rounded-md`}
                        style={{marginLeft:-75+index*57}}
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageStack
