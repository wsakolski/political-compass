import React, { FC } from 'react'
import { connect } from 'react-redux'
import CheckboxQuestion from '../../forms/CheckboxQuestion'
import {
  selectCurrentQuestion,
  selectTestLength,
} from '../../redux/questionnaire/questionnaire.selectors'
import QuestionView from '../../components/question-view/question-view.component'
import { RootState } from '../../redux/root-reducer'
import { Question } from '../../forms/CheckboxQuestion'
interface TestPageProps {
  currentQuestion: Question
  selectTestLenght: number
}
const TestPage: FC<TestPageProps> = ({ currentQuestion, testLength }) => {
  return (
    <>
      <QuestionView questionId={currentQuestion.id} testLength={testLength}>
        {(controlProps) => (
          <CheckboxQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            {...controlProps}
          />
        )}
      </QuestionView>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  currentQuestion: selectCurrentQuestion(state),
  testLength: selectTestLength(state),
})

export default connect(mapStateToProps)(TestPage)
