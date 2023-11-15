import {AiOutlineArrowRight} from 'react-icons/ai';
import AdminForm from "../../../forms/AdminForm/Adminform";
import {Link} from 'react-router-dom';
//import { useState } from 'react';
//import { FaSlack } from 'react-icons/fa';

const AdminCreate = () => {



  return (
    <div>

      {/* Admin create table title section */}
      <Link to="/admins" className="add_button">
      <button type="button" className="btn">
        Admin Table  <AiOutlineArrowRight /> 
      </button>
      </Link>

      {/* Admin form section */}
      <AdminForm />

    </div>
  )
}

export default AdminCreate;
