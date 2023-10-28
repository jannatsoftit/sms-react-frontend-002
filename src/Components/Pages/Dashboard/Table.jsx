import { useEffect, useState } from 'react';

const Table = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {

    fetch(`http://127.0.0.1:8001/api/students?`, {
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

  }, [])


  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default Table;
