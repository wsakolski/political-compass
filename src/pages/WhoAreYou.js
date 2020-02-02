import React, { Component } from "react"
import SimpleQuestion from "../forms/SimpleQuestion"

const options = [
  { id: 1, title: "Communist" },
  { id: 2, title: "" },
]

class WhoAreYou extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values, options)
  }

  render() {
    return <SimpleQuestion onSubmit={this.submit} />
  }
}

export default WhoAreYou
