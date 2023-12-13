import NonTeachingStaffTable from '../../../../table/Teacher/NonTeachingStaffTable/NonTeachingStaffTable';
import TeacherTopBar from "../../../../TeacherTopBar";

const NonTeachingStaffList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* NonTeaching Staff table section */}
      <NonTeachingStaffTable />
    </div>
  );
};

export default NonTeachingStaffList;
