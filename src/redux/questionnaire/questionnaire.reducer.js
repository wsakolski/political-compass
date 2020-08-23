import { QuestionnaireActionTypes } from './questionnaire.types'
import { politicalCompassTest } from './politicalCompassTest'

const INITIAL_STATE = {
  test: politicalCompassTest,
  testLength: politicalCompassTest.length,
  currentQuestion: politicalCompassTest[0],
  results: null,
}

const findQuestionIndex = (questionObject) =>
  politicalCompassTest.indexOf(questionObject)

const questionnaireReducer = (state = INITIAL_STATE, action) => {
  const currentQuestionIndex = findQuestionIndex(state.currentQuestion)

  switch (action.type) {
    case QuestionnaireActionTypes.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: politicalCompassTest[action.payload],
      }
    case QuestionnaireActionTypes.SET_QUESTION_RESULTS:
      return {
        ...state,
        results: [
          ...state.results,
          {
            id: state.currentQuestion.id,
            answer: state.currentQuestion.answers[action.payload],
          },
        ],
      }
    default:
      return state
  }
}

export default questionnaireReducer
