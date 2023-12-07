import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from "../../../../../Footer";
import AdminSidebar from '../../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../../TopBar";

const ClassRoutineEdit = () => {
  const navigate = useNavigate();

  const { classRoutineId } = useParams();

  const [classRoutine, setClassRoutine] = useState({
    day: '',
    class_name: '',
    subject_name: '',
    paper: '',
    class_time: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassRoutine({
      ...classRoutine,
      [name]: value,
    });
  };

  // ClassRoutine data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/classRoutines', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('day', classRoutine.day);
      formData.append('class_name', classRoutine.class_name);
      formData.append('subject_name', classRoutine.subject_name);
      formData.append('paper', classRoutine.paper);
      formData.append('class_time', classRoutine.class_time);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/classRoutines/${classRoutineId}`, {
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

  // ClassRoutine data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classRoutines/${classRoutineId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setClassRoutine(res.data?.classRoutine);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [classRoutineId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* ClassRoutine create table title section */}
        <Link to='/admin/classRoutines' className='add_button'>
          <button type='button' className='btn'>
            Class Routine Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* ClassRoutine create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Class Routine Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        class-routine
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* ClassRoutine create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='class_name'
                          placeholder='Enter class name'
                          id='class_name'
                          onChange={handleChange}
                          value={classRoutine?.class_name}
                        />{' '}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Subject Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='subject_name'
                          placeholder='Enter subject name'
                          id='subject_name'
                          onChange={handleChange}
                          value={classRoutine?.subject_name}
                        />{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Day
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='day'
                          placeholder='Enter day'
                          id='day'
                          onChange={handleChange}
                          value={classRoutine?.day}
                        />{' '}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Paper<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='paper'
                          placeholder='Enter paper'
                          id='paper'
                          onChange={handleChange}
                          value={classRoutine?.paper}
                        />{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Time
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='class_time'
                          placeholder='Enter class time'
                          id='class_time'
                          onChange={handleChange}
                          value={classRoutine?.class_time}
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

export default ClassRoutineEdit;
