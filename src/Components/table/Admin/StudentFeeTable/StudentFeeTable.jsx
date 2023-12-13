/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from "../../../Footer";


const StudentFeeTable = () => {
  //StudentFee

  // StudentFee data
  const [studentFees, setStudentFees] = useState(null);

  // StudentFee table reload state
  const [reload, setReload] = useState(0);

  // StudentFee table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = studentFees?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((studentFees || []).length / recordsPerPage); // studentFees.length = 0,2,4,6,8....
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  // handle prePage, nextPage and CurrentPage function

  const perPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  // StudentFee data delete function
  const handleDelete = (studentFee) => {
    if (
      confirm(`Are You sure you want to delete student fee ?`)
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/studentFees/${studentFee.id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          console.info(res);
          setReload((value) => ++value);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  //StudentFee all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/studentFees?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setStudentFees(res.data?.studentFees);
      })
      .catch((error) => {
        console.error(error);
        setStudentFees(null);
      });
  }, [reload]);

  return (
    <>
      <AdminSidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-7 text-center mb-5'>
              <h2 className='heading-section'>Student Fee Table List</h2>
              <div className='admin' style={{marginLeft:'30px'}}>
                <Link to='#' className='links'>
                  administration
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  student-fees
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-12'>
                <div className='table-wrap'>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr>
                        <th>Invoice No</th>
                        <th>Student</th>
                        <th>Invoice Title</th>
                        <th>Total Amount</th>
                        <th>Paid Amount</th>
                        <th>Status</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            <td>
                              <span>{record?.invoice_no}</span>
                            </td>
                            <td>
                              <span>{record?.student}</span>
                            </td>
                            <td>
                              <span>{record?.invoice_title}</span>
                            </td>
                            <td>
                              <span>{record?.total_amount}</span>
                            </td>
                            <td>
                              <span>{record?.paid_amount}</span>
                            </td>
                            <td>
                              {
                               ( record?.status) === 'paid' ?
                                <button
                                  className='btn btn-success'
                                  style={{fontSize:'12px'}} 
                                ><span>{record?.status}</span></button>
                                :
                                ( record?.status) === 'unpaid' ?
                                <button
                                  className='btn btn-danger'
                                  style={{fontSize:'12px'}}  
                                ><span>{record?.status}</span></button>
                                :
                                null
                              }
                              
                            </td>
                            <td>
                              <div className='dropdown'>
                                <button
                                  className='btn btn-secondary dropdown-toggle'
                                  type='button'
                                  id='dropdownMenuButton1'
                                  data-bs-toggle='dropdown'
                                  aria-expanded='false'
                                >
                                  Actions
                                </button>
                                <ul
                                  className='dropdown-menu'
                                  aria-labelledby='dropdownMenuButton1'
                                >
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      to={`/admin/studentFees/${record?.id}/edit`}
                                    >
                                      Edit StudentFee
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      onClick={() => handleDelete(record)}
                                    >
                                      Delete StudentFee
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* StudentFee list table pagination start  */}
            <nav className='pagination'>
              <ul className='pagination'>
                <li className='page-item'>
                  <Link to={'#'} className='page-link' onClick={perPage}>
                    Prev
                  </Link>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${currentPage === n ? 'active' : ''}`}
                    key={i}
                  >
                    <Link
                      to={'#'}
                      className='page-link'
                      onClick={() => handleCPage(n)}
                    >
                      {n}
                    </Link>
                  </li>
                ))}
                <li className='page-item'>
                  <Link to={'#'} className='page-link' onClick={nextPage}>
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
            {/* StudentFee list table pagination end  */}
          </div>
        </section>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default StudentFeeTable;
