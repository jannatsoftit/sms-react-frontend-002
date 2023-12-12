import NonTeachingStaffTable from '../../../../table/Admin/NonTeachingStaffTable/NonTeachingStaffTable';
import TopBar from "../../../../TopBar";

const NonTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* NonTeaching Staff table section */}
      <NonTeachingStaffTable />
    </div>
  );
};

export default NonTeachingStaffList;
