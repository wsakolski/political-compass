import { QuestionnaireActionTypes } from './questionnaire.types'

export const setCurrentQuestion = (questionIndex) => ({
  type: QuestionnaireActionTypes.SET_CURRENT_QUESTION,
  payload: questionIndex,
})
export const setQuestionResult = (result) => ({
  type: QuestionnaireActionTypes.SET_QUESTION_RESULT,
  payload: result,
})
