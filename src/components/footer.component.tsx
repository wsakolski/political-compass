import React, { FC } from 'react'
import styled from 'styled-components'
import { NavBarLink } from './common/links.component'

const Background = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
`
const StyledFooter = styled.footer`
  height: 40px;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 1200px;
  margin: 0 auto;
`

const date = new Date().getFullYear()

const Footer: FC = () => {
  return (
    <Background>
      <StyledFooter>
        <NavBarLink to="/about">&copy; Praxeo Code & Stellar Code</NavBarLink>
        <span>{date}</span>
      </StyledFooter>
    </Background>
  )
}

export default Footer
