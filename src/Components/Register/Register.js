import './register.css';
import React from 'react';
import axios from 'axios';

import Clock from '../Clock';
import submenu from '../../data/menus/menu.json';
import TotalPrice from './TotalPrice/TotalPrice';
import LoadSubmenu from './LoadSubmenu/LoadSubmenu';
import MenuButtons from './MenuButtons/MenuButtons';
import ItemToCheck from './ItemToCheck/ItemToCheck';
import Checkout from './Checkout/Checkout';
import Tables from './Tables/Tables';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: Object.values(submenu)[4],
            checkoutOpen: false,
            tablesOpen: false,
            openedTables: []
        };
    }

    componentDidMount() {
        this.getAllOpenedChecks();
    }

    setActiveMenu = e => {
        this.setState({ activeMenu: e });
    };

    goCheckout = () => {
        if (this.props.items.length > 0) this.setState({ checkoutOpen: true });
    };

    goTables = () => {
        console.log('activated');
        if (this.state.tablesOpen) {
            this.setState({ tablesOpen: false });
        } else {
            this.setState({ tablesOpen: true });
        }
    };

    listenTables = () => {
        if (this.state.tablesOpen) {
            return <Tables openedTables={this.state.openedTables} updateOrderedItems={this.props.updateOrderedItems} />;
        }
    };

    closeCheckout = () => {
        this.setState({
            checkoutOpen: false
        });
    };

    removeAllClassNames = className => {
        let el = document.getElementsByClassName(className);
        if (el.length > 0) {
            el[0].classList.remove('active-itm');
            if (el[0]) this.removeAllClassNames(className);
        }
    };

    getAllOpenedChecks = () => {
        let url = 'http://localhost:3001/checks';
        axios.get(url).then(res => {
            this.setState({ openedTables: res.data });
            console.log('updated');
        });
    };

    render() {
        return (
            <div>
                <div className="top-wide-container">
                    <div className="info-bar">
                        <Clock />
                    </div>
                    <div className="info-panel">
                        <div className="logout-btn-container">
                            <button className="logout-btn" onClick={this.props.logging}>
                                Logout
                            </button>
                        </div>
                        <div className="info-logo">Metro POS</div>
                        <div className="logedin-user">
                            <i className="user icon" /> {this.props.loggedInEmp[0].name}
                        </div>
                    </div>
                </div>
                <div className="bottom-wide-container">
                    <div className="main-left-container floater-left">
                        <div className="display-buttons-container">
                            <button className="btn-top">To go</button>
                            <button className="btn-top">Tab</button>
                            <button className="btn-top">Delivery</button>
                            <button
                                className="btn-top"
                                onClick={e => {
                                    this.goTables();
                                }}
                            >
                                Number
                                {this.listenTables()}
                            </button>
                        </div>
                        <div className="item-container-header">
                            <div className="item-list-header">
                                <div className="item-name">Item</div>
                                <div className="item-info">
                                    <div className="item-qty">Qty</div>
                                    <div className="item-unit">Unit price</div>
                                    <div className="item-amount">Amount</div>
                                </div>
                            </div>
                        </div>
                        <div id="item-injection-place" className="item-container">
                            <ItemToCheck
                                items={this.props.items}
                                key={this.props.items.name}
                                updateOrderedItems={this.props.updateOrderedItems}
                            />
                        </div>
                        <div className="total-prices-box">
                            <TotalPrice items={this.props.items} />
                        </div>
                        <div className="display-buttons-container ">
                            <button
                                className="btn-top"
                                onClick={e => {
                                    this.props.voidCheck(this.props.items);
                                    this.removeAllClassNames('active-itm');
                                }}
                            >
                                Delete
                            </button>
                            <button className="btn-top">More</button>
                            <button className="btn-top">Send</button>
                            <button id="checkout-btn" className="btn-top" onClick={this.goCheckout}>
                                Checkout
                            </button>
                            {this.state.checkoutOpen ? (
                                <Checkout
                                    goCheckout={this.goCheckout}
                                    closeCheckout={this.closeCheckout}
                                    checkItems={this.props.items}
                                    loggedInEmp={this.props.loggedInEmp}
                                    updateOrderedItems={this.props.updateOrderedItems}
                                    getAllOpenedChecks={this.getAllOpenedChecks}
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="main-right-container">
                        <LoadSubmenu
                            submenuName={this.state.activeMenu}
                            setOrderedItem={this.props.setOrderedItem}
                            items={this.props.items}
                        />
                        <div className="submenu-selection-container">
                            <MenuButtons setActiveMenu={this.setActiveMenu} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
