//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from '../../../Footer';

const GradeForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    grade_point: '',
    letter_grade: '',
    marks_interval: '',
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

  // ExamCategory info create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('grade_point', inputFields.grade_point);
    formData.append('letter_grade', inputFields.letter_grade);
    formData.append('marks_interval', inputFields.marks_interval);

    fetch(`http://127.0.0.1:8000/api/grades`, {
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

    if (!values.grade_point) {
      errors.grade_point = 'grade point required';
    }

    if (!values.letter_grade) {
      errors.letter_grade = 'letter grade required';
    }

    if (!values.marks_interval) {
      errors.marks_interval = 'marks interval is required';
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
                  {/* grade create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Grade Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        grades
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* grade create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Grade point <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='grade_point'
                          className='form-select'
                          value={inputFields.grade_point}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='5'>5</option>
                          <option value='4.5'>4.5</option>
                          <option value='4'>4</option>
                          <option value='3.5'>3.5</option>
                          <option value='3'>3</option>
                          <option value='2'>2</option>
                        </select>{' '}
                        {formErrors.grade_point && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.grade_point}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Letter grade <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='letter_grade'
                          className='form-select'
                          value={inputFields.letter_grade}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='A+'>A+</option>
                          <option value='A'>A</option>
                          <option value='A-'>A-</option>
                          <option value='B'>B</option>
                          <option value='C'>C</option>
                          <option value='F'>F</option>
                        </select>{' '}
                        {formErrors.letter_grade && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.letter_grade}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Marks interval <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='marks_interval'
                          className='form-select'
                          value={inputFields.marks_interval}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='100-80'>100-80</option>
                          <option value='79-70'>79-70</option>
                          <option value='69-60'>69-60</option>
                          <option value='59-50'>59-50</option>
                          <option value='49-40'>49-40</option>
                          <option value='39-33'>39-33</option>
                          <option value='32-0'>32-0</option>
                        </select>{' '}
                        {formErrors.marks_interval && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.marks_interval}
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

export default GradeForm;
