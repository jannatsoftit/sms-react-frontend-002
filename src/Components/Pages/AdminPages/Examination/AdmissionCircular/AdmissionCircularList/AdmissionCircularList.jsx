import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import AdmissionCircularTable from '../../../../../table/Admin/AdmissionCircularTable/AdmissionCircularTable';
import TopBar from "../../../../../TopBar";

const AdmissionCircularList = () => {
  return (
    <div>
      <TopBar/>
      {/* admissionCircular table title section */}
      <Link to='create' className='addmission_add_button'>
        <button type='button' className='btn'>
          <HiPlus /> AdmissionCircular
        </button>
      </Link>

      {/* admissionCircular table section */}
      <AdmissionCircularTable />
    </div>
  );
};

export default AdmissionCircularList;
