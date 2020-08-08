import React, { FC, useState, ChangeEvent } from 'react'

interface AnswerPoints {
  x: number
  y: number
}

interface Answer {
  text: string
  points: AnswerPoints
}

interface Question {
  id: number,
  questionText: string
  answers: Answer[]
}

interface QuestionProps {
  question: Question
}

const CheckboxQuestion: FC<QuestionProps> = ({ question }) => {
  const [answer, setAnswer] = useState<null | number>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setAnswer(Number(value))
  }

  return (
    <>
      <h2>{question.questionText}</h2>
      {question.answers.map(({ text }, index) => (
        <label key={index} htmlFor={`${question.id}`}>
            <input
            type="radio"
            id={`answer no ${index}`}
            value={index}
            name={`${question.id}`}
            onChange={handleChange}
            checked={answer === index}
          />
          {text}
        </label>
      ))}
    </>
  )
}

export default CheckboxQuestion
