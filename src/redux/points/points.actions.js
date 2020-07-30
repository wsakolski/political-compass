import { PointsActionTypes } from './points.types'

export const setTestPoints = points => ({
  type: PointsActionTypes.SET_TEST_POINTS,
  payload: { x: points.x, y: points.y },
})
