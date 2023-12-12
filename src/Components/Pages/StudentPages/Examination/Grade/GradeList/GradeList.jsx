import GradeTable from '../../../../../table/Admin/GradeTable/GradeTable';
import TopBar from "../../../../../TopBar";

const GradeList = () => {
  return (
    <div>
      <TopBar/>
      {/* Grade table section */}
      <GradeTable />
    </div>
  );
};

export default GradeList;
