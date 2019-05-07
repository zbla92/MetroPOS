import React from 'react'
import Login from './Login'
import MainMenu from './MainMenu'
import Register from './Register'
import FloatingScreen from './FloatingScreen'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.logging = this.logging.bind(this)
    this.mainMenu = this.mainMenu.bind(this)
    this.loadRegister = this.loadRegister.bind(this)
    this.floatingLogo = this.floatingLogo.bind(this)
    this.state = { loadedComponent: 'Register' }
  }
  // Login Component controller
  logging () {
    this.setState({
      loadedComponent: 'Login'
    })
  }
  mainMenu () {
    this.setState({
      loadedComponent: 'mainMenu'
    })
  }
  loadRegister () {
    this.setState({
      loadedComponent: 'Register'
    })
  }
  floatingLogo () {
    this.setState({
      loadedComponent: 'FloatingScreen'
    })
  }

  render () {
    if (this.state.loadedComponent === 'Login') {
      return (
        <div>
          <Login mainMenu={this.mainMenu} />
        </div>
      )
    } else if (this.state.loadedComponent === 'mainMenu') {
      return (
        <div>
          <MainMenu loadRegister={this.loadRegister} />
        </div>
      )
    } else if (this.state.loadedComponent === 'Register') {
      return (
        <div>
          <Register logging={this.logging} />
        </div>
      )
    } else if (this.state.loadedComponent === 'FloatingScreen') {
      return (
        <div>
          <FloatingScreen />
        </div>
      )
    }
  }
}
export default App
