//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from '../../Sidebar/AdminSidebar';
import Footer from '../../Footer';

const SyllabusForm = () => {
  //Syllabus
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    class_name: '',
    subject_name: '',
    topic: '',
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
      navigate('/admin/syllabuses', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // Mark data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subject_name', inputFields.subject_name);
    formData.append('class_name', inputFields.class_name);
    formData.append('topic', inputFields.topic);
    formData.append('paper', inputFields.paper);

    fetch(`http://127.0.0.1:8000/api/syllabuses`, {
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

    if (!values.class_name) {
      errors.class_name = 'class name required';
    }

    if (!values.topic) {
      errors.topic = 'topic is required';
    }

    if (!values.paper) {
      errors.paper = 'paper is required';
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
                  {/* syllabus create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Syllabus Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        syllabus
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* syllabus create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='class_name'
                          placeholder='Enter class name'
                          id='class_name'
                          onChange={handleChange}
                          value={inputFields.class_name}
                        />{' '}
                        {formErrors.class_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.class_name}
                          </span>
                        )}
                      </div>

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
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Topic<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='topic'
                          placeholder='Enter topic'
                          id='topic'
                          onChange={handleChange}
                          value={inputFields.topic}
                        />{' '}
                        {formErrors.topic && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.topic}
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
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default SyllabusForm;
