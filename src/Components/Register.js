import itemList from '../data/items/items.json';
import '../css/register.css';
import React from 'react';
import Clock from './Clock';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="sixteen wide column info-bar">
                        <div className="ui  three column grid">
                            <div className="column" />
                            <div className="column clock">
                                <Clock />
                            </div>
                            <div className="column" />
                        </div>
                    </div>
                    <div className="sixteen wide column info-panel">logout</div>
                </div>
                <div className="ui grid">
                    <div className="five wide column display-container">
                        <div className="ui grid">
                            <table className="table-top-buttons">
                                <tr>
                                    <th className="btn-th">
                                        <button className="pos-btn">
                                            To go
                                        </button>
                                    </th>
                                    <th className="btn-th">
                                        <button className="pos-btn">Tab</button>
                                    </th>
                                    <th className="btn-th">
                                        <button className="pos-btn">
                                            Delivery
                                        </button>
                                    </th>
                                    <th className="btn-th">
                                        <button className="pos-btn">
                                            Number
                                        </button>
                                    </th>
                                </tr>
                            </table>
                        </div>
                        <div className="items-container">
                            <table className="ui very basic table">
                                <tr className="item-header main-head">
                                    <th id="item-label" className="item-name">
                                        Item
                                    </th>
                                    <th className="qty">Qty</th>
                                    <th className="item-price">Item Price</th>
                                    <th className="amount">Amount</th>
                                </tr>
                            </table>
                            <div className="item-container clicked">
                                <table className="ui very basic table item-header">
                                    <tr className="item-header">
                                        <th className="item-name list-item-name">
                                            Seafood Paella
                                        </th>
                                        <th className="th-item qty">1</th>
                                        <th className="th-item item-price">
                                            23.00
                                        </th>
                                        <th className="th-item amount">
                                            23.00
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <div className="item-container clicked">
                                <table className="ui very basic table item-header">
                                    <tr className="item-header">
                                        <th className="item-name list-item-name">
                                            Baja Fish Tacos
                                        </th>
                                        <th className="th-item qty">2</th>
                                        <th className="th-item item-price">
                                            17.00
                                        </th>
                                        <th className="th-item amount">
                                            34.00
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <div className="item-container clicked">
                                <table className="ui very basic table item-header">
                                    <tr className="item-header">
                                        <th className="item-name list-item-name">
                                            Pizza
                                        </th>
                                        <th className="th-item qty">1</th>
                                        <th className="th-item item-price">
                                            18.99
                                        </th>
                                        <th className="th-item amount">
                                            18.99
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <div className="item-container clicked">
                                <table className="ui very basic table item-header">
                                    <tr className="item-header">
                                        <th className="item-name list-item-name">
                                            Lemonade
                                        </th>
                                        <th className="th-item qty">5</th>
                                        <th className="th-item item-price">
                                            2.00
                                        </th>
                                        <th className="th-item amount">
                                            10.00
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="totals-container totals-row">
                            <table>
                                <tr className="table-row">
                                    <td className="total-label">Subtotal:</td>
                                    <td className="total-value">75.90</td>
                                </tr>
                                <tr>
                                    <td className="total-label">Discount:</td>
                                    <td className="total-value">N/A</td>
                                </tr>
                                <tr>
                                    <td className="total-label">Tax:</td>
                                    <td className="total-value">5.78</td>
                                </tr>
                                <tr>
                                    <td className="" />
                                    <td className="complete-total">79.99</td>
                                </tr>
                            </table>
                        </div>
                        <div className="ui grid">
                            <table className="table-bottom-buttons button-holde">
                                <tr>
                                    <th className="btn-th">
                                        <button className="pos-btn">
                                            Cancel
                                        </button>
                                    </th>
                                    <th className="btn-th">
                                        <button className="pos-btn">
                                            More
                                        </button>
                                    </th>
                                    <th className="btn-th">
                                        <button className="pos-btn">
                                            Send
                                        </button>
                                    </th>
                                    <th className="btn-th">
                                        <button
                                            id="checkout-btn"
                                            className="pos-btn"
                                        >
                                            Checkout
                                        </button>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="eleven wide column menus-container">s</div>
                </div>
            </div>
        );
    }
}
export default Register;
