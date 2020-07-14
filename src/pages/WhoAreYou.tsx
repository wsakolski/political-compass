import React, { FC } from "react"
import SimpleQuestion, { userProps } from "../forms/SimpleQuestion"

const options = [
  { id: 1, title: "Communist" },
  { id: 2, title: "" },
]


const WhoAreYou: FC = () => {
  const handleSubmit = (values: userProps) => {
    console.log(values, options)
  }

  return <SimpleQuestion handleSubmit={handleSubmit} />
}

export default WhoAreYou
