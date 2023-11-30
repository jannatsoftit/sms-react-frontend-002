import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ExpanseCategoryTable from '../../../../Components/table/ExpanseCategoryTable/ExpanseCategoryTable';

const ExpanseCategoryList = () => {
  return (
    <div>
      {/* ExpanseCategory table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Expanse Category
        </button>
      </Link>

      {/* ExpanseCategory table section */}
      <ExpanseCategoryTable />
    </div>
  );
};

export default ExpanseCategoryList;