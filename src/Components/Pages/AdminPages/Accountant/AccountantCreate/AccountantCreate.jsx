import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AccountantForm from '../../../../forms/Admin/AccountantForm/AccountantForm';
import TopBar from "../../../../TopBar";

const AccountantCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Accountant create table title section */}
      <Link to='/admin/accountants' className='add_button'>
        <button type='button' className='btn'>
        Accountant Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Accountant form section */}
      <AccountantForm />
    </div>
  );
};

export default AccountantCreate;
