import React from 'react'
import styled, { css } from 'styled-components'

const containerStyles = css`
  padding: 20px 20px;
  margin: 0 auto;
  display: block;
`
const Container = styled.div`
  ${containerStyles};
  width: ${props => props.width || '1200px'};
`

export default Container
