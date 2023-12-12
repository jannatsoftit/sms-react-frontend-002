import HTeachingStaffTable from '../../../../table/Student/TeachingStaffTable/HTeachingStaffTable';
import StudentTopBar from "../../../../StudentTopBar";

const HTeachingStaffList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* HTeaching Staff table section */}
      <HTeachingStaffTable />
    </div>
  );
};

export default HTeachingStaffList;
