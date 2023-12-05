//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

const MarkForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    student_name: '',
    total_marks: '',
    grade_point: '',
    class_name: '',
    letter_grade: '',
    section: '',
    comment: '',
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
      navigate('/marks', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // Mark data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('student_name', inputFields.student_name);
    formData.append('total_marks', inputFields.total_marks);
    formData.append('grade_point', inputFields.grade_point);
    formData.append('class_name', inputFields.class_name);
    formData.append('letter_grade', inputFields.letter_grade);
    formData.append('section', inputFields.section);
    formData.append('comment', inputFields.comment);

    fetch(`http://127.0.0.1:8000/api/marks`, {
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

    if (!values.student_name) {
      errors.student_name = 'student name required';
    }

    if (!values.total_marks) {
      errors.total_marks = 'total marks required';
    }

    if (!values.grade_point) {
      errors.grade_point = 'grade point is required';
    }

    if (!values.class_name) {
      errors.class_name = 'class name is required';
    }

    if (!values.letter_grade) {
      errors.letter_grade = 'letter grade is required';
    }

    if (!values.section) {
      errors.section = 'section is required';
    }

    if (!values.comment) {
      errors.comment = 'comment is required';
    }

    return errors;
  };

  return (
    <>
      <Sidebar>
        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* Mark create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Mark Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        marks
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* Mark create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Student Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='student_name'
                          placeholder='Enter student name'
                          id='student_name'
                          onChange={handleChange}
                          value={inputFields.student_name}
                        />{' '}
                        {formErrors.student_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.student_name}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Marks Obtain<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='total_marks'
                          placeholder='Enter total marks'
                          id='total_marks'
                          onChange={handleChange}
                          value={inputFields.total_marks}
                        />{' '}
                        {formErrors.total_marks && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.total_marks}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Earned Grade Point
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='grade_point'
                          placeholder='Enter total marks'
                          id='grade_point'
                          onChange={handleChange}
                          value={inputFields.grade_point}
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
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Letter Grade <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='letter_grade'
                          placeholder='Enter letter grade'
                          id='letter_grade'
                          onChange={handleChange}
                          value={inputFields.letter_grade}
                        />{' '}
                        {formErrors.letter_grade && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.letter_grade}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Section <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='section'
                          placeholder='Enter section'
                          id='section'
                          onChange={handleChange}
                          value={inputFields.section}
                        />{' '}
                        {formErrors.section && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.section}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Comment <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='comment'
                          placeholder='Enter comment'
                          id='comment'
                          onChange={handleChange}
                          value={inputFields.comment}
                        />{' '}
                        {formErrors.comment && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.comment}
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
      </Sidebar>
    </>
  );
};

export default MarkForm;
