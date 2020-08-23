import React, { FC } from 'react'
import SimpleQuestion, { UserProps } from '../forms/SimpleQuestion'

const options = [
  { id: 1, title: 'Communist' },
  { id: 2, title: '' },
]

const WhoAreYou: FC = () => {
  const handleSubmit = (values: UserProps) => {
    console.log(values, options)
  }

  return <SimpleQuestion handleSubmit={handleSubmit} />
}

export default WhoAreYou
