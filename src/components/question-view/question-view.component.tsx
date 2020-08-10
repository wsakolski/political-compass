import React, { FC } from 'react'
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
  setNextQuestion: () => void
  setPrevQuestion: () => void
}
export const QuestionView: FC<QuestionViewProps> = ({
  children,
  setNextQuestion,
  setPrevQuestion,
}) => {
  return (
    <QuestionWrapper>
      {children}
      <ButtonToolbar>
        <button onClick={setPrevQuestion}>Prev question</button>
        <button onClick={setNextQuestion}>Next question</button>
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
