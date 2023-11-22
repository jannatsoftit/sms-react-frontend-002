import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import AccountantTable from '../../../table/AccountantTable/AccountantTable';

const AccountantList = () => {
  return (
    <div>

      {/* Accountant table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Accountant
        </button>
      </Link>

      {/* Accountant table section */}
      <AccountantTable />
      
    </div>
  );
};

export default AccountantList;
