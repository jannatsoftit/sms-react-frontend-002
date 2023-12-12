import NonTeachingStaffTable from '../../../../table/Student/NonTeachingStaffTable/NonTeachingStaffTable';
import StudentTopBar from "../../../../StudentTopBar";

const NonTeachingStaffList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* NonTeaching Staff table section */}
      <NonTeachingStaffTable />
    </div>
  );
};

export default NonTeachingStaffList;
