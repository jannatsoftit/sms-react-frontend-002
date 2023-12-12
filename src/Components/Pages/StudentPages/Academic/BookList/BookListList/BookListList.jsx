import BookListTable from '../../../../../table/Student/BookListTable/BookListTable';
import StudentTopBar from "../../../../../StudentTopBar";

const BookListList = () => {
  return (
    <div>
      <StudentTopBar/>
      {/* BookList table section */}
      <BookListTable />
    </div>
  );
};

export default BookListList;
