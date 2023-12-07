import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminSidebar from '../../../../Sidebar/AdminSidebar';
import Footer from '../../../../Footer';
import TopBar from '../../../../TopBar';

const StudentFeeEdit = () => {
  const navigate = useNavigate();

  const { studentFeeId } = useParams();

  const [studentFee, setStudentFee] = useState({
    invoice_no: '',
    student: '',
    invoice_title: '',
    total_amount: '',
    paid_amount: '',
    status: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentFee({
      ...studentFee,
      [name]: value,
    });
  };

  // StudentFee data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/studentFees', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('invoice_no', studentFee.invoice_no);
      formData.append('student', studentFee.student);
      formData.append('invoice_title', studentFee.invoice_title);
      formData.append('total_amount', studentFee.total_amount);
      formData.append('paid_amount', studentFee.paid_amount);
      formData.append('status', studentFee.status);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/studentFees/${studentFeeId}`, {
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

  // StudentFee data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/studentFees/${studentFeeId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setStudentFee(res.data?.studentFee);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [studentFeeId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* StudentFee create table title section */}
        <Link to='/admin/studentFees' className='add_button'>
          <button type='button' className='btn'>
            Student Fee Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* StudentFee create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Student Fee Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        student-fee
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* StudentFee create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Invoice No <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='invoice_no'
                          placeholder='Enter invoice_no'
                          id='invoice_no'
                          onChange={handleChange}
                          value={studentFee?.invoice_no}
                        />{' '}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Student Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='student'
                          placeholder='Enter student'
                          id='student'
                          onChange={handleChange}
                          value={studentFee?.student}
                        />{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Invoice Title
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='invoice_title'
                          placeholder='Enter invoice title'
                          id='invoice_title'
                          onChange={handleChange}
                          value={studentFee?.invoice_title}
                        />{' '}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Total Amount<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='total_amount'
                          placeholder='Enter total_amount'
                          id='total_amount'
                          onChange={handleChange}
                          value={studentFee?.total_amount}
                        />{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Paid Amount
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='paid_amount'
                          placeholder='Enter paid amount'
                          id='paid_amount'
                          onChange={handleChange}
                          value={studentFee?.paid_amount}
                        />{' '}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Status<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='status'
                          placeholder='Enter status'
                          id='status'
                          onChange={handleChange}
                          value={studentFee?.status}
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

export default StudentFeeEdit;
