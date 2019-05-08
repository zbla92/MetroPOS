import logo from '../css/imgs/logo.png'
import emps from '../data/emps/people.json'
import '../css/register.css'
import React from 'react'
import Clock from './Clock'
import Item from './Item'
import TotalPrice from './TotalPrice';
import LoadSubmenu from './LoadSubmenu';

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
              <i className='user icon'></i> {emps.emp[0].name}
            </div>
          </div>
        </div>
        <div className='bottom-wide-container'>
          <div className='main-left-container floater-left'>
            <div className="display-buttons-container">
                  <button className="btn-top">To go</button>
                  <button className="btn-top">Tab</button>
                  <button className="btn-top">
                      Delivery
                  </button>
                  <button className="btn-top">Number</button>
            </div>
            <div className="item-container">
              <div className="item-list-header">
                <div className='item-name'>Item</div>
                <div className='item-info'>
                  <div className='item-qty'>Qty</div>
                  <div className='item-unit'>Unit price</div>
                  <div className='item-amount'>Amount</div>
                </div>
              </div>         
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              
            </div>
            <div className="total-prices-box">
              <TotalPrice />
            </div>
            <div className="display-buttons-container ">
                  <button className="btn-top">Cancel</button>
                  <button className="btn-top">More</button>
                  <button className="btn-top">Send</button>
                  <button id="checkout-btn" className="btn-top">Checkout</button>
            </div>
          </div>
          <div className='main-right-container'>
            <LoadSubmenu />
          </div>
        </div>
      </div>
    )
  }
}
export default Register
