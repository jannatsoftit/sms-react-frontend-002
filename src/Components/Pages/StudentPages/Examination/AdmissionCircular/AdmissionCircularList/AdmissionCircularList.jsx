import AdmissionCircularTable from '../../../../../table/Student/AdmissionCircularTable/AdmissionCircularTable';
import StudentTopBar from "../../../../../StudentTopBar";

const AdmissionCircularList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* admissionCircular table section */}
      <AdmissionCircularTable />
    </div>
  );
};

export default AdmissionCircularList;
