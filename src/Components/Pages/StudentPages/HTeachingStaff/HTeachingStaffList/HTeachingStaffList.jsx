import HTeachingStaffTable from '../../../../table/Admin/TeachingStaffTable/HTeachingStaffTable';
import TopBar from "../../../../TopBar";

const HTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* HTeaching Staff table section */}
      <HTeachingStaffTable />
    </div>
  );
};

export default HTeachingStaffList;
