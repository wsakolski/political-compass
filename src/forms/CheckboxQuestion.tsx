import React, { FC, useState, ChangeEvent } from 'react'

interface AnswerPoints {
  x: number
  y: number
}

interface Answer {
  id: number
  text: string
  points: AnswerPoints
}

interface Question {
  questionText: string
  answers: Answer[]
}

interface QuestionProps {
  question: Question
}


const CheckboxQuestion: FC<QuestionProps> = ({ question }) => {
  const [answer, setAnswer] = useState(null)
  // console.log(answer);

  console.log(question)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
    // event.target.checked = true
  }
  return (
    <>
      <h2>{question.questionText}</h2>
      {question.answers.map(({id,text}) => (
        <label key={id} htmlFor='answer'>
          <input type="radio" id='answer' value={id} name='question' onChange={handleChange} checked={(answer === id)}  />
          {text}
        </label>
))}

    </>
)
}

export default CheckboxQuestion
