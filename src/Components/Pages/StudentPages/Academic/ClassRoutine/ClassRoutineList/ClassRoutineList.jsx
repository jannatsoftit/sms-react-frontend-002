import ClassRoutineTable from '../../../../../table/Student/ClassRoutineTable/ClassRoutineTable';
import StudentTopBar from "../../../../../StudentTopBar";

const ClassRoutineList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* ClassRoutine table section */}
      <ClassRoutineTable />
    </div>
  );
};

export default ClassRoutineList;
