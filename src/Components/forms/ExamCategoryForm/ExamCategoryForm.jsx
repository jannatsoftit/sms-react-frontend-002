//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from '../../Sidebar/AdminSidebar';
import Footer from '../../Footer';

const ExamCategoryForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    title: '',
    class_name: '',
    section_name: '',
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
      navigate('/admin/examCategories', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // ExamCategory info create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', inputFields.title);
    formData.append('class_name', inputFields.class_name);
    formData.append('section_name', inputFields.section_name);

    fetch(`http://127.0.0.1:8000/api/examCategories`, {
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
      errors.title = 'Exam name required';
    }

    if (!values.class_name) {
      errors.class_name = 'class name required';
    }

    if (!values.section_name) {
      errors.section_name = 'section name is required';
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
                  {/* ExamCategory create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Exam Category Form Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        exam-categories
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* ExamCategory create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Exam Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='title'
                          className='form-select'
                          value={inputFields.title}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='Final Exam'>Final Exam</option>
                          <option value='Half Yearly'>Half Yearly</option>
                          <option value='Test Exam'>Test Exam</option>
                          <option value='Pre-test Exam'>Pre-test Exam</option>
                        </select>{' '}
                        {formErrors.title && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.title}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='class_name'
                          className='form-select'
                          value={inputFields.class_name}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='One'>One</option>
                          <option value='Two'>Two</option>
                        </select>{' '}
                        {formErrors.class_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.class_name}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Section Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='section_name'
                          className='form-select'
                          value={inputFields.section_name}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='A'>A</option>
                          <option value='B'>B</option>
                        </select>{' '}
                        {formErrors.section_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.section_name}
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

export default ExamCategoryForm;
