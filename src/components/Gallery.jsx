import React from 'react';
import left from '../assents/svg/arrow-left.svg'
import right from '../assents/svg/arrow-right.svg'
import { useState } from 'react';

const Gallery = ({ slide, showThumbs, width, height, text, link }) => {

    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximaImagem = () => {
        setIndiceAtual((indiceAtual + 1) % slide.length);
    };

    const imagemAnterior = () => {
        setIndiceAtual((indiceAtual - 1 + slide.length) % slide.length);
    };

    return (
        <div id="gallery" style={{ width: width }}>
            <div id='slides-content'>
                <div id="slides">
                    {slide.map((image, index) => (
                        <div key={index} className={`slide ${index === indiceAtual ? 'active' : ''}`} >
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
                <button id='prev' onClick={imagemAnterior}><img src={left} /></button>
                <button id='next' onClick={proximaImagem}><img src={right} /></button>
            </div>
            {showThumbs && (
                <div id="thumbnails">
                    {slide.map((image, index) => (
                        <div key={index} className={`thumbnail ${index === indiceAtual ? 'active' : ''}`} onClick={() => setIndiceAtual(index)}>
                            <img src={image.image} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;