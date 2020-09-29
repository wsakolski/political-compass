import { QuestionnaireActionTypes } from './questionnaire.types'
import { politicalCompassTest } from './politicalCompassTest'

const INITIAL_STATE = {
  test: politicalCompassTest,
  testLength: politicalCompassTest.length,
  currentQuestion: politicalCompassTest[0],
  results: [],
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
    case QuestionnaireActionTypes.SET_QUESTION_RESULT:
      let newResults = null
      const questionAnswer = {
        id: state.currentQuestion.id,
        answerId: action.payload,
        answer: state.currentQuestion.answers[action.payload],
      }

      if (state.results[state.currentQuestion.id]) {
        newResults = [...state.results]
        newResults[state.currentQuestion.id] = questionAnswer
      } else {
        newResults = [...state.results, questionAnswer]
      }
      return {
        ...state,
        results: newResults,
      }
    default:
      return state
  }
}

export default questionnaireReducer
