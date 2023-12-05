//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";

const ClassRoomForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    class_room_name: '',
    room_number: '',
    building_name: '',
    area: '',
    total_room: '',
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
      navigate('/admin/classRooms', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // ClassRoom data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('class_room_name', inputFields.class_room_name);
    formData.append('room_number', inputFields.room_number);
    formData.append('building_name', inputFields.building_name);
    formData.append('area', inputFields.area);
    formData.append('total_room', inputFields.total_room);

    fetch(`http://127.0.0.1:8000/api/classRooms`, {
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

    if (!values.class_room_name) {
      errors.class_room_name = 'room name required';
    }

    if (!values.room_number) {
      errors.room_number = 'room number required';
    }

    if (!values.building_name) {
      errors.building_name = 'building name is required';
    }

    if (!values.area) {
      errors.area = 'area is required';
    }

    if (!values.total_room) {
      errors.total_room = 'total room is required';
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
                  {/* ClassRoom create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Class Room Form Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        class-rooms
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* ClassRoom create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Room Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='class_room_name'
                          placeholder='Enter class room name'
                          id='class_room_name'
                          onChange={handleChange}
                          value={inputFields.class_room_name}
                        />{' '}
                        {formErrors.class_room_name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.class_room_name}
                          </span>
                        )}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
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
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
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

export default ClassRoomForm;
