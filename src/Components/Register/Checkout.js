import React, { Component } from 'react';
import '../../css/checkout.css';

export class Checkout extends Component {
    constructor(props) {
        super(props);

        this.addTip = this.addTip.bind(this);
        this.state = {
            tip: 0.0
        };
    }

    addTip(e) {
        this.setState({
            tip: this.state.tip + e.target.value
        });
    }

    render() {
        return (
            <div className="screen-overlay">
                <div className="checkout-container">
                    <div className="checkout-header">
                        <div>
                            <i className="x icon cancel-icon" onClick={this.props.goCheckout} />
                        </div>
                    </div>
                    <div className="checkout-body">
                        <div className="checkout-totals">
                            <div className="totals-box">
                                <div>Balance Due:</div>
                                <div className="totals-balance-due">$5.00</div>
                            </div>
                            <div className="totals-box">
                                <div>Amount Tendered:</div>
                                <div className="totals-amount">$0.00</div>
                            </div>
                            <div className="totals-box">
                                <div>Tip:</div>
                                <div className="totals-tip">$5.00</div>
                            </div>
                        </div>
                        <div className="checkout-keypad">
                            <button
                                type="button"
                                className="checkout-btn"
                                onClick={() => console.log(this.props.checkItems)}
                            >
                                9
                            </button>
                            <button type="button" className="checkout-btn">
                                8
                            </button>
                            <button type="button" className="checkout-btn">
                                7
                            </button>
                            <button type="button" className="checkout-btn">
                                TIP 15%
                            </button>
                            <button type="button" className="checkout-btn">
                                6
                            </button>
                            <button type="button" className="checkout-btn">
                                5
                            </button>
                            <button type="button" className="checkout-btn">
                                4
                            </button>
                            <button type="button" className="checkout-btn">
                                TIP 20%
                            </button>
                            <button type="button" className="checkout-btn">
                                3
                            </button>
                            <button type="button" className="checkout-btn">
                                2
                            </button>
                            <button type="button" className="checkout-btn">
                                1
                            </button>
                            <button type="button" className="checkout-btn">
                                TIP 25%
                            </button>
                            <button type="button" className="checkout-btn">
                                C
                            </button>
                            <button type="button" className="checkout-btn">
                                0
                            </button>
                            <button type="button" className="checkout-btn">
                                Del
                            </button>
                            <button type="button" className="checkout-btn">
                                CUSTOM TIP
                            </button>
                        </div>
                        <div className="checkout-tender" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
