import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../../../Footer';
import AdminSidebar from '../../../../Sidebar/AdminSidebar';
import TopBar from '../../../../TopBar';

const PTeachingStaffEdit = () => {
  const navigate = useNavigate();

  const { pteachingStaffId } = useParams();

  const [pteachingStaff, setPTeachingStaff] = useState({
    name: '',
    designation: '',
    image: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPTeachingStaff({
      ...pteachingStaff,
      [name]: value,
    });
  };

  // PTeachingStaff data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/tteachingStaffs', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('name', pteachingStaff.name);
      formData.append('designation', pteachingStaff.designation);
      formData.append('image', pteachingStaff.image);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/pteachingStaffs/${pteachingStaffId}`, {
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

  // pteaching Staff data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/pteachingStaffs/${pteachingStaffId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setPTeachingStaff(res.data?.pteachingStaff);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pteachingStaffId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* pteachingStaff create table title section */}
        <Link to='/admin/tteachingStaffs' className='add_button'>
          <button type='button' className='btn'>
            P Teaching Staff Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* pteachingStaff create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      P Teaching Staff Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        pteaching-staffs
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* ptheachingStaff create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='name'
                          placeholder='Enter name'
                          id='name'
                          onChange={handleChange}
                          value={pteachingStaff?.name}
                        />{' '}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Designation<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='designation'
                          placeholder='Enter designation'
                          id='designation'
                          onChange={handleChange}
                          value={pteachingStaff?.designation}
                        />{' '}
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
                            setPTeachingStaff((value) => ({
                              ...value,
                              [e.target.name]: e.target.files[0],
                            }));
                          }}
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
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default PTeachingStaffEdit;
