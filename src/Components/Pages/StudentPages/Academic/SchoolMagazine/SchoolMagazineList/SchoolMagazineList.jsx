import SchoolMagazineTable from '../../../../../table/Student/SchoolMagazineTable/SchoolMagazineTable';
import StudentTopBar from "../../../../../StudentTopBar";

const SchoolMagazineList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* SchoolMagazine table section */}
      <SchoolMagazineTable />
    </div>
  );
};

export default SchoolMagazineList;
