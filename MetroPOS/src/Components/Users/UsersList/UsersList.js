import React from 'react';
import './UsersList.css';
import employees from '../../../apis/employees';
import CreateNewEmployee from '../CreateNewEmp/CreateNewEmp';

const UsersList = ({ employeesList, getListOfEmps }) => {
	async function deleteEmployee(id) {
		await employees.delete(`/employees/${id}`);
		getListOfEmps();
	}

	const renderEmps = employeesList.map(e => {
		return (
			<div className="users_user_container" key={e.id}>
				<div className="users_list_name">{e.name}</div>
				<div className="users_list_id">{e.id}</div>
				<div className="users_list_action_bntns">
					<ul className="users_navigation_list">
						<li data-id={e.id}>Edit</li>
						<li data-id={e.id} onClick={e => deleteEmployee(e.target.dataset.id)}>
							Delete
						</li>
					</ul>
				</div>
			</div>
		);
	});

	return <div>{renderEmps}</div>;
};

export default UsersList;
