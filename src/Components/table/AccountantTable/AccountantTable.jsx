/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AdminSidebar from "../../Sidebar/AdminSidebar";
import Footer from "../../Footer";


const AccountantTable = () => {
  // Accountant data
  const [accountants, setAccountants] = useState(null);

  // Accountant table reload state
  const [reload, setReload] = useState(0);

  // Accountant table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = accountants?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((accountants || []).length / recordsPerPage); // accountants.length = 0,2,4,6,8....
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

  //Accountant data delete function
  const handleDelete = (accountant) => {
    if (
      confirm(`Are You sure you want to delete accountant ${accountant.id}?`)
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/accountants/${accountant.id}`, {
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

  //Accountant all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/accountants?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setAccountants(res.data.accountants);
      })
      .catch((error) => {
        console.error(error);
        setAccountants(null);
      });
  }, [reload]);

  return (
    <>
      <AdminSidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>Accountant Table List</h2>
              <div className='admin'>
                <Link to='#' className='links'>
                  user
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  accountants
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-12'>
                <div className='table-wrap'>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr>
                        {/* <th>ID</th> */}
                        <th>Image</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>User Info</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            {/* <td>
                            <span>{record?.id}</span>
                          </td> */}
                            <td>
                              <img
                                className='rounded-circle'
                                src={`http://127.0.0.1:8000/storage/AC_img/${record.image}`}
                                width='50px'
                                alt={record?.name}
                              />
                            </td>
                            <td>
                              <span>
                                {record?.first_name} {record?.last_name}
                              </span>
                            </td>
                            <td>
                              <span>{record?.designation}</span>
                            </td>
                            <td>
                              <span>{record?.department}</span>
                            </td>
                            <td>
                              <span>{record?.email}</span>
                            </td>
                            <td>
                              <span>{record?.phone_number}</span>
                            </td>
                            <td>
                              <div className='user_information'>
                                <p>
                                  <b>Info:</b> Blood Group:{record?.blood_group}
                                  , Address:{record?.address}
                                </p>
                              </div>
                            </td>
                            <td>
                              <span>{record?.date_of_birth}</span>
                            </td>
                            <td>
                              <span>{record?.gender}</span>
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
                                      to={`/admin/accountants/${record?.id}`}
                                    >
                                      Show Accountant
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      to={`/admin/accountants/${record?.id}/edit`}
                                    >
                                      Edit Accountant
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      onClick={() => handleDelete(record)}
                                    >
                                      Delete Accountant
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

            {/* Accountant list table pagination start  */}
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
            {/* Accountant list table pagination end  */}
          </div>
        </section>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default AccountantTable;
