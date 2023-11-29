import { useState } from "react";


const Login = () => {

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value      
    }); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    fetch(`http://127.0.0.1:8000/api/login`, {
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

    })





  }

  return (
    <>
      <div className='register_container'>
        <div className='title'>Login Form</div>
        <div className='content'>
          <form onSubmit={handleSubmit}>
              <div className='input-box'>
                <span className='details'>
                  Email ID<span className='text-danger'> *</span>
                </span>
                <input
                  type='email'
                  name='email'
                  value={loginInput.email}
                  onChange={handleInput}
                  placeholder='Enter your email'
                />
                {/* <span className='text-danger'>{loginInput.error_list.email}</span> */}
              </div>

              <div className='input-box'>
                <span className='details'>
                  Password <span className='text-danger'> *</span>
                </span>
                <input
                  type='password'
                  name='password'
                  value={loginInput.password}
                  onChange={handleInput}
                  placeholder='Enter your password'
                />
                {/* <span className='text-danger'>{loginInput.error_list.password}</span> */}
              </div>
            <div className='button'>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
