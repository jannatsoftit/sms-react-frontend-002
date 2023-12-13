/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const PTeachingStaffTable = () => {
  // PTeachingStaff data
  const [pteachingStaffs, setPTeachingStaffs] = useState(null);

  // PTeachingStaff table reload state
  const [reload, setReload] = useState(0);

  //PTeachingStaffs data delete function
  const handleDelete = (pteachingStaff) => {
    if (
      confirm(
        `Are You sure you want to delete pteaching staff ?`
      )
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/pteachingStaffs/${pteachingStaff.id}`, {
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

  //pteachingStaff all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/pteachingStaffs?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setPTeachingStaffs(res.data?.pteachingStaffs);
      })
      .catch((error) => {
        console.error(error);
        setPTeachingStaffs(null);
      });
  }, [reload]);

  return (
    <>
      <section className='ftco-section' style={{marginTop:'-180px'}}>
        <div className='container'>
          <div className='row admin_table'>
            {/* primary level */}
            <div className='col-md-12'>
              <div className=''>
                <div className='teaching_staff_title'>
                  <h4
                    style={{
                      marginTop: '70px',
                      width: '400px',
                      backgroundColor: '#053270',
                      borderRadius: '5px',
                      border: '3px solid black',
                      color: '#F7FBFF',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>Primary Level</b>
                  </h4>
                </div>
                <div className='teaching_table_button'>
                  {/* Admin table title section */}
                  <Link to='/admin/pteachingStaffs/create'>
                    <button type='button' className='btn'>
                      <HiPlus /> Teaching Stuff
                    </button>
                  </Link>
                </div>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pteachingStaffs?.map((pteachingStaff, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <img
                              //className='rounded-circle'
                              style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '5px',
                              }}
                              src={`http://127.0.0.1:8000/storage/TS_img/${pteachingStaff.image}`}
                              width='50px'
                              alt={pteachingStaff?.name}
                            />
                          </td>
                          <td>
                            <span>{pteachingStaff?.name}</span>
                          </td>
                          <td>
                            <span>{pteachingStaff?.designation}</span>
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
                                    to={`/admin/pteachingStaffs/${pteachingStaff?.id}/edit`}
                                  >
                                    Edit TeachingStaff
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    onClick={() => handleDelete(pteachingStaff)}
                                  >
                                    Delete TeachingStaff
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
    </>
  );
};

export default PTeachingStaffTable;
