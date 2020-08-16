import { createSelector } from 'reselect'

const selectQuestionnaire = (state) => state.questionnaire

export const selectCurrentQuestion = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.currentQuestion
)
export const selectTestLength = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.testLength
)
