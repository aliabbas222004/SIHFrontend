import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div style={{ textAlign: 'center' }}>
            <img
                src={images[current]}
                alt="item"
                className="img-fluid"
                style={{ width: '300px', borderRadius: '8px' }}
            />
            
        </div>
    );
};

export default ImageCarousel;
