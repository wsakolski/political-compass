import React from 'react'
import styled, { css } from 'styled-components'

const ContentWrapper = css`
  width: 1200px;
  margin: 0 auto;
  flex: 1;
  background-color: ${({ theme }) => theme.color.blueBackground};
`
const HomeContainer = styled.div`
  ${ContentWrapper};
`

const HomeTitle = styled.h1`
  font-size: 40px;
  font-family: ${({ theme }) => theme.font.title};
  text-align: center;
`

const Description = styled.div`
  color: ${({ theme }) => theme.color.blue};
  font-size: 16px;
  line-height: 20px;
  padding: 50px;
  text-align: justify;

  a {
    color: ${({ theme }) => theme.color.darkBlue};
    display: block;
    width: max-content;
    margin: 20px auto;
  }
`

export const Home = () => (
  <HomeContainer>
    <HomeTitle>Political Compass</HomeTitle>
    <Description>
      The enduring appeal of The Political Compass lies in its universality, and
      the fact that it’s neither a fly-by-night election-time survey, nor a
      shallow personality test. Our test profiles political personalities
      applicable to all democracies. Our expanding range of features enables you
      to compare the politics of different countries and political figures past
      and present. Here’s a brief video introduction:
      {' '}
      <a href="https://www.youtube.com/watch?v=5u3UCz0TM5Q">
        https://www.youtube.com/watch?v=5u3UCz0TM5Q
      </a>
      Our essential point is that Left and Right, although far from obsolete,
      are essentially a measure of economics. As political establishments adopt
      either enthusiastically or reluctantly the prevailing economic orthodoxy —
      the neo-liberal strain of capitalism — the Left-Right division between
      mainstream parties becomes increasingly blurred. Instead, party
      differences tend to be more about identity issues. In the narrowing
      debate, our social scale is more crucial than ever. We’re indebted to
      people like Wilhelm Reich, Hans Eysenck and Theodor Adorno for their
      ground-breaking work in this field. We believe that, in an age of
      diminishing ideology, The Political Compass helps a new generation in
      particular to get a better idea of where they stand politically — and the
      sort of political company they keep.
    </Description>
  </HomeContainer>
)
