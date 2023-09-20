import React, { useState, useEffect } from 'react';

const ImageSlider = ({ children: images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [images.length]);

    return (
        <div className="relative w-115 h-140 overflow-hidden">
            <div
                className="transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-115 h-140 flex-shrink-0"
                    >
                        {image}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
