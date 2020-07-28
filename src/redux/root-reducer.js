import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import pointsReducer from './points/points.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  points: pointsReducer,
})
