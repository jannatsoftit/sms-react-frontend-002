
//import React from 'react';
import { useState } from 'react';
import { RxSlash } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const AdminForm = () => {

  const [inputFields, setInputFields] = useState({
    first_name: '',
    last_name: '',
    email: '',
    designation: '',
    department: '',
    password: '',
    user_information: '',
    image: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
    console.log(inputFields);
  };

  // admin info create function 
  const handelSubmit = ( e ) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/admins`, {
      body: JSON.stringify({
        ...inputFields,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsSubmit(true);
      })
      .catch((error) => {
        console.error(error);
        isSubmit(false);
      });
     

    // admin information validation Errors message  
    const validationErrors = {};

    if (!inputFields.first_name.trim()) {
      validationErrors.first_name = 'first name required';
    }

    if (!inputFields.last_name.trim()) {
      validationErrors.last_name = 'last name required';
    }

    if (!inputFields.email.trim()) {
      validationErrors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputFields.email)) {
      validationErrors.email = 'email is not valid';
    }

    if (!inputFields.password.trim()) {
      validationErrors.password = 'password is required';
    } else if (inputFields.password < 6) {
      validationErrors.password = 'password should be at least 6 char';
    }

    if (!inputFields.designation.trim()) {
      validationErrors.designation = 'designation required';
    }

    if (!inputFields.department.trim()) {
      validationErrors.department = 'department required';
    }

    if (!inputFields.user_information.trim()) {
      validationErrors.user_information = 'user_information required';
    }

    if (!inputFields.image.trim()) {
      validationErrors.image = 'image required';
    }

    if (!inputFields.gender.trim()) {
      validationErrors.gender = 'gender required';
    }

    setErrors(validationErrors);

    // admin create success message
    if (Object.keys(validationErrors).length === 0) {
      alert('Form Submitted');
    }

  };

  return (
    <div className='admin_form'>
      <div className='container-fluid px-1 py-5 mx-auto'>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
            <div className='card'>
              {/* Admin create form title section */}
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

              {/* admin create form table*/}
              <form className='form-card' onSubmit={handelSubmit} >
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      First name<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='first_name'
                      name='first_name'
                      placeholder='Enter your first name'
                      onChange={handleChange}
                      value={inputFields.first_name}
                    />{' '}
                    {errors.first_name && (
                      <span style={{ color: '#e74c3c' }}>{errors.first_name}</span>
                    )}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Last name<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      id='last_name'
                      name='last_name'
                      placeholder='Enter your last name'
                      onChange={handleChange}
                      value={inputFields.last_name}
                    />{' '}
                    {errors.last_name && (
                      <span style={{ color: '#e74c3c' }}>{errors.last_name}</span>
                    )}
                  </div>
                </div>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Email<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='email'
                      name='email'
                      placeholder='Enter Your Email'
                      id='email'
                      onChange={handleChange}
                      value={inputFields.email}
                    />{' '}
                    {errors.email && (
                      <span style={{ color: '#e74c3c' }}>{errors.email}</span>
                    )}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Designation <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='designation'
                      placeholder='Enter Your Designation'
                      id='designation'
                      onChange={handleChange}
                      value={inputFields.designation}
                    />{' '}
                    {errors.designation && (
                      <span style={{ color: '#e74c3c' }}>
                        {errors.designation}
                      </span>
                    )}
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
                      name='department'
                      placeholder='Enter Your Department'
                      id='department'
                      onChange={handleChange}
                      value={inputFields.department}
                    />{' '}
                    {errors.department && (
                      <span style={{ color: '#e74c3c' }}>
                        {errors.department}
                      </span>
                    )}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Gender <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='gender'
                      placeholder='Enter Your Gender'
                      id='gender'
                      onChange={handleChange}
                      value={inputFields.gender}
                    />{' '}
                    {errors.gender && (
                      <span style={{ color: '#e74c3c' }}>{errors.gender}</span>
                    )}
                  </div>
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Password<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='password'
                      name='password'
                      placeholder='Enter Your password'
                      id='password'
                      onChange={handleChange}
                      value={inputFields.password}
                    />{' '}
                    {errors.password && (
                      <span style={{ color: '#e74c3c' }}>
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      Image <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='image'
                      placeholder='Enter Your Image'
                      id='image'
                      onChange={handleChange}
                      value={inputFields.image}
                    />{' '}
                    {errors.image && (
                      <span style={{ color: '#e74c3c' }}>{errors.image}</span>
                    )}
                  </div>
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-control-label px-3'>
                      User Information<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='user_information'
                      placeholder='Enter Your user information'
                      id='user_information'
                      onChange={handleChange}
                      value={inputFields.user_information}
                    />{' '}
                    {errors.user_information && (
                      <span style={{ color: '#e74c3c' }}>
                        {errors.user_information}
                      </span>
                    )}
                  </div>
                </div>

                <div className='row justify-content-start'>
                  <div className='form-group col-sm-4'>
                    <button
                      type='submit'
                      className='btn-block btn-primary'
                      //disabled={setSubmitting}
                    >
                      Submit
                    </button>
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

