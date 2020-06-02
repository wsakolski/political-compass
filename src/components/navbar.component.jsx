import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/explore.svg'

const Header = styled.header`
  background-color: #282c34;
  height: 80px;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &:visited {
    color: white;
  }
  & a {
    color: white;
    text-decoration: none;
  }
  & > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    & *:not(:last-child) {
      margin-right: 30px;
    }
  }
`
export const Navbar = () => (
  <Header>
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/test">Test</Link>
      <Link to="/about">About</Link>
    </div>
  </Header>
)