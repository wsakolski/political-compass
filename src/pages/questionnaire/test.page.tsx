import React from 'react'
import {connect} from 'react-redux'
import CheckboxQuestion from '../../forms/CheckboxQuestion'
import {setTestPoints} from '../../redux/points/points.actions'
import {politicalCompassTest} from './politicalCompassTest'


const TestPage = ({setTestPoints}) => {
  return (
    <>
      <div>{politicalCompassTest.map(question => <CheckboxQuestion key ={question.id} question={question} />)}
      </div>
      {/* <button onClick={() => setTestPoints({x: 1, y: 3})}>Save points to redux</button> */}
    </>
  )
}

const mapDispatchToProps = dispatch => (
  {setTestPoints: (points) => dispatch(setTestPoints(points))
  }
)

export default connect(null, mapDispatchToProps)(TestPage)

