import SyllabusTable from '../../../../../table/Teacher/SyllabusTable/SyllabusTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const SyllabusList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* Syllabus table section */}
      <SyllabusTable />
    </div>
  );
};

export default SyllabusList;
