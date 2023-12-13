import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AdmissionCircularForm from '../../../../../forms/Admin/AdmissionCircularForm/AdmissionCircularForm';
import TopBar from "../../../../../TopBar";

const AdmissionCircularCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* admissionCircular create table title section */}
      <Link to='/admin/admissionCirculars' className='add_button'>
        <button type='button' className='btn'>
          Admission Circular Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* admissionCircular form section */}
      <AdmissionCircularForm />
    </div>
  );
};

export default AdmissionCircularCreate;
