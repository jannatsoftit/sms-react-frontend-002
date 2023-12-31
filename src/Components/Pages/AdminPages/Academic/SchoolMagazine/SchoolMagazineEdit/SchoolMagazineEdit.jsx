import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from "../../../../../Footer";
import AdminSidebar from '../../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../../TopBar";

const SchoolMagazineEdit = () => {
  const navigate = useNavigate();

  const { schoolMagazineId } = useParams();

  const [schoolMagazine, setSchoolMagazine] = useState({
    magazine_name: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolMagazine({
      ...schoolMagazine,
      [name]: value,
    });
  };

  // SchoolMagazine data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/schoolMagazines', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('magazine_name', schoolMagazine.magazine_name);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/schoolMagazines/${schoolMagazineId}`, {
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

  // schoolMagazine data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/schoolMagazines/${schoolMagazineId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setSchoolMagazine(res.data?.schoolMagazine);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [schoolMagazineId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* schoolMagazine create table title section */}
        <Link to='/admin/schoolMagazines' className='add_button'>
          <button type='button' className='btn'>
            School Magazine Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* schoolMagazine create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      School Magazine Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        school-magazines
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* SchoolMagazine create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          School Magazine Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='magazine_name'
                          placeholder='Enter magazine name'
                          id='magazine_name'
                          onChange={handleChange}
                          value={schoolMagazine?.magazine_name}
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

export default SchoolMagazineEdit;
