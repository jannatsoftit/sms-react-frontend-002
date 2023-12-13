import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInput = (e) => {
    setLoginInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const submitLogin = (e) => {
    e.preventDefault();

    const LoginData = {
      email: loginInput.email,
      password: loginInput.password,
      password_confirmation: loginInput.password_confirmation,
    };

    fetch(`http://127.0.0.1:8000/api/login`, {
      body: JSON.stringify({
        ...LoginData,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.status === 200) {
          localStorage.setItem('auth_token', response?.token);
          localStorage.setItem('auth_name', response?.username);

          localStorage.setItem('last_name', response?.last_name);
          localStorage.setItem('email', response?.email);
          localStorage.setItem('address', response?.address);
          localStorage.setItem('phone_number', response?.phone_number);
          localStorage.setItem('gender', response?.gender);
          localStorage.setItem('blood_group', response?.blood_group);
          localStorage.setItem('department', response?.department);
          localStorage.setItem('image', response?.image);
          localStorage.setItem('role', response?.role_id);
          localStorage.setItem('school_id', response?.school_id);
          localStorage.setItem('parent_id', response?.parent_id);
          
          const userRoleId = localStorage.getItem('role');
          console.log(userRoleId);

          if (userRoleId === '1') {
            navigate('/admin/dashboard');
          } else if (userRoleId === '2') {
            navigate('/student/dashboard');
          } else if (userRoleId === '3') {
            navigate('/teacher/dashboard');
          } else if (userRoleId === '4') {
            navigate('/parent/dashboard');
          } else if (userRoleId === '5') {
            navigate('/accountant/dashboard');
          } else if (userRoleId === '6') {
            navigate('/librarian/dashboard');
          } else if (userRoleId === '7') {
            navigate('/public/dashboard');
          }
          console.info(response);
          Swal.fire({
            title: 'Success',
            text: 'Logged in Successfully Completed!',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        } else if (response?.status === 401) {
          Swal.fire({
            title: 'Warning!',
            text: 'Login Unsuccessful',
            icon: 'warning',
            confirmButtonText: 'Ok',
          });
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className='login_body'>
        <div className='wrapper'>
          <div className='title'>Login Form</div>
          <form onSubmit={submitLogin}>
            <div className='field'>
              <input
                //type='email'
                name='email'
                value={loginInput.email}
                onChange={handleInput}
                required
              />
              <label>Email Address</label>
            </div>
            <div className='field'>
              <input
                type='password'
                name='password'
                value={loginInput.password}
                onChange={handleInput}
                required
              />
              <label>Password</label>
            </div>
            <div className='field'>
              <input
                type='password'
                name='password_confirmation'
                value={loginInput.password_confirmation}
                onChange={handleInput}
                required
              />
              <label>Password Confirmation</label>
            </div>
            <div className='field'>
              <input type='submit' value='Login' />
            </div>
            <div className='signup-link'>
              Don't have an account? <Link to='/register'>Register now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
