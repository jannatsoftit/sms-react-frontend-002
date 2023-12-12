import SyllabusTable from '../../../../../table/Admin/SyllabusTable/SyllabusTable';
import TopBar from "../../../../../TopBar";

const SyllabusList = () => {
  return (
    <div>
      <TopBar/>
      {/* Syllabus table section */}
      <SyllabusTable />
    </div>
  );
};

export default SyllabusList;
