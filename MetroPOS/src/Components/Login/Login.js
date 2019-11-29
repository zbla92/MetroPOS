import './Login.css';
import img from './img/back.png';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Clock from '../Clock';

// const Login = (history, setLoggedInEmp, employeesList) => {};

function Login({ history, setLoggedInEmp, employeesList }) {
	const [keyCode, setKeyCode] = useState('');
	let [dot, setDot] = useState(1);

	// Method compares entered keycode to database values and saves the logged in employee to App state
	const logIn = empList => {
		let loggedIn = empList.filter(emp => emp.id === parseInt(keyCode));
		setLoggedInEmp(loggedIn);

		// If no employee is found that matches the entered keycode, reset the component state
		if (!loggedIn.length) {
			setKeyCode('');
			setDot(1);
			dotsRedFlash();
		} else {
			history.push('/MainMenu');
		}
	};

	// Method adds digits to component state
	const codeEntry = e => {
		if (keyCode.length < 4) {
			setKeyCode(keyCode.concat(e.target.textContent));
			setDot(dot + 1);
			dotGreenFill();
		}
	};

	// Method removes digits from component state
	const delEntry = () => {
		if (dot > 1) {
			setKeyCode(keyCode.slice(0, keyCode.length - 1));
			setDot(dot - 1);
			dotGreenFillClear();
		}
	};

	/* ---------- UI (visual) methods ---------- */

	// Method provides red dots flash animation when incorrect keycode is attempted
	const dotsRedFlash = () => {
		const allDots = document.querySelector('.middle-dots').getElementsByTagName('span');
		for (let i = 0; i < allDots.length; i++) {
			allDots[i].classList.add('animated', 'flash', 'fast');
			allDots[i].style.color = '#b33a3a';
			setTimeout(() => {
				for (let i = 0; i < allDots.length; i++) {
					allDots[i].style.color = '#c0c0c0';
					allDots[i].classList = '';
				}
			}, 800);
		}
	};

	// Method provides green fill animation as keycode digits are being entered
	const dotGreenFill = () => {
		let nthDot = document.querySelector(`.middle-dots span:nth-child(${dot})`);
		nthDot.classList.add('middle-dots-full');
		nthDot.style.color = '#659787';
	};

	// Method removes green fill as clear button is being pressed
	const dotGreenFillClear = () => {
		let nthDot = document.querySelector(`.middle-dots span:nth-child(${dot - 1})`);
		nthDot.classList.remove('middle-dots-full');
		nthDot.style.color = '#c0c0c0';
	};

	return (
		<div className="main-container animated fadeIn ">
			<div className="header-container">
				<div className="header-logo">Metro POS</div>
				<div className="header-clock">
					<Clock />
				</div>
			</div>
			<div className="middle-container">
				<div className="middle-message">Please enter your passcode</div>
				<div className="middle-dots-container">
					<div className="middle-dots">
						<span>&#11044; </span>
						<span>&#11044; </span>
						<span>&#11044; </span>
						<span>&#11044; </span>
					</div>
				</div>
			</div>
			<div className="keypad-container">
				<button type="button" className="btn-login " onClick={codeEntry}>
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
				<button type="button" className="btn-login btn-back" onClick={delEntry}>
					<img className="back-btn" src={img} alt="" />
				</button>
				<button type="button" className="btn-login" onClick={codeEntry}>
					0
				</button>
				<button type="button" className="btn-login btn-go" onClick={() => logIn(employeesList)}>
					<div className="btn-go-overlay">
						<i className="chevron right icon arrow-icon" />
					</div>
				</button>
			</div>
		</div>
	);
}

export default withRouter(Login);
