import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const OfflineExamEdit = () => {
  const navigate = useNavigate();

  const { offlineExamId } = useParams();

  const [offlineExam, setOfflineExam] = useState({
    exam_name: '',
    paper: '',
    class_name: '',
    section: '',
    subject_code: '',
    date_time: '',
    exam_start_time: '',
    exam_end_time: '',
    building_name: '',
    room_number: '',
    total_marks: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfflineExam({
      ...offlineExam,
      [name]: value,
    });
  };

  // offline Exam data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/offlineExams', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('exam_name', offlineExam.exam_name);
      formData.append('paper', offlineExam.paper);
      formData.append('class_name', offlineExam.class_name);
      formData.append('section', offlineExam.section);
      formData.append('subject_code', offlineExam.subject_code);
      formData.append('date_time', offlineExam.date_time);
      formData.append('exam_start_time', offlineExam.exam_start_time);
      formData.append('exam_end_time', offlineExam.exam_end_time);
      formData.append('building_name', offlineExam.building_name);
      formData.append('room_number', offlineExam.room_number);
      formData.append('total_marks', offlineExam.total_marks);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/offlineExams/${offlineExamId}`, {
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

  // offline Exam data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/offlineExams/${offlineExamId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setOfflineExam(res.data?.offlineExam);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [offlineExamId]);

  return (
    <>
      {/* offline Exam create table title section */}
      <Link to='/admin/offlineExams' className='add_button'>
        <button type='button' className='btn'>
         Offline Exam Table <AiOutlineArrowRight />
        </button>
      </Link>

      <div className='admin_form'>
        <div className='container-fluid px-1 py-5 mx-auto'>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
              <div className='card'>
                {/* offlineExam create form title section */}
                <div className='col-md-6 text-center mb-5'>
                  <h2 className='heading-section'>Offline Exam Form Edit Table</h2>
                  <div className='admin-create'>
                    <Link to='#' className='links'>
                      user
                    </Link>
                    <RxSlash />
                    <Link to='' className='links'>
                     offline-exams
                    </Link>
                    <RxSlash />
                    <Link to='' className='actives'>
                      edit
                    </Link>
                  </div>
                </div>

                {/* offlineExam create form table*/}
                <form className='form-card' onSubmit={handleSubmit}>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Exam Name<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='exam_name'
                        placeholder='Enter exam name'
                        id='exam_name'
                        onChange={handleChange}
                        value={offlineExam?.exam_name}
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
                        value={offlineExam?.paper}
                      />{' '}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                      Class Name
                        <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='class_name'
                        placeholder='Enter class name'
                        id='class_name'
                        onChange={handleChange}
                        value={offlineExam?.class_name}
                      />{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                       Section<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='section'
                        placeholder='Enter section'
                        id='section'
                        onChange={handleChange}
                        value={offlineExam?.section}
                      />{' '}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Date Time <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='date_time'
                        placeholder='Enter exam date '
                        id='date_time'
                        onChange={handleChange}
                        value={offlineExam?.date_time}
                      />{' '}
                    </div>

                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                       Exam Start Time <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='time'
                        name='exam_start_time'
                        placeholder='Enter exam start time'
                        id='exam_start_time'
                        onChange={handleChange}
                        value={offlineExam?.exam_start_time}
                      />{' '}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Exam End Time
                        <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='time'
                        name='exam_end_time'
                        placeholder='Enter total exam end time'
                        id='exam_end_time'
                        onChange={handleChange}
                        value={offlineExam?.exam_end_time}
                      />{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                      Building Name <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='building_name'
                        placeholder='Enter building name'
                        id='building_name'
                        onChange={handleChange}
                        value={offlineExam?.building_name}
                      />{' '}
                    </div>

                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Room Number
                        <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='text'
                        name='room_number'
                        placeholder='Enter room number'
                        id='room_number'
                        onChange={handleChange}
                        value={offlineExam?.room_number}
                      />{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                       Total Marks<span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='number'
                        name='total_marks'
                        placeholder='Enter total marks'
                        id='total_marks'
                        onChange={handleChange}
                        value={offlineExam?.total_marks}
                      />{' '}
                    </div>
                  </div>

                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Subject Code
                        <span className='text-danger'> *</span>
                      </label>{' '}
                      <input
                        type='number'
                        name='subject_code'
                        placeholder='Enter subject code'
                        id='subject_code'
                        onChange={handleChange}
                        value={offlineExam?.subject_code}
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

export default OfflineExamEdit;
