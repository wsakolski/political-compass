import React, { FC, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setCurrentQuestion } from '../../redux/questionnaire/questionnaire.actions'

const QuestionWrapper = styled.div`
  margin-bottom: 40px;
`
const ButtonToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

interface QuestionViewProps {
  children: (tools: any) => JSX.Element
  setCurrentQuestion: (index: number) => void
  questionId: number
  testLength: number
}
export const QuestionView: FC<QuestionViewProps> = ({
  children,
  questionId,
  testLength,
  setCurrentQuestion,
}) => {
  const [nextQuestionDisabled, setNextQuestionDisabled] = useState(true)

  const isQuestionAnswered = (isAnswered: boolean) => {
    setNextQuestionDisabled(isAnswered ? false : true)
  }

  const setPrevQuestion = () => {
    if (questionId) setCurrentQuestion(questionId - 1)
  }
  const setNextQuestion = () => {
    if (questionId < testLength - 1) setCurrentQuestion(questionId + 1)
  }

  return (
    <QuestionWrapper>
      {children({ isQuestionAnswered })}
      <ButtonToolbar>
        <button onClick={setPrevQuestion}>Prev question</button>
        {questionId < testLength - 1 && (
          <button onClick={setNextQuestion} disabled={nextQuestionDisabled}>
            Next question
          </button>
        )}
        {questionId === testLength - 1 && <button>See your results</button>}
      </ButtonToolbar>
    </QuestionWrapper>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentQuestion: (index: number) => dispatch(setCurrentQuestion(index)),
})

export default connect(null, mapDispatchToProps)(QuestionView)
