import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from './page/Router'
import { configureStore } from './redux/store/configureStore'

const store = configureStore()
class App extends Component {
  public render () {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export { App }
