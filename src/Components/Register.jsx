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
    image: '',
    gender: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.preventDefault();
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', registerInput.first_name);
    formData.append('last_name', registerInput.last_name);
    formData.append('email', registerInput.email);
    formData.append('phone_number', registerInput.phone_number);
    formData.append('date_of_birth', registerInput.date_of_birth);
    formData.append('address', registerInput.address);
    formData.append('blood_group', registerInput.blood_group);
    formData.append('password', registerInput.password);
    formData.append(
      'password_confirmation',
      registerInput.password_confirmation
    );
    formData.append('designation', registerInput.designation);
    formData.append('department', registerInput.department);
    formData.append('image', registerInput.image);
    formData.append('gender', registerInput.gender);

    fetch(`http://127.0.0.1:8000/api/register`, {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          Swal.fire({
            title: 'Success!',
            text: 'Registration Successfully Complete!!',
            icon: 'success',
            confirmButtonText: 'Ok',
          });

          navigate('/dashboard', { replace: true });

        } else {
          setRegisterInput({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
        console.log(res);
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
                  value={registerInput?.first_name}
                  onChange={handleInput}
                  placeholder='Enter your first name'
                />
                <span>{registerInput.error_list.first_name}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Last Name <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='last_name'
                  value={registerInput?.last_name}
                  onChange={handleInput}
                  placeholder='Enter your last name'
                />
                <span>{registerInput.error_list.last_name}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Email <span className='text-danger'> *</span>
                </span>
                <input
                  type='email'
                  name='email'
                  value={registerInput?.email}
                  onChange={handleInput}
                  placeholder='Enter your email'
                />
                <span>{registerInput.error_list.email}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Phone Number <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='phone_number'
                  value={registerInput?.phone_number}
                  onChange={handleInput}
                  placeholder='Enter your phone number'
                />
                <span>{registerInput.error_list.phone_number}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Date Of Birth <span className='text-danger'> *</span>
                </span>
                <input
                  type='date'
                  name='date_of_birth'
                  value={registerInput?.date_of_birth}
                  onChange={handleInput}
                  placeholder='Enter your date of birth'
                />
                <span>{registerInput.error_list.date_of_birth}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Designation <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='designation'
                  value={registerInput?.designation}
                  onChange={handleInput}
                  placeholder='Enter your designation'
                />
                <span>{registerInput.error_list.designation}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Department <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='department'
                  value={registerInput?.department}
                  onChange={handleInput}
                  placeholder='Enter your department'
                />
                <span>{registerInput.error_list.department}</span>
              </div>

              <div className='input-box'>
                <span className='details'>
                  Address <span className='text-danger'> *</span>
                </span>
                <select
                  name='address'
                  className='form-select'
                  value={registerInput?.address}
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
                <span>{registerInput.error_list.address}</span>
              </div>

              <div className='input-box'>
                <span className='details'>
                  Blood Group <span className='text-danger'> *</span>
                </span>
                <select
                  name='blood_group'
                  className='form-select'
                  value={registerInput?.blood_group}
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
                <span>{registerInput.error_list.blood_group}</span>
              </div>

              <div className='input-box'>
                <span className='details'>
                  Image <span className='text-danger'> *</span>
                </span>
                <input
                  type='file'
                  name='image'
                  className='form-control'
                  placeholder='Enter your image'
                  onChange={(e) => {
                    setRegisterInput((value) => ({
                      ...value,
                      [e.target.name]: e.target.files[0],
                    }));
                  }}
                />
                <span>{registerInput.error_list.image}</span>
              </div>

              {/* <div className='input-box'>
                <span className='details'>Gender</span>
                <select
                  name='gender'
                  className='form-select'
                  value={registerInput?.gender}
                  onChange={handleInput}
                >
                  <option selected>Choose...</option>
                  <option value='Female'>Female</option>
                  <option value='Male'>Male</option>
                </select>{' '}
              </div> */}

              <div className='input-box'>
                <span className='details'>
                  Password <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='password'
                  value={registerInput?.password}
                  onChange={handleInput}
                  placeholder='Enter your password'
                />
                <span>{registerInput.error_list.password}</span>
              </div>
              <div className='input-box'>
                <span className='details'>
                  Confirm Password <span className='text-danger'> *</span>
                </span>
                <input
                  type='text'
                  name='password_confirmation'
                  value={registerInput?.password_confirmation}
                  onChange={handleInput}
                  placeholder='Confirm your password'
                />
                <span>{registerInput.error_list.password_confirmation}</span>
              </div>
            </div>
            <div className='gender-details'>
              {/* <select
                name='gender'
                className='form-select'
                value={registerInput?.gender}
                onChange={handleInput}
              >
                <option selected>Choose...</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </select>{' '} */}
              <input
                type='radio'
                name='gender'
                id='dot-1'
                value={registerInput?.gender}
                onChange={handleInput}
              />
              <input
                type='radio'
                name='gender'
                id='dot-2'
                value={registerInput?.gender}
                onChange={handleInput}
              />
              <input
                type='radio'
                name='gender'
                id='dot-3'
                value={registerInput?.gender}
                onChange={handleInput}
              />
              <span className='gender-title'>Gender</span>
              <div className='category'>
                <label htmlFor='dot-1'>
                  <span className='dot one' value='Male'></span>
                  <span className='gender'>Male</span>
                </label>
                <label htmlFor='dot-2'>
                  <span className='dot two' value='Female'></span>
                  <span className='gender'>Female</span>
                </label>
                <label htmlFor='dot-3'>
                  <span className='dot three' value='Other'></span>
                  <span className='gender'>Other</span>
                </label>
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
