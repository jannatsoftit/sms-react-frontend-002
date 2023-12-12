import ParentTable from '../../../../table/Student/ParentTable/ParentTable';
import StudentTopBar from "../../../../StudentTopBar";

const ParentList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* Parent table section */}
      <ParentTable />
    </div>
  );
};

export default ParentList;
