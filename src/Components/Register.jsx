import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {

  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    address: '',
    blood_group: '',
    password: '',
    password_confirmation: '',
    designation: '',
    department: '',
    gender: '',
    error_list: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterInput({
      ...registerInput,
      [name]: value,
    });
    //setRegisterInput({...registerInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: registerInput.first_name,
      last_name: registerInput.last_name,
      email: registerInput.email,
      phone_number: registerInput.phone_number,
      date_of_birth: registerInput.date_of_birth,
      address: registerInput.address,
      blood_group: registerInput.blood_group,
      password: registerInput.password,
      password_confirmation:registerInput.password_confirmation,
      designation: registerInput.designation,
      department: registerInput.department,
      gender: registerInput.gender,
    }

    fetch(`http://127.0.0.1:8000/api/register`, {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem('auth_token', res.token);
          localStorage.setItem('auth_name', res.username);
          console.log(res);
          Swal.fire({
            title: 'Success!',
            text: 'Registration Successfully Completed!',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          navigate('/dashboard');

        } else {
          setRegisterInput({
            ...registerInput,
            error_list: res.validation_errors,
          });
          //Swal.fire('Warning', response?.message, "warning");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='register'>
      <div className='register_container'>
        <div className='title'>Registration Form</div>
        <div className='content'>
          <form onSubmit={handleSubmit}>
            <div className='user-details'>
              <div className='input-box'>
                <span className='details'>
                  First Name <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='first_name'
                  value={registerInput.first_name}
                  onChange={handleInput}
                  placeholder='Enter your first name'
                />
                <span className='text-danger'>{registerInput.error_list.first_name}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Last Name <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='last_name'
                  value={registerInput.last_name}
                  onChange={handleInput}
                  placeholder='Enter your last name'
                />
                <span className='text-danger'>{registerInput.error_list.last_name}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Email <span className='text-danger'> *</span>
                </span>
                <input
                  type='email'
                  name='email'
                  value={registerInput.email}
                  onChange={handleInput}
                  placeholder='Enter your email'
                />
                <span className='text-danger'>{registerInput.error_list.email}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Phone Number <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='phone_number'
                  value={registerInput.phone_number}
                  onChange={handleInput}
                  placeholder='Enter your phone number'
                />
                <span className='text-danger'>{registerInput.error_list.phone_number}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Date Of Birth <span className='text-danger'> *</span>
                </span>
                <input
                  type='date'
                  name='date_of_birth'
                  value={registerInput.date_of_birth}
                  onChange={handleInput}
                  placeholder='Enter your date of birth'
                />
                <span className='text-danger'>{registerInput.error_list.date_of_birth}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Designation <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='designation'
                  value={registerInput.designation}
                  onChange={handleInput}
                  placeholder='Enter your designation'
                />
                <span className='text-danger'>{registerInput.error_list.designation}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Department <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='department'
                  value={registerInput.department}
                  onChange={handleInput}
                  placeholder='Enter your department'
                />
                <span className='text-danger'>{registerInput.error_list.department}</span>
              </div>

              <div className='input-box'>
                <span className='details'>
                  Address <span className='text-danger'> *</span>
                </span>
                <select
                  name='address'
                  className='form-select'
                  value={registerInput.address}
                  onChange={handleInput}
                >
                  <option selected hidden>
                    Enter Address
                  </option>
                  <option value='Dhaka'>Dhaka</option>
                  <option value='Khulna'>Khulna</option>
                  <option value='Jessore'>Jessore</option>
                  <option value='Barishal'>Barishal</option>
                  <option value='Chittagong'>Chittagong</option>
                  <option value='Sylhet'>Sylhet</option>
                </select>
                <span className='text-danger'>{registerInput.error_list.address}</span>
              </div>

              <div className='input-box'>
                <span className='details'>
                  Blood Group <span className='text-danger'> *</span>
                </span>
                <select
                  name='blood_group'
                  className='form-select'
                  value={registerInput.blood_group}
                  onChange={handleInput}
                >
                  <option selected hidden>
                    Enter Blood Group
                  </option>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>
                  <option value='O-'>O-</option>
                  <option value='O+'>O+</option>
                </select>
                <span className='text-danger'>{registerInput.error_list.blood_group}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Password <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='password'
                  value={registerInput.password}
                  onChange={handleInput}
                  placeholder='Enter your password'
                />
                <span className='text-danger'>{registerInput.error_list.password}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Confirm Password <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='password_confirmation'
                  value={registerInput.password_confirmation}
                  onChange={handleInput}
                  placeholder='Confirm your password'
                />
                <span className='text-danger'>{registerInput.error_list.password_confirmation}</span>
              </div>

              <div className='input-box'>
                <span className='details'>
                  Gender <span className='text-danger'> *</span>
                </span>
                <select
                  name='gender'
                  className='form-select'
                  value={registerInput.gender}
                  onChange={handleInput}
                >
                  <option selected hidden>
                    Enter Gender
                  </option>
                  <option value='Female'>Female</option>
                  <option value='Male'>Male</option>
                  <option value='Other'>Other</option>
                </select>
                <span className='text-danger'>{registerInput.error_list.gender}</span>
              </div>
            </div>
            <div className='button'>
              <input type='submit' value='Register' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
