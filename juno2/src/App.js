import React, { Component } from 'react'
import Submit from'./Submit'
import Confirm from'./Confirm'
import Sub from'./Sub'
export class App extends Component {
  render() {
    return (
      <div>
        <Submit/>
        <Confirm/>
        <Sub/>
      </div>
    )
  }
}

export default App