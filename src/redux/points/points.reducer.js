import { PointsActionTypes } from './points.types'

const INITIAL_STATE = {
  x: 0,
  y: 0,
}

const pointsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PointsActionTypes.SET_TEST_POINTS:
      return {
        ...state,
        x: state.x + action.payload.x,
        y: state.y + action.payload.y,
      }

    default:
      return state
  }
}

export default pointsReducer
