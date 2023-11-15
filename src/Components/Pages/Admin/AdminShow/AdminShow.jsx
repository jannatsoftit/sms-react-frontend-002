import { useParams } from "react-router-dom";
import AdminDetail from "../../../details/AdminDetail/AdminDetail";
import { useEffect, useState } from "react";

const AdminShow = () => {

  const { id } = useParams();
  console.log(id);

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admins/${id}`, {
      headers:{
        Accept: 'application/json',
      },
      method: 'GET',
    })
    .then((res) => res.json()
    .then((res) => {
      console.info(res);
      setAdmin(res.data?.admin);
    }))
    .catch((error) => {
      console.error(error);
      setAdmin(null);
    })
  }, [id]);

  return (
    <div>
      <AdminDetail admin={admin} />
    </div>
  );
}

export default AdminShow;
