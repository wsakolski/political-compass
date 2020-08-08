import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Test } from './components/test.component'
import { Home } from './components/home.component'
import { About } from './components/about.component'
import WhoAreYou from './pages/WhoAreYou'
import Header from './components/header.component'
import Footer from './components/footer.component'
import NavBar from './components/navbar.component'
import CheckboxQuestion from './forms/CheckboxQuestion'
import theme from './theme'
import Container from './components/common/containers.component'
import TestPage from './pages/questionnaire/test.page'

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Header>
        <NavBar />
      </Header>
      <AppContent>
        <Container>
          <Switch>
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/question" component={CheckboxQuestion} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </AppContent>
      <Footer />
    </AppWrapper>
  </ThemeProvider>
)

export default App
