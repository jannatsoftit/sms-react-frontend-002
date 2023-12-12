import HSTeachingStaffTable from '../../../../table/Student/TeachingStaffTable/HSTeachingStaffTable';
import StudentTopBar from "../../../../StudentTopBar";

const HSTeachingStaffList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* HSTeaching Staff table section */}
      <HSTeachingStaffTable />
    </div>
  );
};

export default HSTeachingStaffList;
