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
            <div class="screen-overlay">
                <div class="checkout-container">
                    <div class="checkout-header">
                        <span>Tender</span>
                        <span>Cancel</span>
                    </div>
                    <div class="checkout-total" />
                    <div class="checkout-tip">
                        <span>Tip:</span>
                        <input type="text" value={this.state.tip} onSubmit={this.addTip} />
                    </div>
                    <div class="checkout-tender">
                        <button type="button" className="cash-btn">
                            Cash
                        </button>
                        <button type="button" className="credit-btn">
                            Credit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
