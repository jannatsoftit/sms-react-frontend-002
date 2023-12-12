import StudentFeeTable from '../../../../../Components/table/Admin/StudentFeeTable/StudentFeeTable';
import TopBar from "../../../../TopBar";

const StudentFeeList = () => {
  return (
    <div>
      <TopBar/>
      {/* StudentFee table section */}
      <StudentFeeTable />
    </div>
  );
};

export default StudentFeeList;
