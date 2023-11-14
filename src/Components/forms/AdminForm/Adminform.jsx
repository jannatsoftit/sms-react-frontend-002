//import React from 'react';
import { RxSlash } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const AdminForm = () => {
  return (
    <div className='admin_form'>
      <div className='container-fluid px-1 py-5 mx-auto'>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
            <div className='card'>

            <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Admin Form Table</h2>
            <div className='admin-create'>
              <Link to='#' className='links'>
                user
              </Link>
              <RxSlash />
              <Link to='' className='links'>
                admins
              </Link>
              <RxSlash />
              <Link to='' className='actives'>
                create
              </Link>
            </div>
          </div>
              
              <form className='form-card' onSubmit='event.preventDefault()'>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      First name<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='fname'
                      name='fname'
                      placeholder='Enter your first name'
                      onBlur='validate(1)'
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Last name<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='lname'
                      name='lname'
                      placeholder='Enter your last name'
                      onBlur='validate(2)'
                    />{' '}
                  </div>
                </div>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Email<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='email'
                      name='email'
                      placeholder='Enter Your Email'
                      onBlur='validate(3)'
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Designation <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='mob'
                      name='mob'
                      placeholder='Enter Your Designation'
                      onBlur='validate(4)'
                    />{' '}
                  </div>
                </div>


                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Department<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='email'
                      name='email'
                      placeholder='Enter Your Department'
                      onBlur='validate(3)'
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Gender <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='mob'
                      name='mob'
                      placeholder='Enter Your Gender'
                      onBlur='validate(4)'
                    />{' '}
                  </div>
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Password<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='email'
                      name='email'
                      placeholder='Enter Your Gender'
                      onBlur='validate(3)'
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                    Date <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='mob'
                      name='mob'
                      placeholder='Enter Creating Date'
                      onBlur='validate(4)'
                    />{' '}
                  </div>
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      image <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='mob'
                      name='mob'
                      placeholder='Enter Your Image'
                      onBlur='validate(4)'
                    />{' '}
                  </div>
                </div>



                <div className='row justify-content-end'>
                  <div className='form-group col-sm-4'>
                    {' '}
                    <button type='submit' className='btn-block btn-primary'>
                      Send
                    </button>{' '}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
