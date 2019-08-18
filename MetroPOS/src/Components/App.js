import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login/Login';
import MainMenu from './MainMenu/MainMenu';
import Register from './Register/Register';
import Users from './Users';
import employeeList from '../apis/employees';
import transaction from '../apis/checks';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loadedComponent: 'Login',
			orderedItems: [],
			loggedInEmp: ' ',
			checkID: 0,
			employeeList: ''
		};
	}
	//----------------------- Methods to manipulate components loading / unloading-------//
	componentDidMount() {
		this.updateCheckID();
		this.getListOfEmps();
	}

	//get list of employees from the server so login can work
	getListOfEmps = async () => {
		const response = await employeeList.get('/employees');
		this.setState({
			employeeList: response.data
		});
	};

	// Login Component controller
	logging = () => {
		this.setState({
			loadedComponent: 'Login'
		});
	};
	mainMenu = () => {
		this.setState({
			loadedComponent: 'mainMenu'
		});
	};
	loadRegister = () => {
		this.setState({
			loadedComponent: 'Register'
		});
	};
	floatingLogo = () => {
		this.setState({
			loadedComponent: 'FloatingScreen'
		});
	};

	//------------ Setting Ordered Items so they dont delete everytime emp logs out
	// Aleksej Todorovic contributed to this method
	getCurrentIndexOfObject = (objArray, newObj) => {
		for (let i = 0; i < objArray.length; i++) {
			if (newObj.name === objArray[i].name) {
				return i;
			}
		}

		return -1;
	};

	setOrderedItem = (objArray, newObj) => {
		const currentIndex = this.getCurrentIndexOfObject(objArray, newObj);
		let setter = objArray;

		if (currentIndex > -1) {
			setter[currentIndex].qty = objArray[currentIndex].qty + 1;
			this.setState({ orderedItems: setter });
		} else {
			setter.push(newObj);
			this.setState({ orderedItems: setter });
		}
	};
	//-----------------------------------------------------//
	// Method used to completely change ordered items.
	updateOrderedItems = objArray => {
		this.setState({ orderedItems: objArray });
	};

	updateCheckID = async () => {
		const response = await transaction.get('/checks');
		this.setState({ checkID: response.data.length + 1 });
	};
	setCheckID = id => {
		this.setState({ checkID: id });
	};

	//------ Clear transaction ------//
	voidCheck = listOfItems => {
		let itemsHolder = listOfItems;
		const result = itemsHolder.filter(itemsHolder => itemsHolder.flagged === false);
		this.setState({
			orderedItems: result
		});
	};

	//------- Set logged in employee -------//
	setLoggedInEmp = e => {
		this.setState({
			loggedInEmp: e
		});
	};
	//------- Time And Date methods -------//
	getTime = () => {
		const date = new Date();
		const h = this.renderTime(date.getHours());
		const m = this.renderTime(date.getMinutes());
		return `${h}:${m}`;
	};

	getDate = () => {
		const date = new Date();
		const y = date.getFullYear();
		const m = date.getMonth();
		const d = date.getDay();
		return `${y} / ${m} / ${d}`;
	};

	renderTime(e) {
		return e > 9 ? e : `0` + e;
	}

	render() {
		return (
			<BrowserRouter>
				<Route
					exact
					path="/"
					render={() => (
						<Login
							mainMenu={this.mainMenu}
							loggedInEmp={this.state.loggedInEmp}
							setLoggedInEmp={this.setLoggedInEmp}
							employeesList={this.state.employeeList}
						/>
					)}
				/>
				<Route exact path="/MainMenu" component={MainMenu} />
				<Route
					exact
					path="/Register"
					render={() => (
						<Register
							logging={this.logging}
							setOrderedItem={this.setOrderedItem}
							items={this.state.orderedItems}
							voidCheck={this.voidCheck}
							loggedInEmp={this.state.loggedInEmp}
							updateOrderedItems={this.updateOrderedItems}
							checkID={this.state.checkID}
							updateCheckID={this.updateCheckID}
							setCheckID={this.setCheckID}
							getTime={this.getTime}
						/>
					)}
				/>
				<Route exact path="/Users" render={() => <Users employeesList={this.state.employeeList} />} />
			</BrowserRouter>
		);
	}
}
export default App;
