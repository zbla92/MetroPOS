import React from "react";
import Login from "./Login";
import MainMenu from "./MainMenu";
import Register from "./Register";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logging = this.logging.bind(this);
    this.mainMenu = this.mainMenu.bind(this);
    this.loadRegister = this.loadRegister.bind(this);
    this.state = { loadedComponent: "Login" };
  }
  // Login Component controller
  logging() {
    this.setState({
      loadedComponent: "Login",
    });
  }
  mainMenu() {
    this.setState({
      loadedComponent: "mainMenu",
    });
  }

  // MainMenu Component controller-------------
  loadRegister() {
    this.setState({
      loadedComponent: "Register",
    });
  }

  render() {
    if (this.state.loadedComponent === "Login") {
      return (
        <div>
          <Login mainMenu={this.mainMenu} />
        </div>
      );
    } else if (this.state.loadedComponent === "mainMenu") {
      return (
        <div>
          <MainMenu loadRegister={this.loadRegister} />
        </div>
      );
    } else if (this.state.loadedComponent === "Register") {
      return (
        <div>
          <Register />
        </div>
      );
    }
  }
}
export default App;
