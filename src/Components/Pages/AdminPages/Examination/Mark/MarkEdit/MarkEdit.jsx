import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from "../../../../../Footer";
import AdminSidebar from '../../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../../TopBar";

const MarkEdit = () => {
  const navigate = useNavigate();

  const { markId } = useParams();

  const [mark, setMark] = useState({
    student_name: '',
    class_name: '',
    //file: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMark({
      ...mark,
      [name]: value,
    });
  };

  // mark data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/marks', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('student_name', mark.student_name);
      formData.append('class_name', mark.class_name);
      //formData.append('file', mark.file);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/marks/${markId}`, {
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

  // mark data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks/${markId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setMark(res.data?.mark);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [markId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* mark create table title section */}
        <Link to='/admin/marks' className='add_button'>
          <button type='button' className='btn'>
            Exam Results Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* mark create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Exam Results Form Edit Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                       results
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* mark create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Exam Name <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='student_name'
                          placeholder='Enter student name'
                          id='student_name'
                          onChange={handleChange}
                          value={mark?.student_name}
                        />{' '}
                      </div>

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
                          value={mark?.class_name}
                        />{' '}
                      </div>
                    </div>

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Results <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='file'
                          placeholder='Enter results'
                          id='file'
                          onChange={handleChange}
                          value={mark?.file}
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

export default MarkEdit;
