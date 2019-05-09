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
                .querySelector('.middle-dots')
                .getElementsByTagName('span');
            for (let i = 0; i < allDots.length; i++) {
                allDots[i].classList.add('animated', 'flash', 'fast');
                allDots[i].style.color = '#b33a3a';
            }

            setTimeout(() => {
                for (let i = 0; i < allDots.length; i++) {
                    allDots[i].style.color = '#c0c0c0';
                    allDots[i].classList = '';
                }
            }, 800);
        } else {
            mainMenu();
        }
    };

    const codeEntry = e => {
        if (keyCode.length < 4) {
            setKeyCode(keyCode.concat(e.target.textContent));
            let nthDot = document.querySelector(
                `.middle-dots span:nth-child(${dot})`
            );
            nthDot.classList.add('middle-dots-full');
            nthDot.style.color = '#659787';
            setDot(dot + 1);
        }
    };

    const delEntry = () => {
        if (dot > 1) {
            setKeyCode(keyCode.slice(0, keyCode.length - 1));
            let nthDot = document.querySelector(
                `.middle-dots span:nth-child(${dot - 1})`
            );
            nthDot.classList.remove('middle-dots-full');
            nthDot.style.color = '#c0c0c0';
            setDot(dot - 1);
        }
    };

    return (
        <div className="main-container">
            <div className="header-container">
                <div className="header-logo">Metro POS</div>
                <div className="header-clock">
                    <Clock />
                </div>
            </div>
            <div className="middle-container">
                <div className="middle-message">Please enter your passcode</div>
                <div className="middle-dots-container">
                    <span className="middle-dots">
                        <span>&#11044; </span>
                        <span>&#11044; </span>
                        <span>&#11044; </span>
                        <span>&#11044; </span>
                    </span>
                </div>
            </div>
            <div className="keypad-container">
                <button type="button" className="btn-login" onClick={codeEntry}>
                    1
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    2
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    3
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    4
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    5
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    6
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    7
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    8
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    9
                </button>
                <button
                    type="button"
                    className="btn-login btn-back"
                    onClick={delEntry}
                >
                    <img className="back-btn" src={img} alt="" />
                </button>
                <button type="button" className="btn-login" onClick={codeEntry}>
                    0
                </button>
                <button
                    type="button"
                    className="btn-login btn-go"
                    onClick={logIn}
                >
                    <div className="btn-go-overlay">
                        <i className="chevron right icon arrow-icon" />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Login;
