import TeacherTable from '../../../../table/Teacher/TeacherTable/TeacherTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const TeacherList = () => {
  return (
    <div>
      <TeacherTopBar />
      {/* Teacher table section */}
      <TeacherTable />
    </div>
  );
};

export default TeacherList;
