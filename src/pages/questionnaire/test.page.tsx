import React, { FC } from 'react'
import { connect } from 'react-redux'
import CheckboxQuestion from '../../forms/CheckboxQuestion'
import {
  selectCurrentQuestion,
  selectTestLength,
  selectTestResults,
} from '../../redux/questionnaire/questionnaire.selectors'
import QuestionView from '../../components/question-view/question-view.component'
import { RootState } from '../../redux/root-reducer'
import { Question } from '../../forms/CheckboxQuestion'

interface QuestionResult {
  id: number
  answerId: number
  answer: string
}
interface TestPageProps {
  currentQuestion: Question
  testLength: number
  testResults: Array<QuestionResult>
}

const TestPage: FC<TestPageProps> = ({
  currentQuestion,
  testLength,
  testResults,
}) => {
  const setInitialQuestionResult = () => {
    if (testResults[currentQuestion.id]?.answerId.toString())
      return testResults[currentQuestion.id]?.answerId.toString()
    else return ''
  }

  return (
    <>
      <QuestionView questionId={currentQuestion.id} testLength={testLength}>
        {(controlProps) => (
          <CheckboxQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            questionAnswer={setInitialQuestionResult()}
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
  testResults: selectTestResults(state),
})

export default connect(mapStateToProps)(TestPage)
