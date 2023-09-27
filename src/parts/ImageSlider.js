import React, { useState, useEffect } from 'react';

const ImageSlider = ({ children: images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
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

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [images.length]);

    const smallScreen = `translateX(-${currentIndex * 130}%)`
    const largeScreen = `translateX(-${currentIndex * 100}%)`

    return (
        <div className="relative w-[360px] h-140 md:w-115 overflow-hidden">
            <div
                className="transition-transform duration-700 ease-in-out"
                style={{
                    transform: `${isSmallScreen?smallScreen:largeScreen}`,
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-115 h-140 flex-shrink-0 scale-75 md:scale-75 lg:scale-85"
                    >
                        {image}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
