import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ExamCategoryEdit = () => {
  const navigate = useNavigate();

  const { examCategoryId } = useParams();

  const [examCategory, setExamCategory] = useState({
    title: '',
    class_name: '',
    section_name: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamCategory({
      ...examCategory,
      [name]: value,
    });
  };

  // ExamCategory data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/examCategories', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('title', examCategory.title);
      formData.append('class_name', examCategory.class_name);
      formData.append('section_name', examCategory.section_name);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/examCategories/${examCategoryId}`, {
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

  // ExamCategory data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/examCategories/${examCategoryId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setExamCategory(res.data?.examCategory);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [examCategoryId]);

  return (
    <>
      {/* ExamCategory create table title section */}
      <Link to='/admin/examCategories' className='add_button'>
        <button type='button' className='btn'>
          Exam Category Table <AiOutlineArrowRight />
        </button>
      </Link>

      <div className='admin_form'>
        <div className='container-fluid px-1 py-5 mx-auto'>
          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
              <div className='card'>
                {/* ExamCategory create form title section */}
                <div className='col-md-6 text-center mb-5'>
                  <h2 className='heading-section'>
                    Exam Category Form Edit Table
                  </h2>
                  <div className='admin-create'>
                    <Link to='#' className='links'>
                      user
                    </Link>
                    <RxSlash />
                    <Link to='' className='links'>
                      exam-categories
                    </Link>
                    <RxSlash />
                    <Link to='' className='actives'>
                      edit
                    </Link>
                  </div>
                </div>

                {/* ExamCategory create form table*/}
                <form className='form-card' onSubmit={handleSubmit}>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Exam Name <span className='text-danger'> *</span>
                      </label>{' '}
                      <select
                        name='title'
                        className='form-select'
                        value={examCategory?.title}
                        onChange={handleChange}
                      >
                        <option selected>Choose...</option>
                        <option value='Final Exam'>Final Exam</option>
                        <option value='Half Yearly'>Half Yearly</option>
                        <option value='Test Exam'>Test Exam</option>
                        <option value='Pre-test Exam'>Pre-test Exam</option>
                      </select>{' '}
                    </div>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Class Name <span className='text-danger'> *</span>
                      </label>{' '}
                      <select
                        name='class_name'
                        className='form-select'
                        value={examCategory?.class_name}
                        onChange={handleChange}
                      >
                        <option selected>Choose...</option>
                        <option value='One'>One</option>
                        <option value='Two'>Two</option>
                      </select>{' '}
                    </div>
                  </div>
                  <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                      {' '}
                      <label className='form-label px-3'>
                        Section Name <span className='text-danger'> *</span>
                      </label>{' '}
                      <select
                        name='section_name'
                        className='form-select'
                        value={examCategory?.section_name}
                        onChange={handleChange}
                      >
                        <option selected>Choose...</option>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
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
    </>
  );
};

export default ExamCategoryEdit;
