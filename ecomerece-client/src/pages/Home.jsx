import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import FeatureProduct from '../components/FeatureProduct'
import styled from 'styled-components'
const Home = () => {
  const name="Ankush's Shope"

  return (
    <Wrapper>
      <HeroSection name={name}/>
      <FeatureProduct/>
      <Services/>
      <Trusted/>
     </Wrapper>
  )
}

const Wrapper=styled.div`
width:95%;
margin:0 auto;
`

export default Home