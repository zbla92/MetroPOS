import React from 'react';
import Login from './Login';
import MainMenu from './MainMenu';
import Register from './Register';
import FloatingScreen from './FloatingScreen';

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
    setOrderedItem(e) {
        this.setState({
            orderedItems: [...this.state.orderedItems, e]
        });
    }

    //------ Clear transaction ------//
    voidCheck() {
        this.setState({
            orderedItems: []
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
                    />
                </div>
            );
        } else if (this.state.loadedComponent === 'FloatingScreen') {
            return (
                <div>
                    <FloatingScreen />
                </div>
            );
        }
    }
}
export default App;
