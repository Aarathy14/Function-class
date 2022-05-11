import React, { Component } from 'react'
import Contact from './Contact'
import  Hello from './Hello'
import Student from './Student'
import Reg from'./Reg'
import Count from './Count'
export class App extends Component {
  render() {
    return (
      <div>
      <Hello/>
      <Student/>
      <Contact/>
      <br/>
      <Reg/>
      <Count/>
      </div>
    )
  }
}

export default App