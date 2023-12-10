//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import AdminSidebar from '../../../Sidebar/AdminSidebar';
import Footer from '../../../Footer';

const NonTeachingStaffForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    name: '',
    designation: '',
    image: '',
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
      navigate('/admin/nonTeachingStaffs', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // hteachingStaff info create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', inputFields.name);
    formData.append('designation', inputFields.designation);
    formData.append('image', inputFields.image);

    console.log(formData);

    fetch(`http://127.0.0.1:8000/api/nonTeachingStaffs`, {
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

    if (!values.name) {
      errors.name = 'name required';
    }

    if (!values.designation) {
      errors.designation = 'designation required';
    }

    if (!values.image) {
      errors.image = 'image required';
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
                  {/* nonteachingStaff create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>HTeaching Staff Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        nonteaching-staff
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* Teaching Staff create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        <label className='form-control-label px-3'>
                          Teacher Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='name'
                          name='name'
                          placeholder='Enter teacher name'
                          onChange={handleChange}
                          value={inputFields.name}
                        />{' '}
                        {formErrors.name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.name}
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

export default NonTeachingStaffForm;
