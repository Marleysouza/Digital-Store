import left from '../assents/svg/arrow-left.svg';
import right from '../assents/svg/arrow-right.svg';
import React, { useRef, useEffect, useState } from 'react';

const Gallery = ({ slide, showThumbs, width, height, text, link }) => {
    const scrollRef = useRef(0);
    const [cont, setCont] = useState(0);

    const proximaImagem = () => {
        const newCont = cont + scrollRef.current.offsetWidth > scrollRef.current.offsetWidth * (slide.length - 1) ? 0 : cont + scrollRef.current.offsetWidth;
        setCont(newCont);
        scrollRef.current.scrollLeft = newCont;
    };

    const imagemAnterior = () => {
        const newCont = cont - scrollRef.current.offsetWidth < 0 ? scrollRef.current.offsetWidth * (slide.length - 1) : cont - scrollRef.current.offsetWidth;
        setCont(newCont);
        scrollRef.current.scrollLeft = newCont;
    };

    const irParaImagem = (index) => {
        const newCont = index * scrollRef.current.offsetWidth;
        setCont(newCont);
        scrollRef.current.scrollLeft = newCont;
    };

    useEffect(() => {
        const interval = setInterval(proximaImagem, 3000);
        return () => clearInterval(interval);
    }, [cont]);

    return (
        <div id="gallery" style={{ width: width }}>
            <div id='slides-content'>
                <div id="slides" ref={scrollRef}>
                    {slide.map((image, index) => (
                        <div key={index} className="slide">
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
                        <div key={index} className={`thumbnail ${index === cont / scrollRef.current.offsetWidth ? 'active' : ''}`} onClick={() => irParaImagem(index)}>
                            <img src={image.image} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;