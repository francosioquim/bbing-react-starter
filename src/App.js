import './App.css'

import React, { Component } from 'react'

import AppHeader from './components/AppHeader'
import Group from './views/Group'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Group />
      </div>
    )
  }
}

export default App
