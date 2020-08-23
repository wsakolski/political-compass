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
export const selectTestResults = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.results
)

export const selectQuestionResult = (questionId) =>
  selectTestResults()[questionId]
