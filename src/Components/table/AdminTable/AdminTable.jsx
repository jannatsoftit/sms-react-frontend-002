/* eslint-disable react/jsx-no-undef */
import { Link  } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AdminTable = () => {

  const [admins, setAdmins] = useState(null);

  const [reload, setReload]= useState(0);

  const handleDelete = admin => {

    if(confirm(`Are You sure you want to delete admin ${admin.id}?`)){
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/admins/${admin.id}`,{
        headers:{
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setReload(value => ++value);
      })
      .catch((error) => {
        console.error(error);
      })

    }
  }
  

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admins?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setAdmins(res.data?.admins);
      })
      .catch((error) => {
        console.error(error);
        setAdmins(null);
      });

  }, [reload]);

  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Admin Table List</h2>
            <div className='admin'>
              <Link to='#' className='links'>
                user
              </Link>
              <RxSlash />
              <Link to='' className='actives'>
                admins
              </Link>
            </div>
          </div>
          <div className='row admin_table'>
            <div className='col-md-12'>
              <div className='table-wrap'>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Image</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>User Info</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins?.map((admin) => {
                      return (
                        <tr className='alert' role='alert' key={admin?.id}>
                          <td>
                            <span>{admin?.id}</span>
                          </td>
                          <td>
                            <img src={`http://127.0.0.1:8000/AD_img/${admin.image}`}  width="50px" alt={admin?.name} />
                            {/* <span>{admin?.image}</span> */}
                          </td>
                          <td>
                            <span>{admin?.designation}</span>
                          </td>
                          <td>
                            <span>{admin?.email}</span>
                          </td>
                          <td>
                            <div className='email'>
                              <span>{admin?.user_information}</span>
                              <span>{admin?.user_information}</span>
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
                                  <Link className='dropdown-item' 
                                  to= {`/admins/${admin?.id}`}
                                  >
                                  Show Admin
                                  </Link>
                                </li>
                                <li>
                                  <Link className='dropdown-item' to={`/admins/${admin?.id}/edit`}>
                                    Edit Admin
                                  </Link>
                                </li>
                                <li>
                                  <Link className='dropdown-item' onClick={() => handleDelete(admin)}>
                                    Delete Admin
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

export default AdminTable;
