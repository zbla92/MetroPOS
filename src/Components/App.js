import React from "react";
import Login from "./Login";
import Menu from "./Menu";
import employees from "../data/emps/people.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logging = this.logging.bind(this);
    this.deLogging = this.deLogging.bind(this);
    this.codeEntry = this.codeEntry.bind(this);
    this.delEntry = this.delEntry.bind(this);
    this.state = {
      isLoggedIn: false,
      keyCode: ""
    };
  }

  logging() {
    if (
      this.state.keyCode.length !== 3 /*TODO - validate keycode against json*/
    ) {
      alert("Key code invalid! Try again.");
      this.setState({
        keyCode: ""
      });
    } else {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  deLogging() {
    this.setState({
      isLoggedIn: false
    });
  }

  codeEntry(e) {
    this.setState({
      keyCode: this.state.keyCode.concat(e.target.textContent)
    });
  }

  delEntry() {
    this.setState({
      keyCode: ""
    });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <Login
            logging={this.logging}
            codeEntry={this.codeEntry}
            delEntry={this.delEntry}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Menu deLogging={this.deLogging} />
        </div>
      );
    }
  }
}
export default App;
