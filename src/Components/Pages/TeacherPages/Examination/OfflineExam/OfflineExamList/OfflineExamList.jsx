import OfflineExamTable from '../../../../../table/Teacher/OfflineExamTable/OfflineExamTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const OfflineExamList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* OfflineExam table section */}
      <OfflineExamTable />
    </div>
  );
};

export default OfflineExamList;
