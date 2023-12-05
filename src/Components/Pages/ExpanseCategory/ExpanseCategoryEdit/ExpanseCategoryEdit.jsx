import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from '../../../Sidebar';
import Footer from '../../../Footer';
import TopBar from '../../../TopBar';

const ExpanseCategoryEdit = () => {
  const navigate = useNavigate();

  const { expanseCategoryId } = useParams();

  const [expanseCategory, setExpanseCategory] = useState({
    name: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpanseCategory({
      ...expanseCategory,
      [name]: value,
    });
  };

  // expanseCategory data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/expanseCategories', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('name', expanseCategory.name);

      console.log(formData);

      fetch(
        `http://127.0.0.1:8000/api/expanseCategories/${expanseCategoryId}`,
        {
          body: formData,
          headers: {
            Accept: 'application/json',
          },
          method: 'POST',
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.info(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // expanseCategory data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/expanseCategories/${expanseCategoryId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setExpanseCategory(res.data?.expanseCategory);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [expanseCategoryId]);

  return (
    <>
      <TopBar />
      <Sidebar>
        {/* expanseCategory create table title section */}
        <Link to='/admin/expanseCategories' className='add_button'>
          <button type='button' className='btn'>
            Expanse Category Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* ExpanseCategory create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Expanse Category Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        expanse-categories
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* expanseCategory create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Expanse Category Name{' '}
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='name'
                          placeholder='Enter name'
                          id='name'
                          onChange={handleChange}
                          value={expanseCategory?.name}
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
      </Sidebar>
    </>
  );
};

export default ExpanseCategoryEdit;
