/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { RxSlash } from "react-icons/rx";
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from "../../../Footer";


const NonTeachingStaffTable = () => {

  // NonTeachingStaff data
  const [nonTeachingStaffs, setNonTeachingStaffs] = useState(null);

  // NonTeachingStaff table reload state
  const [reload, setReload] = useState(0);


  //NonTeachingStaffs data delete function
  const handleDelete = (nonTeachingStaff) => {
    if (
      confirm(
        `Are You sure you want to delete non-teaching staff ${nonTeachingStaff.id}?`
      )
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/nonTeachingStaffs/${nonTeachingStaff.id}`, {
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

  //nonteachingStaff all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/nonTeachingStaffs?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setNonTeachingStaffs(res.data?.nonTeachingStaffs);
      })
      .catch((error) => {
        console.error(error);
        setNonTeachingStaffs(null);
      });
  }, [reload]);

  return (
    <>
    <AdminSidebar>
      <section className='ftco-section' >
        <div className='container'>
        <div className="col-md-7 text-center mb-5">
              <h2 className="heading-section">Non-Teacher Stuff Table List</h2>
              <div className="admin">
                <Link to="#" className="links">
                  school-staff
                </Link>
                <RxSlash />
                <Link to="" className="actives">
                 non-teacher-stuffs
                </Link>
              </div>
            </div>
          <div className='row admin_table'>
            {/* higher secondary level */}
            <div className='col-md-12'>
              <div className=''>
                <div className='teaching_staff_title'>
                  <h4
                    style={{
                      marginTop: '0px',
                      width: '400px',
                      backgroundColor: '#053270',
                      borderRadius: '5px',
                      border: '3px solid black',
                      color: '#F7FBFF',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>Non-Teaching Suff</b>
                  </h4>
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
                    {nonTeachingStaffs?.map((nonTeachingStaff, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <img
                              style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '5px',
                              }}
                              src={`http://127.0.0.1:8000/storage/NTS_img/${nonTeachingStaff.image}`}
                              width='50px'
                              alt={nonTeachingStaff?.name}
                            />
                          </td>
                          <td>
                            <span>{nonTeachingStaff?.name}</span>
                          </td>
                          <td>
                            <span>{nonTeachingStaff?.designation}</span>
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
                                    to={`/admin/nonTeachingStaffs/${nonTeachingStaff?.id}/edit`}
                                  >
                                    Edit Non-Teaching Staff
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    onClick={() => handleDelete(nonTeachingStaff)}
                                  >
                                    Delete Non-Teaching Staff
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
      <Footer />
      </AdminSidebar>
    </>
  );
};

export default NonTeachingStaffTable;
