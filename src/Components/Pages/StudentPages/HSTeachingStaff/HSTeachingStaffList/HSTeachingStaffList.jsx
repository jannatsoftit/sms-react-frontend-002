import HSTeachingStaffTable from '../../../../table/Admin/TeachingStaffTable/HSTeachingStaffTable';
import TopBar from "../../../../TopBar";

const HSTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* HSTeaching Staff table section */}
      <HSTeachingStaffTable />
    </div>
  );
};

export default HSTeachingStaffList;
