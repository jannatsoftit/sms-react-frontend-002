import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AccountantEdit = () => {

  const navigate = useNavigate();

  const { accountantId } = useParams();

  const [accountant, setAccountant] = useState({
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
    setAccountant({
      ...accountant,
      [name]: value,
    });
  };

  // Accountant data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/accountants', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('first_name', accountant.first_name);
      formData.append('last_name', accountant.last_name);
      formData.append('email', accountant.email);
      formData.append('designation', accountant.designation);
      formData.append('department', accountant.department);
      formData.append('password', accountant.password);
      formData.append('user_information', accountant.user_information);
      formData.append('image', accountant.image);
      formData.append('gender', accountant.gender);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/accountants/${accountantId}`, {
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => {
          console.info(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Accountant data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/accountants/${accountantId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAccountant(res.data?.accountant);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [accountantId]);

  return (
    <>
      {/* Accountant create table title section */}
      <Link to='/accountants' className='add_button'>
        <button type='button' className='btn'>
        Accountant Table <AiOutlineArrowRight />
        </button>
      </Link>

      <div className='admin_form'>
        <div className='container-fluid px-1 py-5 mx-auto'>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
              <div className='card'>
                {/* Accountant create form title section */}
                <div className='col-md-6 text-center mb-5'>
                  <h2 className='heading-section'>Accountant Form Edit Table</h2>
                  <div className='admin-create'>
                    <Link to='#' className='links'>
                      user
                    </Link>
                    <RxSlash />
                    <Link to='' className='links'>
                      accountants
                    </Link>
                    <RxSlash />
                    <Link to='' className='actives'>
                      edit
                    </Link>
                  </div>
                </div>

                {/* Accountant create form table*/}
                <form className='form-card' onSubmit={handleSubmit}>
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
                        value={accountant?.first_name}
                      />{' '}
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
                        value={accountant?.last_name}
                      />{' '}
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
                        value={accountant?.email}
                      />{' '}
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
                        value={accountant?.designation}
                      />{' '}
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
                        value={accountant?.department}
                      />{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Gender <span className='text-danger'> *</span>
                      </label>{' '}
                      <select
                        name='gender'
                        className='form-select'
                        value={accountant?.gender}
                        onChange={handleChange}
                      >
                        <option selected>Choose...</option>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                      </select>{' '}
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
                        value={accountant?.password}
                      />{' '}
                    </div>
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
                          setAccountant((value) => ({
                            ...value,
                            [e.target.name]: e.target.files[0],
                          }));
                        }}
                      />{' '}
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
                        value={accountant?.user_information}
                      />{' '}
                    </div>
                  </div>

                  <div className='row justify-content-start'>
                    <div className='form-group col-sm-4'>
                      <button
                        type='submit'
                        className='btn-block btn-primary'
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

export default AccountantEdit;
