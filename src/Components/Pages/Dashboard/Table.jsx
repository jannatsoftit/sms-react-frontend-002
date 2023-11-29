import { useEffect, useState } from 'react';

const Table = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/students?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setStudents(res.data?.students);
      })
      .catch((error) => {
        console.error(error);
        setStudents(null);
      });
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row align-items-center' >
          <div className='col'>
            <h2 className='fs-5 fw-bold mb-2'>Admin List</h2>
          </div>
          <div className='col text-end' style={{marginRight: '40px',}}>
            <a href='/admins' className='btn btn-sm mb-2' style={{backgroundColor: "#ADD8E6"}}>
              See all
            </a>
          </div>
        </div>

        <div className='table-responsive'>
          <table className='table-bordered dash_table' style={{backgroundColor: '#fff'}}>
            <thead>
              <tr>
                <th className='dash_table'>First Name</th>
                <th className='dash_table'>Email</th>
                <th className='dash_table'>Gender</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((student, key) => {
                return (
                  <tr key={key}>
                    {/* <td>{student.id}</td> */}
                    <td className='dash_table'>{student.first_name}</td>
                    <td className='dash_table'>{student.email}</td>
                    <td className='dash_table'>{student.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
