import ClassRoutineTable from '../../../../../table/Teacher/ClassRoutineTable/ClassRoutineTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const ClassRoutineList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* ClassRoutine table section */}
      <ClassRoutineTable />
    </div>
  );
};

export default ClassRoutineList;
