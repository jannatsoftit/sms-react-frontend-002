import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminSidebar from '../../../../../Sidebar/AdminSidebar';
import Footer from "../../../../../Footer";
import TopBar from "../../../../../TopBar";

const AdmissionCircularEdit = () => { //admissionCircular AdmissionCircular
  const navigate = useNavigate();

  const { admissionCircularId } = useParams();

  const [admissionCircular, setAdmissionCircular] = useState({
    title: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmissionCircular({
      ...admissionCircular,
      [name]: value,
    });
  };

  // AdmissionCircular data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/admissionCirculars', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('title', admissionCircular.title);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/admissionCirculars/${admissionCircularId}`, {
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

  // AdmissionCircular data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admissionCirculars/${admissionCircularId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setAdmissionCircular(res.data?.admissionCircular);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [admissionCircularId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* admissionCircular create table title section */}
        <Link to='/admin/admissionCirculars' className='add_button'>
          <button type='button' className='btn'>
          Admission Circular Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* admissionCircular create form title section */}
                  <div className='col-md-7 text-center mb-5' style={{marginLeft:'20px'}}>
                    <h2 className='heading-section'>
                    Admission Circular Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        admission-circular
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* admissionCircular create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                    <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-control-label px-3'>
                          Admission Circular<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='title'
                          placeholder='Enter Admission Circular Name'
                          id='title'
                          onChange={handleChange}
                          value={admissionCircular?.title}
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

export default AdmissionCircularEdit;
