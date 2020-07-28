import React from 'react'
import {connect} from 'react-redux'
import CheckboxQuestion from '../forms/CheckboxQuestion'
import {setTestPoints} from '../redux/points/points.actions'

const question = {
  questionText:
    'If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations.',
  answers: [
    {
      id: 1,
      text: 'Strongly disagree',
      points: { x: 1, y: 1 },
    },
    {
      id: 2,
      text: 'Disagree',
      points: { x: 1, y: 1 },
    },
    {
      id: 3,
      text: 'Agree',
      points: { x: 1, y: 1 },
    },
    {
      id: 4,
      text: 'Strongly agree',
      points: { x: 1, y: 1 },
    },
  ],
}



const TestPage = ({setTestPoints}) => {
  return (
    <>
      <div>
        <CheckboxQuestion question={question} />
      </div>
      <button onClick={() => setTestPoints({x: 1, y: 3})}>Save points to redux</button>
    </>
  )
}

const mapDispatchToProps = dispatch => (
  {setTestPoints: (points) => dispatch(setTestPoints(points))
  }
)

export default connect(null, mapDispatchToProps)(TestPage)

