//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../Sidebar/AdminSidebar";
import Footer from "../../Footer";


const StudentForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    address: '',
    blood_group: '',
    password_confirmation: '',
    password: '',
    designation: '',
    department: '',
    image: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      navigate('/admin/students', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // student info create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', inputFields.first_name);
    formData.append('last_name', inputFields.last_name);
    formData.append('email', inputFields.email);
    formData.append('phone_number', inputFields.phone_number);
    formData.append('date_of_birth', inputFields.date_of_birth);
    formData.append('address', inputFields.address);
    formData.append('blood_group', inputFields.blood_group);
    formData.append('password', inputFields.password);
    formData.append('password_confirmation', inputFields.password_confirmation);
    formData.append('designation', inputFields.designation);
    formData.append('department', inputFields.department);
    formData.append('image', inputFields.image);
    formData.append('gender', inputFields.gender);

    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/students`, {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsSubmit(true);
        setFormErrors(validate(inputFields));
      })
      .catch((error) => {
        console.error(error);
        isSubmit(false);
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = 'first name required';
    }

    if (!values.last_name) {
      errors.last_name = 'last name required';
    }

    if (!values.email) {
      errors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'email is not valid';
    }

    if (!values.password) {
      errors.password = 'password is required';
    } else if (values.password.length < 4) {
      errors.password = 'password should be at least 4 char';
    }

    if (!values.designation) {
      errors.designation = 'designation required';
    }

    if (!values.department) {
      errors.department = 'department required';
    }

    if (!values.phone_number) {
      errors.phone_number = 'phone number required';
    }

    if (!values.date_of_birth) {
      errors.date_of_birth = 'date of birth required';
    }

    if (!values.address) {
      errors.address = 'address required';
    }

    if (!values.blood_group) {
      errors.blood_group = 'blood group required';
    }

    if (!values.password_confirmation) {
      errors.password_confirmation = 'password confirmation is required';
    } else if (values.password_confirmation.length < 4) {
      errors.password_confirmation =
        'password confirmation should be at least 4 char';
    }

    if (!values.image) {
      errors.image = 'image required';
    }

    if (!values.gender) {
      errors.gender = 'gender required';
    }

    return errors;
  };

  return (
    <>
      <AdminSidebar>
        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* student create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Student Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        students
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* student create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
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
                        {formErrors.first_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.first_name}
                          </span>
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
                        {formErrors.last_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.last_name}
                          </span>
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
                        {formErrors.email && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.email}
                          </span>
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
                        {formErrors.designation && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.designation}
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
                        {formErrors.department && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.department}
                          </span>
                        )}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Gender <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='gender'
                          className='form-select'
                          value={inputFields.gender}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='Female'>Female</option>
                          <option value='Male'>Male</option>
                        </select>{' '}
                        {formErrors.gender && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.gender}
                          </span>
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
                        {formErrors.password && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.password}
                          </span>
                        )}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Image <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          className='form-control'
                          type='file'
                          name='image'
                          onChange={(e) => {
                            setInputFields((value) => ({
                              ...value,
                              [e.target.name]: e.target.files[0],
                            }));
                          }}
                        />{' '}
                        {formErrors.image && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.image}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Phone Number <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='phone_number'
                          name='phone_number'
                          placeholder='Enter your phone number'
                          onChange={handleChange}
                          value={inputFields.phone_number}
                        />{' '}
                        {formErrors.phone_number && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.phone_number}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Date Of Birth <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='date'
                          id='date_of_birth'
                          name='date_of_birth'
                          placeholder='Enter your date_of_birth'
                          onChange={handleChange}
                          value={inputFields.date_of_birth}
                        />{' '}
                        {formErrors.date_of_birth && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.date_of_birth}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Address <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='address'
                          className='form-select'
                          value={inputFields?.address}
                          onChange={handleChange}
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
                        </select>{' '}
                        {formErrors.address && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.address}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Blood Group <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='blood_group'
                          className='form-select'
                          value={inputFields?.blood_group}
                          onChange={handleChange}
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
                        </select>{' '}
                        {formErrors.blood_group && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.blood_group}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Password Confirmation{' '}
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='password_confirmation'
                          name='password_confirmation'
                          placeholder='Enter your password confirmation'
                          onChange={handleChange}
                          value={inputFields.password_confirmation}
                        />{' '}
                        {formErrors.password_confirmation && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.password_confirmation}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-start'>
                      <div className='form-group col-sm-4'>
                        <button type='submit' className='btn-block btn-primary'>
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
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default StudentForm;
