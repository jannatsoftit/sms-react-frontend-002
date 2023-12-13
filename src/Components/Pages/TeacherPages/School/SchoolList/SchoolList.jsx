import SchoolTable from '../../../../table/Teacher/SchoolTable/SchoolTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const SchoolList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* teacher table section */}
      <SchoolTable />
    </div>
  );
};

export default SchoolList;
