import StudentTable from '../../../../table/Admin/StudentTable/StudentTable';
import TopBar from "../../../../TopBar";

const StudentList = () => {
  return (
    <div>
      <TopBar />
      {/* Student table section */}
      <StudentTable />
    </div>
  );
};

export default StudentList;
