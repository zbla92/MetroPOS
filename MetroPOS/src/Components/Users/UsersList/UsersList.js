import React from 'react';
import './UsersList.css';

const UsersList = ({ employeesList }) => {
	const renderEmps = employeesList.map(e => {
		return (
			<div className="users_user_container" key={e.id}>
				<div className="users_list_name">{e.name}</div>
				<div className="users_list_id">{e.id}</div>
				<div className="users_list_action_bntns">
					<ul className="users_navigation_list">
						<li>Edit</li>
						<li>Delete</li>
					</ul>
				</div>
			</div>
		);
	});

	return <div>{renderEmps}</div>;
};

export default UsersList;
