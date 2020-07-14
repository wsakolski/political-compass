import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

const Question = () => {
  const { questionId } = useParams()
  return (
    <h3>
      Question ID
      {' '}
      {questionId}
    </h3>
)
}

export const Test = () => {
  const match = useRouteMatch()

  return (
    <>
      <h2>Test content</h2>
      <ul>
        <li>
          <Link to={`${match.url}/test1`}>Test 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/test2`}>Test 2</Link>
        </li>

        <Switch>
          <Route path={`${match.path}/:questionId`}>
            <Question />
          </Route>
        </Switch>
      </ul>
    </>
  )
}
