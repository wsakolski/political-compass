import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import pointsReducer from './points/points.reducer'
import questionnaireReducer from "./questionnaire/questionnaire.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  points: pointsReducer,
  questionnaire: questionnaireReducer
})
