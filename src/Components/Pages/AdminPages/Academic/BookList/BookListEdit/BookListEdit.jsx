import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from "../../../../../Footer";
import AdminSidebar from '../../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../../TopBar";

const BookListEdit = () => {
  const navigate = useNavigate();

  const { bookListId } = useParams();

  const [bookList, setBookList] = useState({
    book_name: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookList({
      ...bookList,
      [name]: value,
    });
  };

  // bookList data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/bookLists', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('book_name', bookList.book_name);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/bookLists/${bookListId}`, {
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => {
          console.info(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // bookList data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/bookLists/${bookListId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setBookList(res.data?.bookList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookListId]);

  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* BookList create table title section */}
        <Link to='/admin/bookLists' className='add_button'>
          <button type='button' className='btn'>
            Book List Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* BookList create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Book List Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        book-Lists
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* BookList create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                           Book List Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='book_name'
                          placeholder='Enter book list name'
                          id='book_name'
                          onChange={handleChange}
                          value={bookList?.book_name}
                        />{' '}
                      </div>

                      {/* <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Room Number<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='room_number'
                          placeholder='Enter room number'
                          id='room_number'
                          onChange={handleChange}
                          value={classRoom?.room_number}
                        />{' '}
                      </div> */}
                    </div>

                    {/* <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Building Name
                          <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='building_name'
                          placeholder='Enter building name'
                          id='building_name'
                          onChange={handleChange}
                          value={classRoom?.building_name}
                        />{' '}
                      </div>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Area<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='area'
                          placeholder='Enter area'
                          id='area'
                          onChange={handleChange}
                          value={classRoom?.area}
                        />{' '}
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Total Room <span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='total_room'
                          placeholder='Enter total room'
                          id='total_room'
                          onChange={handleChange}
                          value={classRoom?.total_room}
                        />{' '}
                      </div>
                    </div> */}

                    <div className='row justify-content-start'>
                      <div className='form-group col-sm-4'>
                        <button type='submit' className='btn-block btn-primary'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default BookListEdit;
