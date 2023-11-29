import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LibrarianEdit = () => {

  const navigate = useNavigate();

  const { librarianId } = useParams();

  const [librarian, setLibrarian] = useState({
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
    setLibrarian({
      ...librarian,
      [name]: value,
    });
  };

  // librarian data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/librarians', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('first_name', librarian.first_name);
      formData.append('last_name', librarian.last_name);
      formData.append('email', librarian.email);
      formData.append('phone_number', librarian.phone_number);
      formData.append('date_of_birth', librarian.date_of_birth);
      formData.append('address', librarian.address);
      formData.append('blood_group', librarian.blood_group);
      formData.append('password', librarian.password);
      formData.append(
        'password_confirmation',
        librarian.password_confirmation
      );
      formData.append('designation', librarian.designation);
      formData.append('department', librarian.department);
      formData.append('image', librarian.image);
      formData.append('gender', librarian.gender);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/librarians/${librarianId}`, {
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

  // librarian data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/librarians/${librarianId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLibrarian(res.data?.librarian);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [librarianId]);

  return (
    <>
      {/* Librarian create table title section */}
      <Link to='/librarians' className='add_button'>
        <button type='button' className='btn'>
          Librarian Table <AiOutlineArrowRight />
        </button>
      </Link>

      <div className='admin_form'>
        <div className='container-fluid px-1 py-5 mx-auto'>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
              <div className='card'>
                {/* Librarian create form title section */}
                <div className='col-md-6 text-center mb-5'>
                  <h2 className='heading-section'>Librarian Form Edit Table</h2>
                  <div className='admin-create'>
                    <Link to='#' className='links'>
                      user
                    </Link>
                    <RxSlash />
                    <Link to='' className='links'>
                      librarians
                    </Link>
                    <RxSlash />
                    <Link to='' className='actives'>
                      edit
                    </Link>
                  </div>
                </div>

                {/* Librarian create form table*/}
                <form className='form-card' onSubmit={handleSubmit}>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      <label className='form-control-label px-3'>
                        First name<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='first_name'
                        id='first_name'
                        placeholder='Enter your first name'
                        onChange={handleChange}
                        value={librarian?.first_name}
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
                        value={librarian?.last_name}
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
                        value={librarian?.email}
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
                        value={librarian?.designation}
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
                        value={librarian?.department}
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
                        value={librarian?.gender}
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
                        value={librarian?.password}
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
                          setLibrarian((value) => ({
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
                        value={librarian?.phone_number}
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
                        value={librarian?.date_of_birth}
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
                        value={librarian?.address}
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
                        value={librarian?.blood_group}
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
                        value={librarian?.password_confirmation}
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

export default LibrarianEdit;
