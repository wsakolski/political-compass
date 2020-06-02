import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #282c34;
  height: 40px;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  //TODO refactor to link style
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
const date = new Date().getFullYear()

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Link to="/about">&copy; Praxeo Code & Stellar Code</Link>
        <span>{date}</span>
      </div>
    </StyledFooter>
  )
}

export default Footer
