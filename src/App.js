import React, { Component } from 'react'

import AppHeader from './components/AppHeader'
import Landing from './views/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Landing />
      </div>
    )
  }
}

export default App
