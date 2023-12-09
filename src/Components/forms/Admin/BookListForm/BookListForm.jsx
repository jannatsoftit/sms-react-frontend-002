//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from "../../../Footer";

const BookListForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    book_name: '',
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
      navigate('/admin/bookLists', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // BookList data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('book_name', inputFields.book_name);

    fetch(`http://127.0.0.1:8000/api/bookLists`, {
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

    if (!values.book_name) {
      errors.book_name = 'book list name required';
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
                  {/* BookList create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Book List Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        book-lists
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* Book List create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Book List Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='book_name'
                          placeholder='Enter book list name'
                          id='book_name'
                          onChange={handleChange}
                          value={inputFields.book_name}
                        />{' '}
                        {formErrors.book_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.book_name}
                          </span>
                        )}
                      </div>

                      {/* <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Room Number<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='room_number'
                          placeholder='Enter room number'
                          id='room_number'
                          onChange={handleChange}
                          value={inputFields.room_number}
                        />{' '}
                        {formErrors.room_number && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.room_number}
                          </span>
                        )}
                      </div> */}
                    </div>

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Building Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='building_name'
                          placeholder='Enter building name'
                          id='building_name'
                          onChange={handleChange}
                          value={inputFields.building_name}
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
                          Area<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='area'
                          placeholder='Enter area'
                          id='area'
                          onChange={handleChange}
                          value={inputFields.area}
                        />{' '}
                        {formErrors.area && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.area}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Total Room <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='total_room'
                          placeholder='Enter total room'
                          id='total_room'
                          onChange={handleChange}
                          value={inputFields.total_room}
                        />{' '}
                        {formErrors.total_room && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.total_room}
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

export default BookListForm;
