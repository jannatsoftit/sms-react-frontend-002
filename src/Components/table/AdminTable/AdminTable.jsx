import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';

const AdminTable = () => {
  const [admins, setAdmins] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admins?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAdmins(res.data?.admins);
      })
      .catch((error) => {
        console.error(error);
        setAdmins(null);
      });
  }, []);

  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Admin Table List</h2>
            <div className='admin'>
              <Link to='#' className='links'>
                User
              </Link>
              <RxSlash />
              <Link to='/user/admin' className='actives'>
                Admin List
              </Link>
            </div>
          </div>
          <div className='row admin_table'>
            <div className='col-md-12'>
              <div className='table-wrap'>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>User Info</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins?.map((admin, index) => {
                      return (
                        <tr className='alert' role='alert' key={index}>
                          <td>
                            <span>image</span>
                          </td>
                          <td>
                            <span>{admin.designation}</span>
                          </td>
                          <td>
                            <span>{admin.email}</span>
                          </td>
                          <td>
                            <div className='email'>
                              <span>{admin.user_information}</span>
                              <span>{admin.user_information}</span>
                            </div>
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
                                  <a className='dropdown-item' href='#'>
                                  Show Admin
                                  </a>
                                </li>
                                <li>
                                  <a className='dropdown-item' href='#'>
                                    Edit Admin
                                  </a>
                                </li>
                                <li>
                                  <a className='dropdown-item' href='#'>
                                    Delete Admin
                                  </a>
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

export default AdminTable;
