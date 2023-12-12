import PTeachingStaffTable from '../../../../table/Student/TeachingStaffTable/PTeachingStaffTable';
import StudentTopBar from "../../../../StudentTopBar";

const PTeachingStaffList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* PTeaching Staff table section */}
      <PTeachingStaffTable />
    </div>
  );
};

export default PTeachingStaffList;
