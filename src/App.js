import { Location, Locations } from 'react-router-component'
import React, { Component } from 'react'

import AppHeader from './components/AppHeader'
import Landing from './views/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Locations>
          <Location path="/" handler={Landing} />
          <Location path="/landing" handler={Landing} />
          <Location path="*" handler={Landing} />
        </Locations>
      </div>
    )
  }
}

export default App
