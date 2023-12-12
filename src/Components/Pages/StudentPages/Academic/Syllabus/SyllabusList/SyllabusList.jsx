import SyllabusTable from '../../../../../table/Student/SyllabusTable/SyllabusTable';
import StudentTopBar from "../../../../../StudentTopBar";

const SyllabusList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* Syllabus table section */}
      <SyllabusTable />
    </div>
  );
};

export default SyllabusList;
