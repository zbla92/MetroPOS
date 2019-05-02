import "../css/Login.css";
import img from "../css/imgs/logo.png";
import React, { useState } from "react";
import Clock from "./Clock";
import employees from "../data/emps/people.json";

function Login(props) {
  const [keyCode, setKeyCode] = useState("");
  let [loggedInEmp, setLoggedInEmp] = useState(null);

  const logIn = () => {
    setLoggedInEmp(
      (loggedInEmp = employees.emp.filter(emp => emp.id === parseInt(keyCode)))
    );
    console.log(loggedInEmp);
    if (!loggedInEmp.length) {
      alert("Key code invalid! Try again.");
      setKeyCode("");
    } else {
      props.logging();
    }
  };

  const codeEntry = e => {
    setKeyCode(keyCode.concat(e.target.textContent));
    document.querySelector(".dots").innerHTML += "* ";
    /* TODO - figure out how to parse	&#11044; properly */
  };

  const delEntry = () => {
    setKeyCode("");
    document.querySelector(".dots").innerHTML = "";
  };

  return (
    <div className="container-login">
      <div className="login-header">
        Metro POS
        <span className="clock">
          <Clock />
        </span>
      </div>
      <div className="row logo-container">
        <div className="login-message">
          Please enter your <br />
          <br />
          <span className="passcode">passcode</span>
        </div>
      </div>
      <div className="login-display">
        <span className="dots" />
      </div>
      <div className="row" />
      <div className="row" />
      <div className="row" />
      <div className="ui three column grid center-class ">
        <div className="row new-row">
          <button type="button" className="btn-login" onClick={codeEntry}>
            1
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            2
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            3
          </button>
        </div>
        <div className="row new-row">
          <button type="button" className="btn-login" onClick={codeEntry}>
            4
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            5
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            6
          </button>
        </div>
        <div className="row new-row">
          <button type="button" className="btn-login" onClick={codeEntry}>
            7
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            8
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            9
          </button>
        </div>
        <div className="row new-row">
          <button type="button" className="btn-login" onClick={delEntry}>
            del
          </button>
          <button type="button" className="btn-login" onClick={codeEntry}>
            0
          </button>
          <button
            type="button"
            className="btn-login"
            onClick={() => {
              logIn();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
