import React, { FC, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  setNextQuestion,
  setPrevQuestion,
} from '../../redux/questionnaire/questionnaire.actions'

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
  setNextQuestion: () => void
  setPrevQuestion: () => void
}
export const QuestionView: FC<QuestionViewProps> = ({
  children,
  setNextQuestion,
  setPrevQuestion,
}) => {
  const [nextQuestionDisabled, setNextQuestionDisabled] = useState(true)

  const isQuestionAnswered = (isAnswered: boolean) => {
    setNextQuestionDisabled(isAnswered ? false : true)
  }

  return (
    <QuestionWrapper>
      {children({ isQuestionAnswered })}
      <ButtonToolbar>
        <button onClick={setPrevQuestion}>Prev question</button>
        <button onClick={setNextQuestion} disabled={nextQuestionDisabled}>
          Next question
        </button>
      </ButtonToolbar>
    </QuestionWrapper>
  )
}

// const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: any) => ({
  setNextQuestion: () => dispatch(setNextQuestion),
  setPrevQuestion: () => dispatch(setPrevQuestion),
})

export default connect(null, mapDispatchToProps)(QuestionView)
