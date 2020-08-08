import React, { FC } from 'react'
import { connect } from 'react-redux'

export const QuestionView: FC = ({ children }) => {
  return <div></div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView)
