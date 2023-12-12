import GradeTable from '../../../../../table/Student/GradeTable/GradeTable';
import StudentTopBar from "../../../../../StudentTopBar";

const GradeList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* Grade table section */}
      <GradeTable />
    </div>
  );
};

export default GradeList;
