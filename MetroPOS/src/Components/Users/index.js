import React from 'react';
import './users.css';

// Loog of Creating new emp https://wperp-com.s3.amazonaws.com/uploads/2016/03/wp-erp-hrm-create-new-employee-e1540139652882.png
//look of loaded users component - differnet colors but pretty much that is it   https://cdn.dribbble.com/users/76870/screenshots/906356/list.png

class Users extends React.Component {
    render() {
        return (
            <div className="Users">
                <div className="users_top">
                    <div className="users_top_logo">LOGO</div>
                    <div className="users_top_logo">Employee Configuration</div>
                    <div className="users_top_logo">Info</div>
                </div>
                <div className="users_bottom">
                    <div className="users_left_panel">
                        <div className="users-left-btn-container">
                            <button className="users-button">Create new employee</button>
                        </div>
                    </div>
                    <div className="users_list_panel">
                        <div className="users_list_header">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search users..." />
                                <i className="circular search link icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Users;
