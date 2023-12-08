import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from "../../../../../Footer";
import AdminSidebar from '../../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../../TopBar";

const SyllabusEdit = () => {
  const navigate = useNavigate();

  const { syllabusId } = useParams();

  const [syllabus, setSyllabus] = useState({
    class_name: '',
    // subject_name: '',
    // topic: '',
    // paper: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSyllabus({
      ...syllabus,
      [name]: value,
    });
  };

  // Syllabus data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/syllabuses', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('class_name', syllabus.class_name);
      // formData.append('subject_name', syllabus.subject_name);
      // formData.append('topic', syllabus.topic);
      // formData.append('paper', syllabus.paper);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/syllabuses/${syllabusId}`, {
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

  // syllabus data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/syllabuses/${syllabusId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setSyllabus(res.data?.syllabus);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [syllabusId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* syllabus create table title section */}
        <Link to='/admin/syllabuses' className='add_button'>
          <button type='button' className='btn'>
            Syllabus Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* syllabus create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Syllabus Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        syllabus
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* syllabus create form table*/}
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
                          value={syllabus?.class_name}
                        />{' '}
                      </div>

                      {/* <div className='form-group col-sm-6 flex-column d-flex'>
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
                          value={syllabus?.subject_name}
                        />{' '}
                      </div> */}
                    </div>

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Topic
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='topic'
                          placeholder='Enter topic'
                          id='topic'
                          onChange={handleChange}
                          value={syllabus?.topic}
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
                          value={syllabus?.paper}
                        />{' '}
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

export default SyllabusEdit;
