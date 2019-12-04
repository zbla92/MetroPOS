import './register.css';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Clock from '../Clock';
import fetchSubmenus from '../../apis/menus';
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
			activeMenu: '',
			checkoutOpen: false,
			tablesOpen: false,
			openedTables: [],
			newCheckID: -1,
			allTables: [],
			tip: 0.0,
			menus: ''
		};
	}

	// calling methors on mounting register
	componentDidMount() {
		// Fetching opened checks from server DB
		this.getAllOpenedChecks();
		this.fetchAllMenus();
	}

	// Setting active menu, on submenu click, state will change causing chain reaction to render selected submenu
	setActiveMenu = e => {
		this.setState({ activeMenu: e });
	};

	// Mounting Checout component
	goCheckout = () => {
		if (this.props.items.length > 0) this.setState({ checkoutOpen: true });
	};

	// This will change state that will trigger Table componenet to mount
	goTables = () => {
		if (this.state.tablesOpen) {
			this.setState({ tablesOpen: false });
		} else {
			this.setState({ tablesOpen: true });
		}
	};

	//METHODS USED BY TABLE MAINLY -------------------------------
	//If State tablesOpen is True - Tables componenet will mount
	listenTables = () => {
		if (this.state.tablesOpen) {
			return (
				<Tables
					openedTables={this.state.openedTables}
					updateOrderedItems={this.props.updateOrderedItems}
					setCheckID={this.props.setCheckID}
					updateTip={this.updateTip}
				/>
			);
		}
	};

	updateTip = e => {
		this.setState({ tip: e });
	};
	//METHODS USED BY CHECKOUT MAINLY -------------------------------

	// method to close unload checkout component
	closeCheckout = () => {
		this.setState({
			checkoutOpen: false,
			tip: 0.0
		});
		// Moving this action on top of the stack so everything can be first pushed to the json Server - once it is on the server  Updating check ID as well as getting all opened talbes will performed
		// setTimeout(e => {
		//     this.getAllOpenedChecks();
		//     this.props.updateCheckID();
		// }, 200);
	};

	getTipAmount = e => {
		if (e > 0) {
			this.setState({ tip: e });
		} else {
			this.setState({ tip: 0.0 });
		}
	};

	tipFormatter = amount => {
		let reformatted = amount;
		if (reformatted.length > 0) {
			return (parseFloat(reformatted) / 100).toFixed(2);
		} else return (0).toFixed(2);
	};

	// removing all items with class  "className"
	removeAllClassNames = className => {
		let el = document.getElementsByClassName(className);
		if (el.length > 0) {
			el[0].classList.remove('active-itm');
			if (el[0]) this.removeAllClassNames(className);
		}
	};

	//fetching opened checks from server db and storing in state of register component as openedtables, and newCheckID is ID for check that is available to be posted to server
	getAllOpenedChecks = () => {
		let url = 'http://localhost:3001/checks';
		axios.get(url).then(res => {
			let openedChecks = [];
			res.data.map(e => {
				if (!e.closedBy) {
					openedChecks.push(e);
				}
				return -1;
			});
			this.setState({ openedTables: openedChecks, allTables: res.data.length });
		});
	};

	// Fetching all menus from axios instance that is created in apis fodler ~ it needs to run at 3002 port
	fetchAllMenus = async () => {
		const response = await fetchSubmenus.get('/menus');
		this.setState({
			menus: response.data
		});
		this.setState({
			activeMenu: Object.values(this.state.menus)[4]
		});
	};

	render() {
		// Exported conditionally rendered component out of the DOM structure, increasing readability
		let checkout = null;
		if (this.state.checkoutOpen) {
			checkout = (
				<Checkout
					goCheckout={this.goCheckout}
					closeCheckout={this.closeCheckout}
					checkItems={this.props.items}
					loggedInEmp={this.props.loggedInEmp}
					updateOrderedItems={this.props.updateOrderedItems}
					getAllOpenedChecks={this.getAllOpenedChecks}
					updateCheckID={this.props.updateCheckID}
					checkID={this.props.checkID}
					openedTables={this.state.openedTables}
					reRend={this.reRend}
					getTime={this.props.getTime}
					allTables={this.state.allTables}
					tipFormatter={this.tipFormatter}
					getTipAmount={this.getTipAmount}
					tip={this.state.tip}
				/>
			);
		}

		return (
			<div>
				<div className="top-wide-container">
					<div className="info-bar">
						<Clock />
					</div>
					<div className="info-panel">
						<div className="logout-btn-container">
							<div className="left-info-container">
								<Link to="/">
									<button className="logout-btn" onClick={this.props.logging}>
										Logout
									</button>
								</Link>
								<p className="check-id">
									<i className="file alternate icon" />
									{this.props.checkID}
								</p>
							</div>
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
							<button className="btn-top">Dine In</button>
							<button className="btn-top">Delivery</button>
							<button
								className="btn-top"
								onClick={e => {
									this.goTables();
									this.getAllOpenedChecks();
								}}
							>
								Opened
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
							<TotalPrice items={this.props.items} tip={this.state.tip} />
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
							{checkout}
						</div>
					</div>
					<div className="main-right-container">
						<LoadSubmenu
							submenuName={this.state.activeMenu}
							setOrderedItem={this.props.setOrderedItem}
							items={this.props.items}
						/>
						<div className="submenu-selection-container ">
							<MenuButtons setActiveMenu={this.setActiveMenu} menus={this.state.menus} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Register;
