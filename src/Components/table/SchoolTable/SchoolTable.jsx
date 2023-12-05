/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const SchoolTable = () => {
  // School data
  const [schools, setSchools] = useState(null);


  //School all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/schools?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setSchools(res.data?.schools);
      })
      .catch((error) => {
        console.error(error);
        setSchools(null);
      });
  }, []);

  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>School Table List</h2>
            <div className='admin'>
              <Link to='#' className='links'>
                user
              </Link>
              <RxSlash />
              <Link to='' className='actives'>
                schools
              </Link>
            </div>
          </div>
          <div className='row School_table'>
            <div className='col-md-12'>
              <div className='table-wrap'>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>School Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Facebook Page</th>
                      <th>Status</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schools?.map((school, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <span>{school?.title}</span>
                          </td>
                          <td>
                            <span>{school?.email}</span>
                          </td>
                          <td>
                            <span>{school?.phone}</span>
                          </td>
                          <td>
                            <span>{school?.address}</span>
                          </td>
                          <td>
                            <span>{school?.facebook_page}</span>
                          </td>
                          <td>
                            <span>{school?.status}</span>
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
                                    to={`/admin/schools/${school?.id}`}
                                  >
                                    Show School
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    to={`/admin/schools/${school?.id}/edit`}
                                  >
                                    Edit School
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
        </div>
      </section>
    </div>
  );
};

export default SchoolTable;
