import { createSelector } from 'reselect'

const selectQuestionnaire = (state) => state.questionnaire

export const selectCurrentQuestion = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.currentQuestion
)
