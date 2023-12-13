import SchoolMagazineTable from '../../../../../table/Teacher/SchoolMagazineTable/SchoolMagazineTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const SchoolMagazineList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* SchoolMagazine table section */}
      <SchoolMagazineTable />
    </div>
  );
};

export default SchoolMagazineList;
