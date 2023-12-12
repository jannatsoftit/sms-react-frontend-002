import SchoolTable from '../../../../table/Admin/SchoolTable/SchoolTable';
import TopBar from "../../../../TopBar";

const SchoolList = () => {
  return (
    <div>
      <TopBar/>
      {/* Parent table section */}
      <SchoolTable />
    </div>
  );
};

export default SchoolList;
