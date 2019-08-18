import React from 'react';
import './CreateNewEmp.css';

class CreateNewEmp extends React.Component {
	render() {
		return (
			<div className="CreateNewEmp_container">
				<div className="CreateNewEmp_content_container">
					<div className="CreateNewEmp_left">
						<div className="ui segment">Name</div>
						<div className="ui segment">Id</div>
						<div className="ui segment">Username</div>
						<div className="ui segment">Role</div>
						<div className="ui segment">E-mail</div>
						<div className="ui segment">Phone</div>
						<div className="ui segment">Birth Day</div>
						<div className="ui segment">Active</div>
					</div>
					<div className="CreateNewEmp_right">right container</div>
				</div>
			</div>
		);
	}
}
export default CreateNewEmp;
