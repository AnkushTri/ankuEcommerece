import React from 'react'
import styled from 'styled-components'

const Home = () => {

  return (
    <Wrapper className='test'>helloo bhai </Wrapper>
  )
}

const Wrapper=styled.div`
 background-color: ${({ theme }) => theme.colors.bg};
 width:20rem;
 aspect-ratio:1;
 border:2px solid grey;
`;

export default Home