import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../../../Footer';
import AdminSidebar from '../../../../Sidebar/AdminSidebar';
import TopBar from '../../../../TopBar';

const GradeEdit = () => {
  const navigate = useNavigate();

  const { gradeId } = useParams();

  const [grade, setGrade] = useState({
    grade_point: '',
    letter_grade: '',
    marks_interval: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrade({
      ...grade,
      [name]: value,
    });
  };

  // grade data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/grades', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('grade_point', grade.grade_point);
      formData.append('letter_grade', grade.letter_grade);
      formData.append('marks_interval', grade.marks_interval);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/grades/${gradeId}`, {
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

  // Grade data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grades/${gradeId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setGrade(res.data?.grade);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [gradeId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* Grade create table title section */}
        <Link to='/admin/grades' className='add_button'>
          <button type='button' className='btn'>
            Grade Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* Grade create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>Grade Form Edit Table</h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        grades
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* Grade create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Grade Point <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='grade_point'
                          className='form-select'
                          value={grade?.grade_point}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='5'>5</option>
                          <option value='4.5'>4.5</option>
                          <option value='4'>4</option>
                          <option value='3.5'>3.5</option>
                          <option value='3'>3</option>
                          <option value='2'>2</option>
                        </select>{' '}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Letter grade <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='letter_grade'
                          className='form-select'
                          value={grade?.letter_grade}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='A+'>A+</option>
                          <option value='A'>A</option>
                          <option value='A-'>A-</option>
                          <option value='B'>B</option>
                          <option value='C'>C</option>
                          <option value='F'>F</option>
                        </select>{' '}
                      </div>
                    </div>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Marks interval <span className='text-danger'> *</span>
                        </label>{' '}
                        <select
                          name='marks_interval'
                          className='form-select'
                          value={grade?.marks_interval}
                          onChange={handleChange}
                        >
                          <option selected>Choose...</option>
                          <option value='100-80'>100-80</option>
                          <option value='79-70'>79-70</option>
                          <option value='69-60'>69-60</option>
                          <option value='59-50'>59-50</option>
                          <option value='49-40'>49-40</option>
                          <option value='39-33'>39-33</option>
                          <option value='32-0'>32-0</option>
                        </select>{' '}
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

export default GradeEdit;
