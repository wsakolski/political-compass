import { QuestionnaireActionTypes } from './questionnaire.types'

const INITIAL_STATE = {
  test: 
}

const questionnaireReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionnaireActionTypes.SET_ACTIVE_QUESTION:

      break;

    default:
      break;
  }
}

export default questionnaireReducer
