import React from 'react';
import './CreateNewEmp.css';

import employees from '../../../apis/employees';

const initialState = {
	name: '',
	id: '',
	city: '',
	street: '',
	suite: '',
	email: '',
	phoneNumber: '',
	role: '',
	nameErr: '',
	idErr: '',
	roleErr: '',
	cityErr: '',
	emailErr: '',
	phoneNumberErr: '',
	styles: {
		err: { fontSize: 12, color: 'red', marginLeft: '5px' }
	}
};

class CreateNewEmp extends React.Component {
	state = initialState;

	onSubmit = e => {
		e.preventDefault();
		console.log('called n submit');

		const isValid = this.validateForm();
		if (isValid) {
			// prepare the object and push it to server
			this.pushCreatedEmpToServer(this.generateEmpObj());
			// reset state to initial state
			this.setState(initialState);
			// Close out the form after submittion
			this.props.renderCreateNewEmp();
		}
	};

	handleChange = e => {
		console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	pushCreatedEmpToServer = async obj => {
		await employees.post('/employees', obj).catch(err => alert(err + ' Please contact your support'));
		// update list for parent component so the newly created emp shows up in the list
		this.props.getListOfEmps();
	};

	validateForm() {
		let nameErr = '';
		let idErr = '';
		let cityErr = '';
		let emailErr = '';
		let phoneNumberErr = '';
		let roleErr = '';

		//INPUT LOGIC
		//name
		if (this.state.name.length < 1) {
			nameErr = 'Name msut be at least 2 characters long.';
		}
		//id
		if (this.state.id.length !== 4) {
			idErr = 'ID must be a 4 digit number';
		}
		//role
		if (this.state.role.length < 1) {
			roleErr = 'Please select valid role';
		}
		//City
		if (this.state.city.length < 1) {
			cityErr = 'City must be at least 2 characters long';
		}
		// phone
		if (this.state.phoneNumber.length < 8) {
			phoneNumberErr = 'Phone Number must be at least 9 digit long.';
		}
		//email
		if (!this.state.email.includes(`@`)) {
			emailErr = 'Invalid email';
		}
		//OUTPUT LOGIC
		if (nameErr || idErr || roleErr || cityErr || emailErr || phoneNumberErr) {
			this.setState({ nameErr, roleErr, emailErr, idErr, cityErr, phoneNumberErr });
			return false;
		}

		return true;
	}

	generateEmpObj() {
		const employeeObj = {
			name: this.state.name,
			id: +this.state.id,
			role: this.state.role,
			address: {
				city: this.state.city,
				street: this.state.street,
				suite: this.state.suite
			},
			email: this.state.email,
			phoneNumber: this.state.phoneNumber
		};
		return employeeObj;
	}

	render() {
		return (
			<div className="CreateNewEmp_container">
				<div className="CreateNewEmp_content_container">
					<div className="CreateNewEmp_left">
						<div className="CreateNewEmp_employee_editor">Employee editor</div>
						<form className="ui form" onSubmit={this.onSubmit}>
							<div className="field">
								<label>Full Name</label>
								<input
									type="text"
									name="name"
									placeholder="Full Name"
									value={this.state.name}
									onChange={e => this.handleChange(e)}
								/>
								<div style={this.state.styles.err}>{this.state.nameErr}</div>
							</div>
							<div className="fields">
								<div className="eight wide field">
									<label>ID</label>
									<input
										type="number"
										name="id"
										placeholder="ID"
										value={this.state.id}
										onChange={e => {
											this.handleChange(e);
										}}
									/>
									<div style={this.state.styles.err}>{this.state.idErr}</div>
								</div>
								<div className="eight wide field">
									<label>Role</label>
									<div className="">
										<div className="field">
											<select
												className="ui fluid search dropdown"
												name="role"
												onChange={e => this.handleChange(e)}
											>
												<option value="">Default</option>
												<option value="Manager">Manager</option>
												<option value="Shift Lead">Shift Lead</option>
												<option value="Bartender">Bartender</option>
												<option value="Driver">Driver</option>
												<option value="Server">Server</option>
											</select>
											<div style={this.state.styles.err}>{this.state.roleErr}</div>
										</div>
									</div>
								</div>
							</div>

							<div className="fields">
								<div className="seven wide field">
									<label>Address</label>
									<input
										type="text"
										name="city"
										maxLength="25"
										placeholder="City"
										value={this.state.city}
										onChange={e => {
											this.handleChange(e);
										}}
									/>
									<div style={this.state.styles.err}>{this.state.cityErr}</div>
								</div>
								<div className="seven wide field">
									<label>Street</label>
									<input
										type="text"
										name="street"
										maxLength="25"
										placeholder="Street"
										value={this.state.street}
										onChange={e => {
											this.handleChange(e);
										}}
									/>
									<div style={this.state.styles.err}>{this.state.streetErr}</div>
								</div>
								<div className="two wide field">
									<label>Suite</label>
									<input
										type="number"
										name="suite"
										maxLength="3"
										placeholder="Suite"
										value={this.state.suite}
										onChange={e => {
											this.handleChange(e);
										}}
									/>
									<div style={this.state.styles.err}>{this.state.suiteErr}</div>
								</div>
							</div>
							<div className="field">
								<label>E-mail</label>
								<input
									type="email"
									name="email"
									placeholder="name@gmail.com"
									value={this.state.email}
									onChange={e => this.handleChange(e)}
								/>
								<div style={this.state.styles.err}>{this.state.emailErr}</div>
							</div>
							<div className="field">
								<label>Phone Number</label>
								<input
									type="text"
									name="phoneNumber"
									placeholder="Phone Number"
									value={this.state.phoneNumber}
									onChange={e => this.handleChange(e)}
								/>
								<div style={this.state.styles.err}>{this.state.phoneNumberErr}</div>
							</div>
							<button id="buttoncic" className="ui button" type="submit">
								Save
							</button>
							<button id="buttoncicca" className="ui button" onClick={this.props.renderCreateNewEmp}>
								Cancel
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default CreateNewEmp;
