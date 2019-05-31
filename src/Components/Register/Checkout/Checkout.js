import React, { Component } from 'react';
import axios from 'axios';
import './checkout.css';

export class Checkout extends Component {
    constructor(props) {
        super(props);

        this.enterAmount = this.enterAmount.bind(this);
        this.enterPresetAmount = this.enterPresetAmount.bind(this);
        this.delDigit = this.delDigit.bind(this);
        this.delAll = this.delAll.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            totalValue: document.getElementById('total-value').innerHTML,
            taxValue: document.getElementById('total-tax').innerHTML,
            id: this.props.checkID,
            tendered: '',
            tip: 0.0,
            checks: [],
            checkItems: [],
            checkToImport: {},
            url: `http://localhost:3001/checks`
        };
    }

    enterAmount(e) {
        if (this.state.tendered.length < 7) {
            this.setState({
                tendered: this.state.tendered.concat(e.target.textContent)
            });
        }
    }

    enterPresetAmount(e) {
        let amount = (parseInt(this.state.tendered) || 0) + parseInt(e.target.value);
        if (this.state.tendered.length < 7) {
            this.setState({
                tendered: amount.toString()
            });
        }
    }

    delDigit() {
        this.setState({
            tendered: this.state.tendered.substring(0, this.state.tendered.length - 1)
        });
    }

    delAll() {
        this.setState({
            tendered: ''
        });
    }

    // reused from RenderItemToCheck
    toggleClass(el, className) {
        if (el) {
            el.classList.toggle(className);
        }
    }

    // coded by milanblaz from here
    componentDidMount() {
        this.props.getAllOpenedChecks();
        this.setState({ checkItems: this.props.checkItems, checks: this.props.openedTables});
        // Building object to inject
        this.createObj(
            this.props.checkItems,
            this.state.id,
            this.state.totalValue,
            'amex',
            this.props.loggedInEmp[0].name,
            this.state.taxValue
        );

        this.fetchChecks = this.state.url;
    }

    clearCurrentItems(func) {
        const emptyArr = [];
        func(emptyArr);
    }

    //Pushing new  check that will gain new ID on server side
    postToServer = object => {
        let url = 'http://localhost:3001/checks';
        axios
            .post(url, object)
            .then(res => {
                this.clearCurrentItems(this.props.updateOrderedItems);
            })
            .catch(error => {
                return alert('Authorization failed, contact support.');
            });
    };
    // Updating check that was already pushed to server
    putToServer = object => {
        let url = `http://localhost:3001/checks/${this.state.id}`;
        axios
            .put(url, object)
            .then(res => {
                this.clearCurrentItems(this.props.updateOrderedItems);
            })
            .catch(error => {
                return alert('Authorization failed, contact support bruh!');
            });
    };

    //Decidiing whather we need to push or post check
    pushOrPost = (object, numberofOpenedChecks, pushObj, postObj) => {
        if (object.id <= numberofOpenedChecks) {
            postObj(object);
        } else if (object.id > numberofOpenedChecks) {
            pushObj(object);
        }
    };

    createObj(itemList, id, total = 0.0, tenderOption = 'Cash', closedBy = 'Jane Doe') {
        this.setState({
            checkToImport: {
                id: id,
                closedBy: closedBy,
                tenderOption: tenderOption,
                items: itemList,
                total: total,
                time: this.props.getTime()
            }
        });
    }

    // coded by milanblaz to here

    render() {
        return (
            <div className="screen-overlay">
                <div className="checkout-container">
                    <div className="left-checkout-container">
                    <div className="checkout-header">
                        <div>
                            <i
                                className="x icon cancel-icon"
                                onClick={e => {
                                    this.props.closeCheckout();
                                    this.props.getAllOpenedChecks();
                                    this.props.updateCheckID();
                                }}
                            />
                        </div>
                    </div>
                    <div className="checkout-body">
                        <div className="checkout-totals">
                            <div className="totals-box">
                                <div className="totals-box-description">Tip amount:</div>
                                <div className="totals-balance-due">${this.state.totalValue}</div>
                            </div>
                            
                        </div>
                            <div className="checkout-keypad">
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    1
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    2
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    3
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    4
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    5
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    6
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    7
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    8
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    9
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.delAll}>
                                    C
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    0
                                </button>
                                <button type="button" id="checkout-btn-ok" className="checkout-btn" onClick={this.enterAmount}>
                                    OK
                                </button>
                            </div>
                        <div className="checkout-tender">
                            <button
                                type="button"
                                className="bottom-btn"
                                id="tender-btn"
                                onClick={e => {
                                    this.pushOrPost(
                                        this.state.checkToImport,
                                        this.state.checks.length,
                                        this.postToServer,
                                        this.putToServer
                                    );
                                }}
                            >
                                SAVE
                            </button>
                            <button type="button" className="bottom-btn" id="checkout-btn-close">
                                CLOSE
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="right-checkout-container">
                        <div className="tender-container tender-cash">
                            <div className="tender-container-heading"><i class="money bill alternate outline icon"></i> Cash</div>
                            <button><i class="dollar sign icon"></i> 5</button>
                            <button><i class="dollar sign icon"></i> 10</button>
                            <button><i class="dollar sign icon"></i> 20</button>
                            <button> <i class="dollar sign icon"></i> 50</button>
                            <button><i class="dollar sign icon"></i> 100</button>
                        </div>
                        <div className="tender-container tender-cc">
                            <div className="tender-container-heading"><i class="credit card outline icon"></i> Credit</div>
                            <button>Visa</button>
                            <button>Master Card</button>
                            <button>Amex</button>
                            <button>Discover</button><button>tender</button>
                        </div>
                        <div className="tender-container tender-discounts">
                        <div className="tender-container-heading"><i class="handshake icon"></i> Discount</div>
                            <button>House Account</button>
                            <button>10%</button>
                            <button>20%</button>
                            <button>50%</button>
                            <button>100%</button>
                            <button>Custom</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
