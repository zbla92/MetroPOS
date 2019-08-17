import React from 'react'
import './UsersList.css'
import employees from '../../../apis/employees'

const UsersList = () => {
  const response = employees
    .get('/employees')
    .catch(err => alert(err + ' Something went wrong!'))
  // const renderEmps = map.empList

  return (
    <div className='users_user_container'>
      <div className='users_list_name'>Milan Blaz</div>
      <div className='users_list_id'>1200</div>
      <div className='users_list_action_bntns'>
        <ul className='users_navigation_list'>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
    </div>
  )
}

export default UsersList
