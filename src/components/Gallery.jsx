import React from 'react';
import left from '../assents/svg/arrow-left.svg'
import right from '../assents/svg/arrow-right.svg'

const Gallery = ({ slide, showThumbs, width, height, text, link }) => {
    return (
        <div id="gallery" style={{ width: width }}>
            <div id='slides-content'>
                <div id="slides">
                    {slide.map((image, index) => (
                        <div key={index} className="slide" >
                            <img src={image.image} style={{ height: height }} />
                            {text && (
                                <div>
                                    <h1>{text}</h1>
                                    <button><a href={link}>Comprar</a></button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button id='prev'><img src={left} /></button>
                <button id='next'><img src={right} /></button>
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