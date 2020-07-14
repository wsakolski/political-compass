import React from 'react'
import styled from 'styled-components'
import { Home } from "./home.component"

const AboutContainer = styled.div`
  font-size: 20px;
`

// const Div = styled.div``

export const About = () => (
  <AboutContainer>
    <Home />
    About
  </AboutContainer>
)
