import HTeachingStaffTable from '../../../../table/Teacher/TeachingStaffTable/HTeachingStaffTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const HTeachingStaffList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* HTeaching Staff table section */}
      <HTeachingStaffTable />
    </div>
  );
};

export default HTeachingStaffList;
