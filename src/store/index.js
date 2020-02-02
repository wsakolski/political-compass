import { createStore, combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import customReducer from "../reducers/index"

const rootReducer = combineReducers({
  customReducer: customReducer,
  form: formReducer,
})

export default createStore(rootReducer)
