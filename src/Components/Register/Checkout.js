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
                            <i className="x icon hidden-icon" />
                        </div>
                        <div>Tender</div>
                        <div>
                            <i className="x icon cancel-icon" onClick={this.props.goCheckout} />
                        </div>
                    </div>
                    <div className="checkout-body">
                        <div className="checkout-left">
                            <div className="bill-total" />
                            <div className="balance-due" />
                        </div>
                        <div className="checkout-right">
                            <button type="button" className="cash-btn">
                                Cash
                            </button>
                            <button type="button" className="credit-btn">
                                Credit
                            </button>
                            <button type="button" className="credit-btn">
                                Tip Adjust
                            </button>
                            <button type="button" className="credit-btn">
                                Print Receipt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
