import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    useEffect(()=>{
        const intervalId = setInterval(nextSlide, 1000);
        return () => clearInterval(intervalId); //cleanup on unmount
    },[])

    return (
        <Wrapper className='carousel-container'>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`}
                className="carousel-image"
                style={{ width: '100%', height: '50vh' }}/>
            <button onClick={prevSlide} className='carousel-button prev'>{"<"}</button>
            <button onClick={nextSlide} className="carousel-button next">{">"}</button>
        </Wrapper>
    );
};

const Wrapper=styled.div`
position:relative;

.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-image {
  transition: transform 0.9s ease-in-out;
//   height:2rem;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ccc;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}
`

export default Carousel