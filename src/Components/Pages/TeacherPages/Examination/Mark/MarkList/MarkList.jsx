import MarkTable from '../../../../../table/Teacher/MarkTable/MarkTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const MarkList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* Mark table section */}
      <MarkTable />
    </div>
  );
};

export default MarkList;
