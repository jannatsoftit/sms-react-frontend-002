//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const StudentFeeForm = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const [inputFields, setInputFields] = useState({
    invoice_no: '',
    student: '',
    invoice_title: '',
    total_amount: '',
    paid_amount: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      navigate('/admin/studentFees', { replace: true });
      console.log(inputFields);
    }
  }, [formErrors]);

  // StudentFee data create function
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('invoice_no', inputFields.invoice_no);
    formData.append('student', inputFields.student);
    formData.append('invoice_title', inputFields.invoice_title);
    formData.append('total_amount', inputFields.total_amount);
    formData.append('paid_amount', inputFields.paid_amount);
    formData.append('status', inputFields.status);

    fetch(`http://127.0.0.1:8000/api/studentFees`, {
      body: formData,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsSubmit(true);
        setFormErrors(validate(inputFields));
      })
      .catch((error) => {
        console.error(error);
        isSubmit(false);
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.invoice_no) {
      errors.invoice_no = 'invoice no required';
    }

    if (!values.student) {
      errors.student = 'student required';
    }

    if (!values.invoice_title) {
      errors.invoice_title = 'invoice title required';
    }
    if (!values.total_amount) {
      errors.total_amount = 'total amount is required';
    }

    if (!values.paid_amount) {
      errors.paid_amount = 'paid amount is required';
    }

    if (!values.status) {
      errors.status = 'status is required';
    }

    return errors;
  };

  return (
    <div className='admin_form'>
      <div className='container-fluid px-1 py-5 mx-auto'>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
            <div className='card'>
              {/* studentFee create form title section */}
              <div className='col-md-6 text-center mb-5'>
                <h2 className='heading-section'>Student Fee Form Table</h2>
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
                    create
                  </Link>
                </div>
              </div>

              {/* studentFee create form table*/}
              <form className='form-card' onSubmit={handelSubmit}>
                <div className='row justify-content-between text-left'>
                <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Invoice No<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='invoice_no'
                      placeholder='Enter invoice no'
                      id='invoice_no'
                      onChange={handleChange}
                      value={inputFields.invoice_no}
                    />{' '}
                    {formErrors.invoice_no && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.invoice_no}
                      </span>
                    )}
                  </div>

                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Student Name <span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='student'
                      placeholder='Enter student'
                      id='student'
                      onChange={handleChange}
                      value={inputFields.student}
                    />{' '}
                    {formErrors.student && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.student}
                      </span>
                    )}
                  </div>    
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Invoice Title<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='invoice_title'
                      placeholder='Enter invoice title'
                      id='invoice_title'
                      onChange={handleChange}
                      value={inputFields.invoice_title}
                    />{' '}
                    {formErrors.invoice_title && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.invoice_title}
                      </span>
                    )}
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
                      value={inputFields.total_amount}
                    />{' '}
                    {formErrors.total_amount && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.total_amount}
                      </span>
                    )}
                  </div>
                </div>

                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    {' '}
                    <label className='form-label px-3'>
                      Paid Amount<span className='text-danger'> *</span>
                    </label>{' '}
                    <input
                      type='text'
                      name='paid_amount'
                      placeholder='Enter paid amount'
                      id='paid_amount'
                      onChange={handleChange}
                      value={inputFields.paid_amount}
                    />{' '}
                    {formErrors.paid_amount && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.paid_amount}
                      </span>
                    )}
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
                      value={inputFields.status}
                    />{' '}
                    {formErrors.status && (
                      <span style={{ color: '#e74c3c' }}>
                        {formErrors.status}
                      </span>
                    )}
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
  );
};

export default StudentFeeForm;
