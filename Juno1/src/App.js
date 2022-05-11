import React, { Component } from 'react'
import Pros from './Pros';
import Emp from './Emp'
import Welcome from'./Welcome'
import Voting from './Voting'
import Change from './Change';
export class App extends Component {
  render() {
    return (
      <div>
        <Pros movie="ko"/> 
        <Emp name = "Aarathy" salary={500000000}/>
        <Welcome/>
        <Voting/>
        <Change/>
      </div>
    )
  }
}

export default App