import StudentFeeTable from '../../../../../Components/table/Student/StudentFeeTable/StudentFeeTable';
import StudentTopBar from "../../../../StudentTopBar";

const StudentFeeList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* StudentFee table section */}
      <StudentFeeTable />
    </div>
  );
};

export default StudentFeeList;
