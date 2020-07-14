import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const linkStyles = css`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const AppLink = styled(props => <Link {...props} />)`
  ${linkStyles}
`
export const NavBarLink = styled(props => <Link {...props} />)`
  ${linkStyles};
  color: white;
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 30px;
  }
`

export default AppLink
