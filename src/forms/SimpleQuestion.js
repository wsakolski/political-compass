import React from 'react'

const SimpleQuestion = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
      </div>
      <div>
        <label htmlFor="email">Email</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleQuestion
