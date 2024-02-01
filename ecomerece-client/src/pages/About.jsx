import React from 'react'
import HeroSection from '../components/HeroSection'
import { useAppContext } from '../context/productcontext'
import styled from 'styled-components'
const About = () => {

  const {name}=useAppContext();
  // const name="Ankush's Stores"
  return (
    <Wrapper>
      <HeroSection name={name}/>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:95%;
margin:0 auto;
`
export default About