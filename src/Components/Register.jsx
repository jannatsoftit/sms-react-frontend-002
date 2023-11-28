const Register = (props) => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-header'>Register</div>

          <div className='card-body'>
            <form method='POST' action='#'>
              <div className='row mb-3'>
                <label
                  htmlFor='name'
                  className='col-md-4 col-form-label text-md-end'
                >
                  Name
                </label>

                <div className='col-md-6'>
                  <input
                    id='name'
                    type='text'
                    className='form-control'
                    name='name'
                    required
                    autoComplete='name'
                    autoFocus
                  />
                </div>
              </div>

              <div className='row mb-3'>
                <label
                  htmlFor='email'
                  className='col-md-4 col-form-label text-md-end'
                >
                  E-Mail Address
                </label>

                <div className='col-md-6'>
                  <input
                    id='email'
                    type='email'
                    className='form-control'
                    name='email'
                    required
                    autoComplete='email'
                  />
                </div>
              </div>

              <div className='row mb-3'>
                <label
                  htmlFor='password'
                  className='col-md-4 col-form-label text-md-end'
                >
                  Password
                </label>

                <div className='col-md-6'>
                  <input
                    id='password'
                    type='password'
                    className='form-control'
                    name='password'
                    required
                    autoComplete='new-password'
                  />
                </div>
              </div>

              <div className='row mb-3'>
                <label
                  htmlFor='password-confirm'
                  className='col-md-4 col-form-label text-md-end'
                >
                  Confirm Password
                </label>

                <div className='col-md-6'>
                  <input
                    id='password-confirm'
                    type='password'
                    className='form-control'
                    name='password_confirmation'
                    required
                    autoComplete='new-password'
                  />
                </div>
              </div>

              <div className='row mb-0'>
                <div className='col-md-6 offset-md-4'>
                  <button type='submit' className='btn btn-primary'>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
