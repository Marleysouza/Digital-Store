import React from 'react';

const Gallery = ({ slide, showThumbs, largura, text, link }) => {
    return (
        <div id="gallery" style={{ width: largura }}>
            <div id="slides">
                {slide.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image.image} />
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
                            <img src={image.image} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;