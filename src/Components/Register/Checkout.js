import React, { Component } from 'react';
import axios from 'axios';
import '../../css/checkout.css';

export class Checkout extends Component {
    constructor(props) {
        super(props);

        this.enterAmount = this.enterAmount.bind(this);
        this.addTip = this.addTip.bind(this);
        this.state = {
            totalValue: document.getElementById('total-value').innerHTML,
            taxValue: document.getElementById('total-tax').innerHTML,
            tendered: 0,
            tip: 0.0,
            checks: [],
            checkItems: [],
            id: 0,
            checkToImport: {}
        };
    }

    enterAmount(e) {
        this.setState({
            tendered: this.state.tendered + e.target.innerHTML
        });
        // : this.setState({
        //       tendered: (this.state.tendered + e.target.innerHTML).substring(1, this.state.tendered.length - 1)
        //   });
    }

    addTip(e) {
        this.setState({
            tip: this.state.tip + e.target.value
        });
    }

    // coded by milanblaz from here
    componentDidMount() {
        //Parsing total value of the check
        const totalValue = document.getElementById('total-value').innerHTML;
        const taxValue = document.getElementById('total-tax').innerHTML;

        // Building object to inject
        this.createObj(
            this.props.checkItems,
            this.state.id,
            totalValue,
            'amex',
            this.props.loggedInEmp[0].name,
            taxValue
        );

        this.state.checkItems = this.props.checkItems;
        let url = 'http://localhost:3001/checks';
        axios.get(url).then(res => {
            this.setState({ checks: res.data, id: res.data.length });
        });
    }

    postToServer(object) {
        let url = 'http://localhost:3001/checks';
        axios.post(url, object).then(res => {
            console.log(res.data + 'has been posted');
        });
    }

    createObj(itemList, id, total = 0.0, tenderOption = 'Cash', closedBy = 'Jane Doe') {
        this.setState({
            checkToImport: {
                id: id,
                closedBy: closedBy,
                tenderOption: tenderOption,
                items: itemList,
                total: total
            }
        });
    }

    // coded by milanblaz to here

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
                                <div className="totals-box-description">Balance Due:</div>
                                <div className="totals-balance-due">${this.state.totalValue}</div>
                            </div>
                            <div className="totals-box">
                                <div className="totals-box-description">Amount Tendered:</div>
                                <div className="totals-amount">${parseInt(this.state.tendered) / 100}</div>
                            </div>
                            <div className="totals-box">
                                <div className="totals-box-description">Tip:</div>
                                <div className="totals-tip">$5.00</div>
                            </div>
                        </div>
                        <div className="checkout-keypad">
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                9
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                8
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                7
                            </button>
                            <button type="button" className="checkout-btn">
                                TIP 15%
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                6
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                5
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                4
                            </button>
                            <button type="button" className="checkout-btn">
                                TIP 20%
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                3
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                2
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                1
                            </button>
                            <button type="button" className="checkout-btn">
                                TIP 25%
                            </button>
                            <button type="button" className="checkout-btn">
                                C
                            </button>
                            <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                0
                            </button>
                            <button
                                type="button"
                                className="checkout-btn"
                                onClick={e => {
                                    this.postToServer(this.state.checkToImport);
                                }}
                            >
                                Del
                            </button>
                            <button type="button" className="checkout-btn">
                                CUSTOM TIP
                            </button>
                        </div>
                        <div className="checkout-tender">
                            <button type="button" className="bottom-btn" id="tender-btn">
                                TENDER
                            </button>
                            <button type="button" className="bottom-btn" id="receipt-btn">
                                PRINT RECEIPT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
