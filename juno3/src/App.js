import React, { Component } from 'react'
import Tour from './Tour'
import Count from './Count'
export class App extends Component {
  render() {
    return (
      <div>
        <Tour/>
        <Count/>
      </div>
    )
  }
}

export default App