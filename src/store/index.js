import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducer from "../reducers/index";

const rootReducer = combineReducers({
    rootReducer: rootReducer,
    form: formReducer
})

export default createStore(rootReducer)