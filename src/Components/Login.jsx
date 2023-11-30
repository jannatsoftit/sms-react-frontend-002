import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInput = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
      password_confirmation: loginInput.password_confirmation,
    };

    fetch(`http://127.0.0.1:8000/api/login`, {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then(() => {

      });
  };

  return (
    <>

      <div className='login_body'>
        <div className='wrapper'>
          <div className='title'>Login Form</div>
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <input
                type='email'
                name='email'
                value={loginInput.email}
                onChange={handleInput}
                required
              />
              <label>Email Address</label>
            </div>
            <div className='field'>
              <input
                type='text'
                name='password'
                value={loginInput.password}
                onChange={handleInput}
                required
              />
              <label>Password</label>
            </div>
            <div className='field'>
              <input
                type='text'
                name='password_confirmation'
                value={loginInput.password_confirmation}
                onChange={handleInput}
                required
              />
              <label>Password Confirmation</label>
            </div>
            <div className='content'>
              <div className='checkbox'>
                <input type='checkbox' id='remember-me' />
                <label htmlFor='remember-me'>Remember me</label>
              </div>
              <div className='pass-link'>
                <Link to='##'>Forgot password?</Link>
              </div>
            </div>
            <div className='field'>
              <input type='submit' value='Login' />
            </div>
            <div className='signup-link'>
              Not a member? <Link to='/register'>Register now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
