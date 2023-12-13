import PTeachingStaffTable from '../../../../table/Teacher/TeachingStaffTable/PTeachingStaffTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const PTeachingStaffList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* PTeaching Staff table section */}
      <PTeachingStaffTable />
    </div>
  );
};

export default PTeachingStaffList;
