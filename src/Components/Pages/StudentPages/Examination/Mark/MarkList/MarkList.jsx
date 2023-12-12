import MarkTable from '../../../../../table/Student/MarkTable/MarkTable';
import StudentTopBar from "../../../../../StudentTopBar";

const MarkList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* Mark table section */}
      <MarkTable />
    </div>
  );
};

export default MarkList;
