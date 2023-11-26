import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AccountantForm from '../../../forms/AccountantForm/AccountantForm';

const AccountantCreate = () => {
  return (
    <div>
      {/* Accountant create table title section */}
      <Link to='/accountants' className='add_button'>
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
