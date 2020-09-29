import React, { FC, useState, useEffect, ChangeEvent } from 'react'

interface AnswerPoints {
  x: number
  y: number
}

interface Answer {
  text: string
  points: AnswerPoints
}

export interface Question {
  id: number
  questionText: string
  answers: Answer[]
}

interface QuestionProps {
  question: Question
  getQuestionResults: (result: string) => void
  questionAnswer: string
}

const CheckboxQuestion: FC<QuestionProps> = ({
  question,
  getQuestionResults,
  questionAnswer,
}) => {
  const [answer, setAnswer] = useState<string>(questionAnswer || '')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setAnswer(value)
  }

  useEffect(() => {
    getQuestionResults(answer)
  }, [answer])

  return (
    <>
      <h2>{question.questionText}</h2>
      {question.answers.map(({ text }, index) => (
        <label key={index} htmlFor={`${question.id}`}>
          <input
            type="radio"
            id={`answer no ${index}`}
            value={index.toString()}
            name={`${question.id}`}
            onChange={handleChange}
            checked={answer === index.toString()}
          />
          {text}
        </label>
      ))}
    </>
  )
}

export default CheckboxQuestion
