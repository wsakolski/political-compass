import React from 'react'
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Test } from './components/test.component'
import { Home } from './components/home.component'
import { About } from './components/about.component'
import WhoAreYou from './pages/WhoAreYou'
import Header from './components/header.component'
import Footer from './components/footer.component'
import NavBar from './components/navbar.component'

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
const ContentWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  flex: 1;
`

const App = () => (
  <AppWrapper>
    <Header>
      <NavBar />
    </Header>
    <AppContent>
      <ContentWrapper>
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/about" component={About} />
          <Route exact path="/question" component={WhoAreYou} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ContentWrapper>
    </AppContent>
    <Footer />
  </AppWrapper>
)

export default App
