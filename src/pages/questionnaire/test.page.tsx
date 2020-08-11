import React, { FC } from 'react'
import { connect } from 'react-redux'
import CheckboxQuestion from '../../forms/CheckboxQuestion'
import { selectCurrentQuestion } from '../../redux/questionnaire/questionnaire.selectors'
import QuestionView from '../../components/question-view/question-view.component'
import { RootState } from '../../redux/root-reducer'
import { Question } from '../../forms/CheckboxQuestion'
interface TestPageProps {
  currentQuestion: Question
}
const TestPage: FC<TestPageProps> = ({ currentQuestion }) => {
  return (
    <>
      <div>
        <QuestionView>
          {(questionViewProps) => (
            <CheckboxQuestion
              key={currentQuestion.id}
              question={currentQuestion}
              {...questionViewProps}
            />
          )}
        </QuestionView>
      </div>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  currentQuestion: selectCurrentQuestion(state),
})

export default connect(mapStateToProps)(TestPage)
