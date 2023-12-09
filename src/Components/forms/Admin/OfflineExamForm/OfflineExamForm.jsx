//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from '../../../Footer';

const OfflineExamForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    exam_name: '',
    exam_start_time: '',
    exam_end_time: '',
    total_marks: '',
    //section: '',
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
      navigate('/admin/offlineExams', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // offlineExams data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('exam_name', inputFields.exam_name);
    formData.append('exam_start_time', inputFields.exam_start_time);
    formData.append('exam_end_time', inputFields.exam_end_time);
    formData.append('total_marks', inputFields.total_marks);
    //formData.append('section', inputFields.section);
    //formData.append('class_name', inputFields.class_name);

    fetch(`http://127.0.0.1:8000/api/offlineExams`, {
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

    if (!values.exam_name) {
      errors.exam_name = 'exam name required';
    }

    if (!values.exam_start_time) {
      errors.exam_start_time = 'exam start time is required';
    }

    if (!values.exam_end_time) {
      errors.exam_end_time = 'exam end time is required';
    }

    if (!values.total_marks) {
      errors.total_marks = 'total marks is required';
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
                  {/* offlineExams create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Offline Exams Form Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        offline-exams
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* offlineExams create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Exam Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='exam_name'
                          placeholder='Enter exam name'
                          id='exam_name'
                          onChange={handleChange}
                          value={inputFields?.exam_name}
                        />{' '}
                        {formErrors.exam_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.exam_name}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                           Starting Time{' '}
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='datetime-local'
                          name='exam_start_time'
                          placeholder='Enter exam start time'
                          id='exam_start_time'
                          onChange={handleChange}
                          value={inputFields?.exam_start_time}
                        />{' '}
                        {formErrors.exam_start_time && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.exam_start_time}
                          </span>
                        )}
                      </div>
                      {/* <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Name
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='class_name'
                          placeholder='Enter class name'
                          id='class_name'
                          onChange={handleChange}
                          value={inputFields?.class_name}
                        />{' '}
                        {formErrors.class_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.class_name}
                          </span>
                        )}
                      </div> */}
                    </div>

                    <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Ending Time
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='datetime-local'
                          name='exam_end_time'
                          placeholder='Enter total exam end time'
                          id='exam_end_time'
                          onChange={handleChange}
                          value={inputFields?.exam_end_time}
                        />{' '}
                        {formErrors.exam_end_time && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.exam_end_time}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Total Marks<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='number'
                          name='total_marks'
                          placeholder='Enter total marks'
                          id='total_marks'
                          onChange={handleChange}
                          value={inputFields?.total_marks}
                        />{' '}
                        {formErrors.total_marks && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.total_marks}
                          </span>
                        )}
                      </div>
                      
                    </div>
                    

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Building Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='building_name'
                          placeholder='Enter building name'
                          id='building_name'
                          onChange={handleChange}
                          value={inputFields?.building_name}
                        />{' '}
                        {formErrors.building_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.building_name}
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
                          value={inputFields?.paper}
                        />{' '}
                        {formErrors.paper && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.paper}
                          </span>
                        )}
                      </div>

                        <div className='form-group col-sm-6 flex-column d-flex'>
                          {' '}
                          <label className='form-label px-3'>
                            Date Time <span className='text-danger'> *</span>
                          </label>{' '}
                          <input
                            type='text'
                            name='date_time'
                            placeholder='Enter exam date '
                            id='date_time'
                            onChange={handleChange}
                            value={inputFields?.date_time}
                          />{' '}
                          {formErrors.date_time && (
                            <span style={{ color: '#e74c3c' }}>
                              {formErrors.date_time}
                            </span>
                          )}
                        </div> 
                    </div> */}

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Room Number
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='room_number'
                          placeholder='Enter room number'
                          id='room_number'
                          onChange={handleChange}
                          value={inputFields?.room_number}
                        />{' '}
                        {formErrors.room_number && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.room_number}
                          </span>
                        )}
                      </div>
                    </div> */}

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Subject Code
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='number'
                          name='subject_code'
                          placeholder='Enter subject code'
                          id='subject_code'
                          onChange={handleChange}
                          value={inputFields?.subject_code}
                        />{' '}
                        {formErrors.subject_code && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.subject_code}
                          </span>
                        )}
                      </div>
                    </div> */}

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

export default OfflineExamForm;
