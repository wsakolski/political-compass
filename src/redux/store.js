import throttle from 'lodash.throttle'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { rootReducer } from './root-reducer'
import { saveState, loadState } from './localStorage'

const middlewares = [logger]
const persistedState = loadState()
export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middlewares)
)

store.subscribe(
  throttle(() => {
    saveState({ points: store.getState().points })
  }),
  1000
)

export default store
