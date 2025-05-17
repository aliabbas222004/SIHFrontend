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
            <div
                style={{
                    width: '300px',
                    maxWidth: '500px',
                    aspectRatio: '4 / 3',
                    margin: '0 auto',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    key={images[current]} // <-- Important: force re-render
                    src={images[current]}
                    alt="item"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block'
                    }}
                />
            </div>
        </div>
    );
};

export default ImageCarousel;
