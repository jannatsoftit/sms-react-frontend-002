import SchoolTable from '../../../../table/Student/SchoolTable/SchoolTable';
import StudentTopBar from "../../../../StudentTopBar";

const SchoolList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* Parent table section */}
      <SchoolTable />
    </div>
  );
};

export default SchoolList;
