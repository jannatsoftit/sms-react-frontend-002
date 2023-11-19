import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Swal from 'sweetalert2';

const AdminEdit = () => {

  const navigate = useNavigate();

  const {adminId} = useParams();

  const [formErrors, setFormErrors] = useState({});

  const [admin, setAdmin] = useState({
    first_name: '',
    last_name: '',
    email: '',
    designation: '',
    department: '',
    password: '',
    user_information: '',
    image: '',
    gender: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  // admin data update function
  const handleSubmit = (e) => {

    e.preventDefault();
    
    if(confirm(`Are you sre you want to update your information?`)){
      
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
        
      navigate('/admins', { replace: true });
      
      fetch(`http://127.0.0.1:8000/api/admins/${adminId}`,{
        body: JSON.stringify({
          ...admin,
        }),
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
      })
      .then((res) => res.json())
      .then((res) =>{
        console.info(res);
        setFormErrors(validate(admin));
      })
      .catch((error) => {
        console.error(error);
      });
    }

  }


  // admin data fetch for edit
  useEffect(() => {

    fetch(`http://127.0.0.1:8000/api/admins/${adminId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAdmin(res.data?.admin);
      })
      .catch((error) => {
        console.error(error);
      });


  }, [adminId]);


  // admin edit info validation
  const validate = (values) => {

    const errors = {};

    if (!values.first_name) {
      errors.first_name = 'first name required';
    }

    if (!values.last_name) {
      errors.last_name = 'last name required';
    }

    if (!values.email) {
      errors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'email is not valid';
    }

    if (!values.password) {
      errors.password = 'password is required';
    } else if (values.password.length < 4) {
      errors.password = 'password should be at least 4 char';
    }

    if (!values.designation) {
      errors.designation = 'designation required';
    }

    if (!values.department) {
      errors.department = 'department required';
    }

    if (!values.user_information) {
      errors.user_information = 'user_information required';
    }

    if (!values.image) {
      errors.image = 'image required';
    }

    if (!values.gender) {
      errors.gender = 'gender required';
    }

    return errors;
  };

  return (
    <>
      {/* Admin create table title section */}
      <Link to='/admins' className='add_button'>
        <button type='button' className='btn'>
          Admin Table <AiOutlineArrowRight />
        </button>
      </Link>

      <div className='admin_form'>
        <div className='container-fluid px-1 py-5 mx-auto'>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
              <div className='card'>
                {/* Admin create form title section */}
                <div className='col-md-6 text-center mb-5'>
                  <h2 className='heading-section'>Admin Form Edit Table</h2>
                  <div className='admin-create'>
                    <Link to='#' className='links'>
                      user
                    </Link>
                    <RxSlash />
                    <Link to='' className='links'>
                      admins
                    </Link>
                    <RxSlash />
                    <Link to='' className='actives'>
                      edit
                    </Link>
                  </div>
                </div>

                {/* admin create form table*/}
                <form className='form-card' onSubmit={ handleSubmit }>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      <label className='form-control-label px-3'>
                        First name<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='first_name'
                        name='first_name'
                        placeholder='Enter your first name'
                        onChange={handleChange}
                        value={admin?.first_name}
                      />{' '}
                      {formErrors.first_name && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.first_name}
                      </span>
                    )}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-control-label px-3'>
                        Last name<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='last_name'
                        name='last_name'
                        placeholder='Enter your last name'
                        onChange={handleChange}
                        value={admin?.last_name}
                      />{' '}
                       {formErrors.last_name && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.last_name}
                      </span>
                    )}
                    </div>
                  </div>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-control-label px-3'>
                        Email<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        id='email'
                        onChange={handleChange}
                        value={admin?.email}
                      />{' '}
                      {formErrors.email && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.email}
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
                        value={admin?.designation}
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
                        Department<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='department'
                        placeholder='Enter Your Department'
                        id='department'
                        onChange={handleChange}
                        value={admin?.department}
                      />{' '}
                      {formErrors.department && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.department}
                      </span>
                    )}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-control-label px-3'>
                        Gender <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='gender'
                        placeholder='Enter Your Gender'
                        id='gender'
                        onChange={handleChange}
                        value={admin?.gender}
                      />{' '}
                      {formErrors.gender && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.gender}
                      </span>
                    )}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-control-label px-3'>
                        Password<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='password'
                        name='password'
                        placeholder='Enter Your password'
                        id='password'
                        onChange={handleChange}
                        value={admin?.password}
                      />{' '}
                      {formErrors.password && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.password}
                      </span>
                    )}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-control-label px-3'>
                        Image <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='image'
                        placeholder='Enter Your Image'
                        id='image'
                        onChange={handleChange}
                        value={admin?.image}
                      />{' '}
                      {formErrors.image && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.image}
                      </span>
                    )}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-control-label px-3'>
                        User Information<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='user_information'
                        placeholder='Enter Your user information'
                        id='user_information'
                        onChange={handleChange}
                        value={admin?.user_information}
                      />{' '}
                      {formErrors.user_information && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.user_information}
                      </span>
                    )}
                    </div>
                  </div>

                  <div className='row justify-content-start'>
                    <div className='form-group col-sm-4'>
                      <button
                        type='submit'
                        className='btn-block btn-primary'
                        //disabled={setSubmitting}
                      >
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
    </>
  );
};

export default AdminEdit;
