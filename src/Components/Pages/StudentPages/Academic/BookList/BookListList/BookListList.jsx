import BookListTable from '../../../../../table/Admin/BookListTable/BookListTable';
import TopBar from "../../../../../TopBar";

const BookListList = () => {
  return (
    <div>
      <TopBar/>
      {/* BookList table section */}
      <BookListTable />
    </div>
  );
};

export default BookListList;
