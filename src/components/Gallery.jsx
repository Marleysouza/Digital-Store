import React from 'react';

const Gallery = ({ slide, showThumbs, text, link }) => {
    return (
        <div id="gallery">
            <div id="slides">
                {slide.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image.src} />
                        {text && (
                            <div>
                                <h1>{text}</h1>
                                <button><a href={link}>Comprar</a></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showThumbs && (
                <div id="thumbnails">
                    {slide.map((image, index) => (
                        <div key={index} className="thumbnail">
                            <img src={image.src} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;