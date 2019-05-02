import '../css/Login.css';
import img from '../css/imgs/logo.png'
import React from 'react';
import Clock from './Clock';


const Login = ({mainMenu}) => {
    return(
        <div className="container-login">
            <div className="login-header">
                Metro POS          <span className="clock"><Clock /></span>
            </div>
            <div className="row logo-container">
               <div className="login-message">Please enter your <br /><br /><span className="passcode">passcode</span>
               </div>
            </div>
            <div className="login-display">
                    <span>&#11044; &#11044; &#11044; &#11044;</span>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="ui three column grid center-class ">      
                <div className="row new-row">
                        <button type="button" className="btn-login">1</button>
                        <button type="button" className="btn-login">2</button>
                        <button type="button" className="btn-login">3</button>
                </div>
                <div className="row new-row">
                        <button type="button" className="btn-login">4</button>
                        <button type="button" className="btn-login">5</button>
                        <button type="button" className="btn-login">6</button>
                </div>
                <div className="row new-row">
                        <button type="button" className="btn-login">7</button>
                        <button type="button" className="btn-login">8</button>
                        <button type="button" className="btn-login">9</button>
                </div>
                <div className="row new-row">
                        <button type="button" className="btn-login">del</button>
                        <button type="button" className="btn-login">0</button>
                        <button type="button" className="btn-login" onClick={mainMenu}>OK</button>
                </div>
            </div>
        </div>
    );
}
export default Login;

