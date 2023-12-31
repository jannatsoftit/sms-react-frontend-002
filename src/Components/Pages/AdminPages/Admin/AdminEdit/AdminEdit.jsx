import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import AdminSidebar from '../../../../Sidebar/AdminSidebar';
import Footer from '../../../../Footer';
import TopBar from '../../../../TopBar';

const AdminEdit = () => {
  const navigate = useNavigate();

  const { adminId } = useParams();

  const [admin, setAdmin] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    address: '',
    blood_group: '',
    password_confirmation: '',
    password: '',
    designation: '',
    department: '',
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

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Update Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/admins', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('first_name', admin.first_name);
      formData.append('last_name', admin.last_name);
      formData.append('email', admin.email);
      formData.append('phone_number', admin.phone_number);
      formData.append('date_of_birth', admin.date_of_birth);
      formData.append('address', admin.address);
      formData.append('blood_group', admin.blood_group);
      formData.append('password', admin.password);
      formData.append('password_confirmation', admin.password_confirmation);
      formData.append('designation', admin.designation);
      formData.append('department', admin.department);
      formData.append('image', admin.image);
      formData.append('gender', admin.gender);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/admins/${adminId}`, {
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

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* Admin create table title section */}
        <Link to='/admin/admins' className='add_button'>
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
                          value={admin?.first_name}
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
                          value={admin?.last_name}
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
                          value={admin?.email}
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
                          value={admin?.designation}
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
                          value={admin?.department}
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
                          value={admin?.gender}
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
                          value={admin?.password}
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
                            setAdmin((value) => ({
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
                          Phone Number <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='phone_number'
                          name='phone_number'
                          placeholder='Enter your phone number'
                          onChange={handleChange}
                          value={admin?.phone_number}
                        />{' '}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Date Of Birth <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='date'
                          id='date_of_birth'
                          name='date_of_birth'
                          placeholder='Enter your date_of_birth'
                          onChange={handleChange}
                          value={admin?.date_of_birth}
                        />{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Address <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='address'
                          className='form-select'
                          value={admin?.address}
                          onChange={handleChange}
                        >
                          <option selected hidden>
                            Enter Address
                          </option>
                          <option value='Dhaka'>Dhaka</option>
                          <option value='Khulna'>Khulna</option>
                          <option value='Jessore'>Jessore</option>
                          <option value='Barishal'>Barishal</option>
                          <option value='Chittagong'>Chittagong</option>
                          <option value='Sylhet'>Sylhet</option>
                        </select>{' '}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Blood Group <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='blood_group'
                          className='form-select'
                          value={admin?.blood_group}
                          onChange={handleChange}
                        >
                          <option selected hidden>
                            Enter Blood Group
                          </option>
                          <option value='A+'>A+</option>
                          <option value='A-'>A-</option>
                          <option value='B+'>B+</option>
                          <option value='B-'>B-</option>
                          <option value='AB+'>AB+</option>
                          <option value='AB-'>AB-</option>
                          <option value='O-'>O-</option>
                          <option value='O+'>O+</option>
                        </select>{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Password Confirmation{' '}
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          id='password_confirmation'
                          name='password_confirmation'
                          placeholder='Enter your password confirmation'
                          onChange={handleChange}
                          value={admin?.password_confirmation}
                        />{' '}
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
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default AdminEdit;
