import StudentTable from '../../../../table/Student/StudentTable/StudentTable';
import StudentTopBar from "../../../../StudentTopBar";

const StudentList = () => {
  return (
    <div>
      <StudentTopBar />
      {/* Student table section */}
      <StudentTable />
    </div>
  );
};

export default StudentList;
