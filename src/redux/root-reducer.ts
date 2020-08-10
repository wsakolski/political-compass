import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import questionnaireReducer from './questionnaire/questionnaire.reducer'

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  user: userReducer,
  questionnaire: questionnaireReducer,
})
