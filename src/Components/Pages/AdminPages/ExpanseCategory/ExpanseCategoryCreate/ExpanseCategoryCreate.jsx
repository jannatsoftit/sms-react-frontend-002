import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ExpanseCategoryForm from '../../../../../Components/forms/Admin/ExpanseCategoryForm/ExpanseCategoryForm';
import TopBar from "../../../../TopBar";

const ExpanseCategoryCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* ExpanseCategory create table title section */}
      <Link to='/admin/expanseCategories' className='add_button'>
        <button type='button' className='btn'>
          Expanse Category Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* ExpanseCategory form section */}
      <ExpanseCategoryForm />
    </div>
  );
};

export default ExpanseCategoryCreate;
