import '../css/main.css';
import img from '../css/imgs/logo.png'
import React from 'react';


const Login = ({logging}) => {
    return(
        <div className="container-login ">
            <div className="row">
                <img className="logo" src={img} alt="logo" />
            </div>
            <div className="login-display">
                    <span>&#11044; &#11044; &#11044; &#11044;</span>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row ">
                    <button type="button" className="btn-login">1</button>
                    <button type="button" className="btn-login">2</button>
                    <button type="button" className="btn-login">3</button>
            </div>
            <div className="row">
                    <button type="button" className="btn-login">4</button>
                    <button type="button" className="btn-login">5</button>
                    <button type="button" className="btn-login">6</button>
            </div>
            <div className="row">
                    <button type="button" className="btn-login">7</button>
                    <button type="button" className="btn-login">8</button>
                    <button type="button" className="btn-login">9</button>
            </div>
            <div className="row">
                    <button type="button" className="btn-login">del</button>
                    <button type="button" className="btn-login">0</button>
                    <button type="button" className="btn-login" onClick={logging}>OK</button>
            </div>
        </div>
    );
}
export default Login;

