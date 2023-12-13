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
   
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Designation</th>
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
