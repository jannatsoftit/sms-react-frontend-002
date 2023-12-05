import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SchoolEdit = () => {
  
  const navigate = useNavigate();

  const { schoolId } = useParams();

  const [school, setSchool] = useState({
    title: '',
    email: '',
    phone: '',
    address: '',
    facebook_page: '',
    status: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchool({
      ...school,
      [name]: value,
    })
  };

  // School data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate(`/admin/schools/${schoolId}`, { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('title', school.title);
      formData.append('email', school.email);
      formData.append('phone', school.phone);
      formData.append('address', school.address);
      formData.append('facebook_page', school.facebook_page);
      formData.append('status', school.status);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/schools/${schoolId}`, {
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

  // school data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/schools/${schoolId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setSchool(res.data?.school);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [schoolId]);

  return (
    <>
      {/* school create table title section */}
      <Link  to={`/admin/schools/${school?.id}`} className='add_button'>
        <button type='button' className='btn'>
          School Info <AiOutlineArrowRight />
        </button>
      </Link>

      <div className='admin_form'>
        <div className='container-fluid px-1 py-5 mx-auto'>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
              <div className='card'>
                {/* school create form title section */}
                <div className='col-md-6 text-center mb-5'>
                  <h2 className='heading-section'>
                    School Form Edit Table
                  </h2>
                  <div className='admin-create'>
                    <Link to='#' className='links'>
                      user
                    </Link>
                    <RxSlash />
                    <Link to='' className='links'>
                      school
                    </Link>
                    <RxSlash />
                    <Link to='' className='actives'>
                      edit
                    </Link>
                  </div>
                </div>

                {/* school create form table*/}
                <form className='form-card' onSubmit={handleSubmit}>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        School Name <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Enter school name'
                        onChange={handleChange}
                        value={school?.title}
                      />{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Email<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Enter email'
                        onChange={handleChange}
                        value={school?.email}
                      />{' '}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Phone <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='phone'
                        name='phone'
                        placeholder='Enter phone number'
                        onChange={handleChange}
                        value={school?.phone}
                      />{' '} 
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Address <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='address'
                        name='address'
                        placeholder='Enter address'
                        onChange={handleChange}
                        value={school?.address}
                      />{' '} 
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Facebook Page Link <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='facebook_page'
                        name='facebook_page'
                        placeholder='Enter facebook_page'
                        onChange={handleChange}
                        value={school?.facebook_page}
                      />{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Status <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        id='status'
                        name='status'
                        placeholder='Enter status'
                        onChange={handleChange}
                        value={school?.status}
                      />{' '}
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
    </>
  );
};

export default SchoolEdit;
