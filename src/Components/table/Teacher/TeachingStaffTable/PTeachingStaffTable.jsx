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
                
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Designation</th>
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
