import { QuestionnaireActionTypes } from './questionnaire.types'
import { politicalCompassTest } from './politicalCompassTest'

const INITIAL_STATE = {
  test: politicalCompassTest,
  currentQuestion: politicalCompassTest[0],
  results: null,
}

const findQuestionIndex = (questionObject) =>
  politicalCompassTest.indexOf(questionObject)

const questionnaireReducer = (state = INITIAL_STATE, action) => {
  const currentQuestionIndex = findQuestionIndex(state.currentQuestion)

  switch (action.type) {
    case QuestionnaireActionTypes.SET_ACTIVE_QUESTION:
      return {
        ...state,
        currentQuestion: politicalCompassTest[action.payload],
      }
    case QuestionnaireActionTypes.SET_NEXT_QUESTION:
      return {
        ...state,
        currentQuestion:
          currentQuestionIndex === state.test.length - 1
            ? politicalCompassTest[currentQuestionIndex]
            : politicalCompassTest[currentQuestionIndex + 1],
      }
    case QuestionnaireActionTypes.SET_PREV_QUESTION:
      return {
        ...state,
        currentQuestion:
          currentQuestionIndex === 0
            ? politicalCompassTest[currentQuestionIndex]
            : politicalCompassTest[currentQuestionIndex - 1],
      }

    default:
      return state
  }
}

export default questionnaireReducer
