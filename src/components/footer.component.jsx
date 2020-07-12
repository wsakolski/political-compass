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
  & > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
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
