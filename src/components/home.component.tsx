import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  background-color: gray;
`

const HomeTitle = styled.h1`
  font-size: 40px;
`

export const Home = () => (
  <HomeContainer>
    <HomeTitle>Political Compass</HomeTitle>
  </HomeContainer>
);
