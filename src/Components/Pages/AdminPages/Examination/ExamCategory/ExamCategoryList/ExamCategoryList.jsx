import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ExamCategoryTable from '../../../../../table/Admin/ExamCategoryTable/ExamCategoryTable';
import TopBar from "../../../../../TopBar";

const ExamCategoryList = () => {
  return (
    <div>
      <TopBar/>
      {/* ExamCategory table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> ExamCategory
        </button>
      </Link>

      {/* ExamCategory table section */}
      <ExamCategoryTable />
    </div>
  );
};

export default ExamCategoryList;
