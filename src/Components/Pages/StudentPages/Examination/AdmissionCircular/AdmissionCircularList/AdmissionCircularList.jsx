import AdmissionCircularTable from '../../../../../table/Admin/AdmissionCircularTable/AdmissionCircularTable';
import TopBar from "../../../../../TopBar";

const AdmissionCircularList = () => {
  return (
    <div>
      <TopBar/>
      {/* admissionCircular table section */}
      <AdmissionCircularTable />
    </div>
  );
};

export default AdmissionCircularList;
