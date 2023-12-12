import TeacherTable from '../../../../table/Admin/TeacherTable/TeacherTable';
import TopBar from "../../../../TopBar";

const TeacherList = () => {
  return (
    <div>
      <TopBar />
      {/* Teacher table section */}
      <TeacherTable />
    </div>
  );
};

export default TeacherList;
