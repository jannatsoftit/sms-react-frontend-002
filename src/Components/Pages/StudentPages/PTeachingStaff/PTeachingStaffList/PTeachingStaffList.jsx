import PTeachingStaffTable from '../../../../table/Admin/TeachingStaffTable/PTeachingStaffTable';
import TopBar from "../../../../TopBar";

const PTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* PTeaching Staff table section */}
      <PTeachingStaffTable />
    </div>
  );
};

export default PTeachingStaffList;
