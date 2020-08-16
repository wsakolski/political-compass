import { QuestionnaireActionTypes } from './questionnaire.types'

export const setCurrentQuestion = (questionIndex) => ({
  type: QuestionnaireActionTypes.SET_CURRENT_QUESTION,
  payload: questionIndex,
})
