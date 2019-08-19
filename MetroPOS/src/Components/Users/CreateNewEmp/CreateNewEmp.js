import React from 'react'
import './CreateNewEmp.css'

import employees from '../../../apis/employees'

class CreateNewEmp extends React.Component {
  constructor (props) {
    super(props)
  }
  onSubmit = e => {
    e.preventDefault()
    this.pushCreatedEmpToServer(this.generateEmpObj())
  }

  generateEmpObj () {
    const getInput = document.querySelector('form').elements
    const employeeObj = {
      name: getInput[0].value,
      id: +getInput[1].value,
      address: {
        city: getInput[2].value,
        street: getInput[3].value,
        suite: getInput[4].value
      }
    }
    return employeeObj
  }

  pushCreatedEmpToServer (obj) {
    employees.post('/employees', obj)
  }

  formValidation () {
    const getInput = document.querySelector('form').elements
  }

  render () {
    return (
      <div className='CreateNewEmp_container'>
        <div className='CreateNewEmp_content_container'>
          <div className='CreateNewEmp_left'>
            <div className='CreateNewEmp_employee_editor'>Employee editor</div>
            <form className='ui form'>
              <div className='field'>
                <label>Full Name</label>
                <input type='text' name='full_name' placeholder='Full Name' />
              </div>
              <div className='fields'>
                <div className='eight wide field'>
                  <label>ID</label>
                  <input type='number' name='id' placeholder='ID' />
                </div>
                <div className='eight wide field'>
                  <label>Role</label>
                  <div className=''>
                    <div className='field'>
                      <select
                        className='ui fluid search dropdown'
                        name='card[expire-month]'
                      >
                        <option value=''>Server</option>
                        <option value='1'>Manager</option>
                        <option value='2'>Shift Lead</option>
                        <option value='3'>Bartender</option>
                        <option value='4'>Driver</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className='fields'>
                <div className='seven wide field'>
                  <label>Address</label>
                  <input
                    type='text'
                    name='city'
                    maxLength='25'
                    placeholder='City'
                  />
                </div>
                <div className='seven wide field'>
                  <label>Street</label>
                  <input
                    type='text'
                    name='street'
                    maxLength='25'
                    placeholder='Street'
                  />
                </div>
                <div className='two wide field'>
                  <label>Suite</label>
                  <input
                    type='number'
                    name='suite'
                    maxLength='3'
                    placeholder='Suite'
                  />
                </div>
              </div>
              <div className='field'>
                <label>E-mail</label>
                <input type='email' placeholder='name@gmail.com' />
              </div>
              <div className='field'>
                <label>Phone Number</label>
                <input
                  type='text'
                  name='phone_number'
                  placeholder='Phone Number'
                />
              </div>
              <button
                id='buttoncic'
                className='ui button'
                type='submit'
                onClick={this.onSubmit}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CreateNewEmp
