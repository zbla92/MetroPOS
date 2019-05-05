import '../css/Login.css';
import img from '../css/imgs/back.png';
import React, { useState } from 'react';
import Clock from './Clock';
import employees from '../data/emps/people.json';

function Login({ mainMenu }) {
    const [keyCode, setKeyCode] = useState('');
    let [loggedInEmp, setLoggedInEmp] = useState(null);
    let [dot, setDot] = useState(1);

    const logIn = () => {
        setLoggedInEmp(
            (loggedInEmp = employees.emp.filter(
                emp => emp.id === parseInt(keyCode)
            ))
        );
        if (!loggedInEmp.length) {
            setKeyCode('');
            setDot(1);
            const allDots = document
                .querySelector('.dots')
                .getElementsByTagName('span');
            for (let i = 0; i < allDots.length; i++) {
                allDots[i].classList.add('animated');
                allDots[i].classList.add('flash');
                allDots[i].style.transitionProperty = 'color';
                allDots[i].style.transitionDuration = '0.3s';
                allDots[i].style.color = '#b33a3a';
            }

            setTimeout(() => {
                for (let i = 0; i < allDots.length; i++) {
                    allDots[i].style.color = '#c0c0c0';
                    allDots[i].classList = '';
                }
            }, 1000);
        } else {
            mainMenu();
        }
    };

    const codeEntry = e => {
        if (keyCode.length < 4) {
            setKeyCode(keyCode.concat(e.target.textContent));
            let nthDot = document.querySelector(`.dots span:nth-child(${dot})`);
            nthDot.classList.add('dots-full');
            nthDot.style.color = '#0c7942';
            setDot(dot + 1);
        }
    };

    const delEntry = () => {
        if (dot > 1) {
            setKeyCode(keyCode.slice(0, keyCode.length - 1));
            let nthDot = document.querySelector(
                `.dots span:nth-child(${dot - 1})`
            );
            nthDot.classList.remove('dots-full');
            nthDot.style.color = '#c0c0c0';
            setDot(dot - 1);
        }
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
                <span className="dots">
                    <span>&#11044; </span>
                    <span>&#11044; </span>
                    <span>&#11044; </span>
                    <span>&#11044; </span>
                </span>
            </div>
            <div className="row" />
            <div className="row" />
            <div className="row" />
            <div className="ui three column grid center-class ">
                <div className="row new-row">
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        1
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        2
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        3
                    </button>
                </div>
                <div className="row new-row">
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        4
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        5
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        6
                    </button>
                </div>
                <div className="row new-row">
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        7
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        8
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        9
                    </button>
                </div>
                <div className="row new-row">
                    <button
                        type="button"
                        className="btn-login btn-back"
                        onClick={delEntry}
                    >
                        <img className="back-btn" src={img} />
                    </button>
                    <button
                        type="button"
                        className="btn-login"
                        onClick={codeEntry}
                    >
                        0
                    </button>
                    <button
                        type="button"
                        className="btn-login "
                        onClick={logIn}
                    >
                        <span className="go">
                            &nbsp;>
                            <i className="chevron right icon arrow-icon" />
                            &nbsp;
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login;
