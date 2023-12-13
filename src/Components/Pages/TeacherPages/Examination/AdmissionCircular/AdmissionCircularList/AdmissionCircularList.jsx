import AdmissionCircularTable from '../../../../../table/Teacher/AdmissionCircularTable/AdmissionCircularTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const AdmissionCircularList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* admissionCircular table section */}
      <AdmissionCircularTable />
    </div>
  );
};

export default AdmissionCircularList;
