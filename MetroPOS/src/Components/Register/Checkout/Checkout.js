import React, { Component } from 'react';
import checks from '../../../apis/checks';
import './checkout.css';

import TenderLoader from './TenderLoader/TenderLoader';

export class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.checkID,
            creditCard: '',
            checks: [],
            checkItems: [],
            checkToImport: {},
            tendered: '',
            tenderSelector: 'tip',
            benjaminSize: 0
        };
    }

    componentDidMount() {
        const totalValue = document.getElementById('total-value').innerHTML;
        // Getting all opened checks
        this.props.getAllOpenedChecks();
        this.setState({ checkItems: this.props.checkItems, checks: this.props.openedTables });
        // Building object to inject
        this.createObj(this.props.checkItems, this.state.id, totalValue, 'amex', this.props.tip);
    }
    //------------------------------------------------------
    enterAmount = e => {
        if (this.state.tenderSelector === 'tip' && this.state.tendered.length < 6) {
            this.setState({
                tendered: this.state.tendered.concat(e.target.textContent)
            });
        } else if (this.state.tenderSelector === 'creditCard' && this.state.creditCard.length < 16) {
            this.setState({
                creditCard: this.state.creditCard.concat(e.target.textContent)
            });
        }
    };

    delDigit = () => {
        // If TIP component is ACTIVE C button is deleting TIP amount digits
        if (this.state.tenderSelector === 'tip') {
            this.setState({
                tendered: this.state.tendered.substring(0, this.state.tendered.length - 1)
            });
            // If CreditCard component is ACTIVE C button is deleting CC number  digit
        } else if (this.state.tenderSelector === 'creditCard') {
            this.setState({
                creditCard: this.state.creditCard.substring(0, this.state.creditCard.length - 1)
            });
        }
    };

    delAll = () => {
        this.setState({
            tendered: ''
        });
    };
    //------------------------------------------------------
    // reused from RenderItemToCheck
    toggleClass(el, className) {
        if (el) {
            el.classList.toggle(className);
        }
    }

    clearCurrentItems(func) {
        const emptyArr = [];
        func(emptyArr);
    }

    //Pushing new  check that will gain new ID on server side
    postToServer = object => {
        checks.post('/checks', object).catch(error => alert(error + ' Please contact your support!'));
        this.clearCurrentItems(this.props.updateOrderedItems);
    };

    putToServer = object => {
        checks.put(`/checks/${this.state.id}`, object).catch(error => alert(error + ' Please contact your support'));
        this.clearCurrentItems(this.props.updateOrderedItems);
    };

    //Decidiing whather we need to push or post check
    pushOrPost = (object, allTables, pushObj, postObj) => {
        console.log(object.id + '   ' + allTables);
        if (object.id <= allTables) {
            postObj(object);
        } else if (object.id > allTables) {
            pushObj(object);
        }
        setTimeout(e => {
            this.props.getAllOpenedChecks();
        }, 1);
        setTimeout(e => {
            this.props.updateCheckID();
        }, 1);
    };

    createObj(itemList, id, total = 0.0, tenderOption = 'Cash') {
        this.setState({
            checkToImport: {
                id: id,
                tenderOption: tenderOption,
                items: itemList,
                total: total,
                time: this.props.getTime()
            }
        });
    }

    //----------------------------------- Adding new properties to the check that will later be pushed to the server
    addClosedByToCheck(element, currentObj) {
        let newObj = currentObj;
        newObj.closedBy = element;
        this.setState({ checkToImport: newObj });
    }
    addTipToCheck(element, currentObj) {
        let newObj = currentObj;
        newObj.tip = element;
        this.setState({ checkToImport: newObj });
    }
    addCCtoCheck(element, currentObj) {
        let newObj = currentObj;
        newObj.creditCard = element;
        this.setState({ checkToImport: newObj });
    }
    addCashToCheck(element, currentObj) {
        let newObj = currentObj;
        newObj.cash = element;
        this.setState({ checkToImport: newObj });
    }

    //--------------------------------------------------------------------------------------------------------------

    tenderComponentsetter = e => {
        this.setState({ tenderSelector: e });
    };

    doYourThang = e => {
        try {
            if (this.state.tenderSelector === 'tip') {
                this.props.getTipAmount(this.props.tipFormatter(e));
            } else if (this.state.tenderSelector === 'creditCard') {
                // Check if CC is valid
                // Allow cashier to save the check if CC is valid
                console.log('Authorization complete');
                this.addCCtoCheck(this.state.creditCard, this.state.checkToImport);
            } else if (this.state.tenderSelector === 'cash') {
                console.log('OPEN DRAWER');
                this.addCashToCheck(document.getElementById('total-value').innerHTML, this.state.checkToImport);
            }
        } catch (err) {
            console.log(err);
        }
    };

    stateSetter = value => {
        this.setState({ benjaminSize: value });
    };

    //----------General Purpose Methods -------------------//

    render() {
        return (
            <div className="screen-overlay">
                <div className="checkout-container animated fadeInUp">
                    <div className="left-checkout-container">
                        <div className="checkout-header">
                            <div>
                                <i
                                    className="x icon cancel-icon"
                                    onClick={e => {
                                        this.props.closeCheckout();
                                        //this.clearCurrentItems(this.props.updateOrderedItems);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="checkout-body">
                            <div className="checkout-totals">
                                <div className="totals-box">
                                    <TenderLoader
                                        tipFormatter={this.props.tipFormatter}
                                        tendered={this.state.tendered}
                                        tenderSelector={this.state.tenderSelector}
                                        tipAmount={this.props.tip}
                                        benjaminSize={this.state.benjaminSize}
                                        creditCard={this.state.creditCard}
                                    />
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
                                <button
                                    type="button"
                                    className="checkout-btn"
                                    onClick={e => {
                                        this.delDigit();
                                    }}
                                >
                                    C
                                </button>
                                <button type="button" className="checkout-btn" onClick={this.enterAmount}>
                                    0
                                </button>
                                <button
                                    type="button"
                                    id="checkout-btn-ok"
                                    className="checkout-btn"
                                    onClick={e => {
                                        this.doYourThang(parseFloat(this.state.tendered).toFixed(2));
                                    }}
                                >
                                    OK
                                </button>
                            </div>
                            <div className="checkout-tender">
                                <button
                                    type="button"
                                    className="bottom-btn"
                                    id="tender-btn"
                                    onClick={e => {
                                        this.addTipToCheck(this.props.tip, this.state.checkToImport);
                                        this.pushOrPost(
                                            this.state.checkToImport,
                                            this.props.allTables,
                                            this.postToServer,
                                            this.putToServer
                                        );
                                        this.props.closeCheckout();
                                    }}
                                >
                                    Save check
                                </button>
                                <button
                                    type="button"
                                    className="bottom-btn"
                                    id="checkout-btn-close"
                                    onClick={e => {
                                        this.addClosedByToCheck(
                                            this.props.loggedInEmp[0].name,
                                            this.state.checkToImport
                                        );
                                        this.addTipToCheck(this.props.tip, this.state.checkToImport);
                                        this.pushOrPost(
                                            this.state.checkToImport,
                                            this.props.allTables,
                                            this.postToServer,
                                            this.putToServer
                                        );
                                        this.props.closeCheckout();
                                    }}
                                >
                                    Close check
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right-checkout-container">
                        <div className="tender-container tender-cash">
                            <div className="tender-container-heading">
                                <i className="money bill alternate outline icon" /> Cash
                            </div>
                            <button
                                id="5-cash"
                                className="tender-button"
                                onClick={e => {
                                    this.tenderComponentsetter('cash');
                                    this.stateSetter(5);
                                }}
                            >
                                <i className="dollar sign icon" /> 5
                            </button>
                            <button
                                id="10-cash"
                                className="tender-button"
                                onClick={e => {
                                    this.tenderComponentsetter('cash');
                                    this.stateSetter(10);
                                }}
                            >
                                <i className="dollar sign icon" /> 10
                            </button>
                            <button
                                id="20-cash"
                                className="tender-button"
                                onClick={e => {
                                    this.tenderComponentsetter('cash');
                                    this.stateSetter(20);
                                }}
                            >
                                <i className="dollar sign icon" /> 20
                            </button>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('cash');
                                    this.stateSetter(50);
                                }}
                            >
                                <i className="dollar sign icon" /> 50
                            </button>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('cash');
                                    this.stateSetter(100);
                                }}
                            >
                                <i className="dollar sign icon" /> 100
                            </button>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('cash');
                                    this.stateSetter(
                                        parseFloat(document.getElementById('total-value').innerHTML) + this.props.tip
                                    );
                                }}
                            >
                                Exact Cash
                            </button>
                        </div>
                        <div className="tender-container tender-cc">
                            <div className="tender-container-heading">
                                <i className="credit card outline icon" /> Credit
                            </div>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('creditCard');
                                }}
                            >
                                Visa
                            </button>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('creditCard');
                                }}
                            >
                                Master Card
                            </button>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('creditCard');
                                }}
                            >
                                Amex
                            </button>
                            <button
                                onClick={e => {
                                    this.tenderComponentsetter('creditCard');
                                }}
                            >
                                Discover
                            </button>
                        </div>
                        <div className="tender-container tender-discounts">
                            <div className="tender-container-heading">
                                <i className="handshake icon" /> Discount
                            </div>
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
