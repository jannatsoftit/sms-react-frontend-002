//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from '../../../Footer';

const SchoolForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    title: '',
    email: '',
    phone: '',
    address: '',
    facebook_page: '',
    status: '',
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
      navigate('/admin/grades', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // School info create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', inputFields.title);
    formData.append('email', inputFields.email);
    formData.append('phone', inputFields.phone);
    formData.append('address', inputFields.address);
    formData.append('facebook_page', inputFields.facebook_page);
    formData.append('status', inputFields.status);

    fetch(`http://127.0.0.1:8000/api/schools`, {
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

    if (!values.title) {
      errors.title = 'title required';
    }

    if (!values.email) {
      errors.email = 'email required';
    }

    if (!values.phone) {
      errors.phone = 'phone is required';
    }

    if (!values.address) {
      errors.address = 'address required';
    }

    if (!values.facebook_page) {
      errors.facebook_page = 'facebook page required';
    }

    if (!values.status) {
      errors.status = 'status is required';
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
                  {/* school create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>School Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        schools
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* school create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          School Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='title'
                          name='title'
                          placeholder='Enter school name'
                          onChange={handleChange}
                          value={inputFields?.title}
                        />{' '}
                        {formErrors.grade_point && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.grade_point}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Email<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='email'
                          name='email'
                          placeholder='Enter email'
                          onChange={handleChange}
                          value={inputFields?.email}
                        />{' '}
                        {formErrors.email && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Phone <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='phone'
                          name='phone'
                          placeholder='Enter phone'
                          onChange={handleChange}
                          value={inputFields?.phone}
                        />{' '}
                        {formErrors.phone && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.phone}
                          </span>
                        )}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Address <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='address'
                          name='address'
                          placeholder='Enter address'
                          onChange={handleChange}
                          value={inputFields?.address}
                        />{' '}
                        {formErrors.address && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.address}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Facebook Page<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='facebook_page'
                          name='facebook_page'
                          placeholder='Enter facebook_page'
                          onChange={handleChange}
                          value={inputFields?.facebook_page}
                        />{' '}
                        {formErrors.facebook_page && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.facebook_page}
                          </span>
                        )}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Status<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='status'
                          name='status'
                          placeholder='Enter status'
                          onChange={handleChange}
                          value={inputFields?.status}
                        />{' '}
                        {formErrors.status && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.status}
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

export default SchoolForm;
