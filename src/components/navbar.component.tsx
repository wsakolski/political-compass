import React from 'react'
import styled from 'styled-components'
import { NavBarLink } from './common/links.component'
import { ReactComponent as Logo } from '../assets/explore.svg'

const NavBarContentWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`

const NavBar = () => (
  <NavBarContentWrapper>
    <NavBarLink to="/">
      <Logo />
    </NavBarLink>
    <NavBarLink to="/test">Test</NavBarLink>
    <NavBarLink to="/about">About</NavBarLink>
  </NavBarContentWrapper>
)

export default NavBar
