import TeacherTable from '../../../../table/Student/TeacherTable/TeacherTable';
import StudentTopBar from "../../../../StudentTopBar";

const TeacherList = () => {
  return (
    <div>
      <StudentTopBar />
      {/* Teacher table section */}
      <TeacherTable />
    </div>
  );
};

export default TeacherList;
