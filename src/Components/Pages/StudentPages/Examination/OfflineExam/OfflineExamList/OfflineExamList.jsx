import OfflineExamTable from '../../../../../table/Student/OfflineExamTable/OfflineExamTable';
import StudentTopBar from "../../../../../StudentTopBar";

const OfflineExamList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* OfflineExam table section */}
      <OfflineExamTable />
    </div>
  );
};

export default OfflineExamList;
