import itemList from '../data/items/items.json'
import logo from '../css/imgs/logo.png'
import '../css/register.css'
import React from 'react'
import Clock from './Clock'

class Register extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className='top-wide-container'>
          <div className='info-bar'>
            <Clock />
          </div>
          <div className='info-panel'>
            <div className='logout-btn-container'>
              <button className='logout-btn' onClick={this.props.logging}>
                Logout
              </button>
            </div>
            <div className='info-logo'>Metro POS</div>
            <div className='logedin-user'>
              <i className='user icon'></i> Milan Blaz
            </div>
          </div>
        </div>
        <div className='bottom-wide-container'>
          <div className='main-left-container floater-left'>
            <div className="upper-buttons-container">
                  <button className="btn-top">To go</button>
                  <button className="btn-top">Tab</button>
                  <button className="btn-top">
                      Delivery
                  </button>
                  <button className="btn-top">Number</button>
            </div>
          </div>
          <div className='main-right-container'>Mian right</div>
        </div>
      </div>
    )
  }
}
export default Register
