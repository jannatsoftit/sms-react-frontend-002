import HSTeachingStaffTable from '../../../../table/Teacher/TeachingStaffTable/HSTeachingStaffTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const HSTeachingStaffList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* HSTeaching Staff table section */}
      <HSTeachingStaffTable />
    </div>
  );
};

export default HSTeachingStaffList;
