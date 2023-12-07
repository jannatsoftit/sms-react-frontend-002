import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import AccountantTable from '../../../../table/Admin/AccountantTable/AccountantTable';
import TopBar from "../../../../TopBar";

const AccountantList = () => {
  return (
    <div>
      <TopBar/>
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
