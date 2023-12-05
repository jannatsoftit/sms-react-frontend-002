//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

const ExpanseCategoryForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    name: '',
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
      navigate('/admin/expanseCategories', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // ExpanseCategory info create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', inputFields.name);

    fetch(`http://127.0.0.1:8000/api/expanseCategories`, {
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
                  {/* ExpanseCategory create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Expanse Category Form Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        expanse-category
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        create
                      </Link>
                    </div>
                  </div>

                  {/* ExpanseCategory create form table*/}
                  <form className='form-card' onSubmit={handelSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Expanse Category Name
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='name'
                          placeholder='Enter name'
                          id='name'
                          onChange={handleChange}
                          value={inputFields.name}
                        />{' '}
                        {formErrors.name && (
                          <span style={{ color: '#e74c3c' }}>
                            {formErrors.name}
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

export default ExpanseCategoryForm;
