import BookListTable from '../../../../../table/Teacher/BookListTable/BookListTable';
import TeacherTopBar from "../../../../../TeacherTopBar";

const BookListList = () => {
  return (
    <div>
      <TeacherTopBar/>
      {/* BookList table section */}
      <BookListTable />
    </div>
  );
};

export default BookListList;
