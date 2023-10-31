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
        <div class='row align-items-center'>
          <div class='col'>
            <h2 class='fs-5 fw-bold mb-2'>Admin List</h2>
          </div>
          <div class='col text-end'>
            <a href='/#' class='btn btn-sm mb-2' style={{backgroundColor: "#ADD8E6"}}>
              See all
            </a>
          </div>
        </div>

        <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.first_name}</td>
                    <td>{student.email}</td>
                    <td>{student.gender}</td>
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
