import React from 'react';
import Login from './Login/Login';
import MainMenu from './MainMenu/MainMenu';
import Register from './Register/Register';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setOrderedItem = this.setOrderedItem.bind(this);
        this.setLoggedInEmp = this.setLoggedInEmp.bind(this);
        this.voidCheck = this.voidCheck.bind(this);
        this.logging = this.logging.bind(this);
        this.mainMenu = this.mainMenu.bind(this);
        this.loadRegister = this.loadRegister.bind(this);
        this.floatingLogo = this.floatingLogo.bind(this);
        this.state = {
            loadedComponent: 'Register',
            orderedItems: [],
            loggedInEmp: ' '
        };
    }
    // Login Component controller
    logging() {
        this.setState({
            loadedComponent: 'Login'
        });
    }
    mainMenu() {
        this.setState({
            loadedComponent: 'mainMenu'
        });
    }
    loadRegister() {
        this.setState({
            loadedComponent: 'Register'
        });
    }
    floatingLogo() {
        this.setState({
            loadedComponent: 'FloatingScreen'
        });
    }

    //------------ Setting Ordered Items so they dont delete everytime emp logs out
    getCurrentIndexOfObject(objArray, newObj) {
        for (let i = 0; i < objArray.length; i++) {
            if (newObj.name === objArray[i].name) {
                return i;
            }
        }

        return -1;
    }

    setOrderedItem(objArray, newObj) {
        const currentIndex = this.getCurrentIndexOfObject(objArray, newObj);
        let setter = objArray;

        if (currentIndex > -1) {
            setter[currentIndex].qty = objArray[currentIndex].qty + 1;
            this.setState({ orderedItems: setter });
        } else {
            setter.push(newObj);
            this.setState({ orderedItems: setter });
        }
    }

    updateOrderedItems = objArray => {
        this.setState({ orderedItems: objArray });
    };

    //------ Clear transaction ------//
    voidCheck(listOfItems) {
        let itemsHolder = listOfItems;
        const result = itemsHolder.filter(itemsHolder => itemsHolder.flagged === false);
        this.setState({
            orderedItems: result
        });
    }

    //------- Set logged in employee -------//
    setLoggedInEmp(e) {
        this.setState({
            loggedInEmp: e
        });
    }

    render() {
        if (this.state.loadedComponent === 'Login') {
            return (
                <div>
                    <Login
                        mainMenu={this.mainMenu}
                        loggedInEmp={this.state.loggedInEmp}
                        setLoggedInEmp={this.setLoggedInEmp}
                    />
                </div>
            );
        } else if (this.state.loadedComponent === 'mainMenu') {
            return (
                <div>
                    <MainMenu loadRegister={this.loadRegister} />
                </div>
            );
        } else if (this.state.loadedComponent === 'Register') {
            return (
                <div>
                    <Register
                        logging={this.logging}
                        setOrderedItem={this.setOrderedItem}
                        items={this.state.orderedItems}
                        voidCheck={this.voidCheck}
                        loggedInEmp={this.state.loggedInEmp}
                        updateOrderedItems={this.updateOrderedItems}
                    />
                </div>
            );
        }
    }
}
export default App;
