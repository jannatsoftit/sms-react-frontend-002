import StudentFeeTable from '../../../../../Components/table/Teacher/StudentFeeTable/StudentFeeTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const StudentFeeList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* StudentFee table section */}
      <StudentFeeTable />
    </div>
  );
};

export default StudentFeeList;
