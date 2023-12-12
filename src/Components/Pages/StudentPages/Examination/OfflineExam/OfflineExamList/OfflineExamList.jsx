import OfflineExamTable from '../../../../../table/Admin/OfflineExamTable/OfflineExamTable';
import TopBar from "../../../../../TopBar";

const OfflineExamList = () => {
  return (
    <div>
      <TopBar/>
      {/* OfflineExam table section */}
      <OfflineExamTable />
    </div>
  );
};

export default OfflineExamList;
