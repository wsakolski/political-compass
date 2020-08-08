import React, { FC } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
  margin-bottom: 40px;
`
const ButtonToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const QuestionView: FC = ({ children }) => {
  return (
    <QuestionWrapper>
      {children}
      <ButtonToolbar>
        <button>Prev question</button>
        <button>Next question</button>
      </ButtonToolbar>
    </QuestionWrapper>
  )
}

// const mapStateToProps = () => ({})

// const mapDispatchToProps = {}

export default connect(null, null)(QuestionView)
