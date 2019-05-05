import itemList from '../data/items/items.json'
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
        <div className='ui grid'>
          <div className='sixteen wide column info-bar'>
            <div className='ui  three column grid'>
              <div className='column' />
              <div className='column clock'>
                <Clock />
              </div>
              <div className='column' />
            </div>
          </div>
          <div className='sixteen wide column info-panel'>logout</div>
        </div>
        <div className='ui grid'>
          <div className='five wide column display-container'>
            <div className='ui grid'>
              <table className='table-top-buttons'>
                <tr>
                  <th className='btn-th'>
                    <button className='pos-btn'>To go</button>
                  </th>
                  <th className='btn-th'>
                    <button className='pos-btn'>Tab</button>
                  </th>
                  <th className='btn-th'>
                    <button className='pos-btn'>Delivery</button>
                  </th>
                  <th className='btn-th'>
                    <button className='pos-btn'>Number</button>
                  </th>
                </tr>
              </table>
            </div>
            <div className='items-container'>
              <table className='ui very basic table'>
                <tr className='item-header'>
                  <th className='th-item'>Item</th>
                  <th className='qty'>Qty</th>
                  <th>Unit Price</th>
                  <th>Amount</th>
                </tr>
                <tbody>
                  <tr>
                    <td>John</td>
                    <th className='qty'>1</th>
                    <td>None</td>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td>Jamie</td>
                    <th className='qty'>2</th>
                    <td>Requires call</td>
                    <th>Amount</th>
                  </tr>
                  <tr>
                    <td>Jill</td>
                    <th className='qty'>4</th>
                    <td>None</td>
                    <th>Amount</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='totals-container'>totals</div>
            <div className='ui grid'>
              <table className='table-bottom-buttons button-holde'>
                <tr>
                  <th className='btn-th'>
                    <button className='pos-btn'>Cancel</button>
                  </th>
                  <th className='btn-th'>
                    <button className='pos-btn'>More</button>
                  </th>
                  <th className='btn-th'>
                    <button className='pos-btn'>Send</button>
                  </th>
                  <th className='btn-th'>
                    <button id='checkout-btn' className='pos-btn'>
                      Checkout
                    </button>
                  </th>
                </tr>
              </table>
            </div>
          </div>
          <div className='eleven wide column menus-container'>s</div>
        </div>
      </div>
    )
  }
}
export default Register
