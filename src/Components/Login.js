import "../css/menu.css";
import img from "../css/imgs/logo.png";
import React from "react";

const Login = ({ logging, codeEntry, delEntry }) => {
  return (
    <div className="container-login">
      <div className="login-header">Metro POS</div>
      <div className="row logo-container">
        <div className="login-message">
          Please enter your <br />
          <br />
          <span className="passcode">passcode</span>
        </div>
      </div>
      <div className="login-display">
        <span>&#11044; &#11044; &#11044;</span>
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
          <button type="button" className="btn-login">
            0
          </button>
          <button type="button" className="btn-login" onClick={logging}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
