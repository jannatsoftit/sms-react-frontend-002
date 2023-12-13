/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const HTeachingStaffTable = () => {
  // HTeachingStaff data
  const [teachingStaffs, setTeachingStaffs] = useState(null);

  // HTeachingStaff table reload state
  const [reload, setReload] = useState(0);

  //teachingStaff all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teachingStaffs?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setTeachingStaffs(res.data?.teachingStaffs);
      })
      .catch((error) => {
        console.error(error);
        setTeachingStaffs(null);
      });
  }, [reload]);

  return (
    <>
      <section className='ftco-section' style={{ marginTop: '-80px' }}>
        <div className='container'>
          <div className='row admin_table'>
            {/* higher level */}
            <div className='col-md-12'>
              <div className=''>
                <div className='teaching_staff_title'>
                  <h4
                    style={{
                      width: '250px',
                      backgroundColor: '#053270',
                      borderRadius: '5px',
                      border: '3px solid black',
                      color: '#F7FBFF',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>Higher Level</b>
                  </h4>
                </div>

                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachingStaffs?.map((teachingStaff, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <img
                              style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '5px',
                              }}
                              src={`http://127.0.0.1:8000/storage/TS_img/${teachingStaff.image}`}
                              width='50px'
                              alt={teachingStaff?.name}
                            />
                          </td>
                          <td>
                            <span>{teachingStaff?.name}</span>
                          </td>
                          <td>
                            <span>{teachingStaff?.designation}</span>
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

export default HTeachingStaffTable;
