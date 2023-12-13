import GradeTable from '../../../../../table/Teacher/GradeTable/GradeTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const GradeList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* Grade table section */}
      <GradeTable />
    </div>
  );
};

export default GradeList;
