import React,{useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../styles/Button'
import Carousel from './Carousel';

const HeroSection = ({name}) => {

  const [more,setMore]=useState(false);
  const handleClick=()=>{
    setMore(!more)
  }

  const carouselImages = [
    './images/hero.jpg',
    './images/herologo.avif',
    './images/logoshop.png'
  ];

  return (
    <Wrapper>
    <div className='container'>
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className="intro-data">
                    Welcome to
             </p>
             <h1>{name}</h1>
            <p>You will feel, world best shoping experience as our always priotity to customer satisficatiion and much more, we will deal with all kind of shoping products, Hope so you enjoyed it {more && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nulla dolore aliquid. Ex, eaque numquam ad iste magni cumque sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, deserunt impedit voluptas aut provident delectus dolorem fugiat reiciendis nulla ab quisquam reprehenderit itaque vitae id. Numquam natus a voluptas tempora?"}
            </p> 
        <Link>
        <Button onClick={handleClick}>{!more ?"Show more" :"Show less"}</Button>
        </Link>
    </div>
    <div className="hero-section-image">
        <figure className='img-style'>
              <Carousel images={carouselImages} />
            {/* <img src="images/herologo.avif" 
            alt="hero image" 
            className='img-style'/> */}
        </figure>
    </div>
    </div>
    </div>
      </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 7rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    // height:7rem;
    // margin-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      // background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;


export default HeroSection