/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const HSTeachingStaffTable = () => {

  // HSTeachingStaff data
  const [hsteachingStaffs, setHSTeachingStaffs] = useState(null);

  // HSTeachingStaff table reload state
  const [reload, setReload] = useState(0);


  //HSTeachingStaffs data delete function
  const handleDelete = (hsteachingStaff) => {
    if (
      confirm(
        `Are You sure you want to delete hsteaching staff ${hsteachingStaff.id}?`
      )
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/hsteachingStaffs/${hsteachingStaff.id}`, {
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

  //hsteachingStaff all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/hsteachingStaffs?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setHSTeachingStaffs(res.data?.hsteachingStaffs);
      })
      .catch((error) => {
        console.error(error);
        setHSTeachingStaffs(null);
      });
  }, [reload]);

  return (
    <>
      <section className='ftco-section' style={{marginTop:'-180px'}}>
        <div className='container'>
          <div className='row admin_table'>
            {/* higher secondary level */}
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
                    <b>Higher Secondary Level</b>
                  </h4>
                </div>
                <div className='teaching_table_button'>
                  {/* Admin table title section */}
                  <Link to='/admin/hsteachingStaffs/create'>
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
                    {hsteachingStaffs?.map((hsteachingStaff, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <img
                              style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '5px',
                              }}
                              src={`http://127.0.0.1:8000/storage/TS_img/${hsteachingStaff.image}`}
                              width='50px'
                              alt={hsteachingStaff?.name}
                            />
                          </td>
                          <td>
                            <span>{hsteachingStaff?.name}</span>
                          </td>
                          <td>
                            <span>{hsteachingStaff?.designation}</span>
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
                                    to={`/admin/hsteachingStaffs/${hsteachingStaff?.id}/edit`}
                                  >
                                    Edit TeachingStaff
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    onClick={() => handleDelete(hsteachingStaff)}
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

export default HSTeachingStaffTable;
