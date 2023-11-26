//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const SubjectForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    subject_name: '',
    class: '',
    subject_code: '',
    paper: '',
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
      navigate('/subjects', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // Mark data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subject_name', inputFields.subject_name);
    formData.append('class', inputFields.class);
    formData.append('subject_code', inputFields.subject_code);
    formData.append('paper', inputFields.paper);

    fetch(`http://127.0.0.1:8000/api/subjects`, {
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

    if (!values.subject_name) {
      errors.subject_name = 'subject name required';
    }

    if (!values.class) {
      errors.class = 'class required';
    }

    if (!values.subject_code) {
      errors.subject_code = 'subject code is required';
    }

    if (!values.paper) {
      errors.paper = 'paper is required';
    }

    return errors;
  };

  return (
    <div className='admin_form'>
      <div className='container-fluid px-1 py-5 mx-auto'>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
            <div className='card'>
              {/* subject create form title section */}
              <div className='col-md-6 text-center mb-5'>
                <h2 className='heading-section'>Subject Form Table</h2>
                <div className='admin-create'>
                  <Link to='#' className='links'>
                    user
                  </Link>
                  <RxSlash />
                  <Link to='' className='links'>
                    subjects
                  </Link>
                  <RxSlash />
                  <Link to='' className='actives'>
                    create
                  </Link>
                </div>
              </div>

              {/* subject create form table*/}
              <form className='form-card' onSubmit={handelSubmit}>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Subject Name <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='subject_name'
                      placeholder='Enter subject name'
                      id='subject_name'
                      onChange={handleChange}
                      value={inputFields.subject_name}
                    />{' '}
                    {formErrors.subject_name && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.subject_name}
                      </span>
                    )}
                  </div>

                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Class Name<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='class'
                      placeholder='Enter class'
                      id='class'
                      onChange={handleChange}
                      value={inputFields.class}
                    />{' '}
                    {formErrors.class && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.class}
                      </span>
                    )}
                  </div>
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Subject Code<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='subject_code'
                      placeholder='Enter subject code'
                      id='subject_code'
                      onChange={handleChange}
                      value={inputFields.subject_code}
                    />{' '}
                    {formErrors.subject_code && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.subject_code}
                      </span>
                    )}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Paper<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='paper'
                      placeholder='Enter paper'
                      id='paper'
                      onChange={handleChange}
                      value={inputFields.paper}
                    />{' '}
                    {formErrors.paper && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.paper}
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
  );
};

export default SubjectForm;
