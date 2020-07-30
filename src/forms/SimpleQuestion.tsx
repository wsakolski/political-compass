import React, { ChangeEvent, useState } from 'react'

export interface UserProps {
  firstName: string
  lastName: string
  email: string
}

interface SimpleQuestionProps {
  handleSubmit: (values: UserProps) => void
}

const SimpleQuestion = (props: SimpleQuestionProps) => {
  const { handleSubmit } = props
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onSubmit = () => {
    handleSubmit({ firstName, lastName, email })
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleQuestion
