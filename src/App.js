import './App.css'

import React, { Component } from 'react'

import AppHeader from './components/AppHeader'
import FullWidthGrid from './components/FullWidthGrid'
import Group from './views/Group'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Group />
        <FullWidthGrid />
      </div>
    )
  }
}

export default App
