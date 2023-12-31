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
      <div className='container dash_table'>
        <div className='row align-items-center'>
          <div className='col'>
            <h2 className='fs-5 fw-bold mb-2' style={{ marginLeft:'10px'}}>Admin List</h2>
          </div>
          <div className='col text-end' style={{ marginRight:'160px'}}>
            <a
              href='/admins'
              className='btn btn-sm mb-2'
              style={{ backgroundColor: '#02727D', color:'white'}}
            >
              See all
            </a>
          </div>
        </div>

        <div className='table-responsive dash_admin_table'>
          <table
            className='dash_table'
            style={{ backgroundColor: '#fff' }}
          >
            <thead className='dash_table_head'>
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
