import { useParams } from "react-router-dom";
import AdminDetail from "../../../details/AdminDetail/AdminDetail";
import { useEffect, useState } from "react";

const AdminShow = () => {

 const {adminId} = useParams();

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admins/${adminId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdmin(response.data?.admin);
      })
      .catch((error) => {
        console.error(error);
        setAdmin(null);
      });
  }, [adminId]);

  return (
    <div>
      <AdminDetail admin={admin} />
    </div>
  );
}

export default AdminShow;
