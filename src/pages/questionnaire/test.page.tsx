import React from 'react'
import { connect } from 'react-redux'
import CheckboxQuestion from '../../forms/CheckboxQuestion'
import { setTestPoints } from '../../redux/points/points.actions'
import { politicalCompassTest } from './politicalCompassTest'
import QuestionView from '../../components/question-view/question-view.component'

const TestPage = ({ setTestPoints }) => {
  return (
    <>
      <div>
        {politicalCompassTest.map((question) => (
          <QuestionView>
            <CheckboxQuestion key={question.id} question={question} />
          </QuestionView>
        ))}
      </div>

    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setTestPoints: (points) => dispatch(setTestPoints(points)),
})

export default connect(null, mapDispatchToProps)(TestPage)
