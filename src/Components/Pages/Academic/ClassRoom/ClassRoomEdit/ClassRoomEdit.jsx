import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from "../../../../Footer";
import Sidebar from "../../../../Sidebar";
import TopBar from "../../../../TopBar";

const ClassRoomEdit = () => {
  const navigate = useNavigate();

  const { classRoomId } = useParams();

  const [classRoom, setClassRoom] = useState({
    class_room_name: '',
    room_number: '',
    building_name: '',
    area: '',
    total_room: '',
  });

  // able to change input data for edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassRoom({
      ...classRoom,
      [name]: value,
    });
  };

  // classRoom data update function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Are you sure you want to update your information?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Create Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      navigate('/admin/classRooms', { replace: true });

      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('class_room_name', classRoom.class_room_name);
      formData.append('room_number', classRoom.room_number);
      formData.append('building_name', classRoom.building_name);
      formData.append('area', classRoom.area);
      formData.append('total_room', classRoom.total_room);

      console.log(formData);

      fetch(`http://127.0.0.1:8000/api/classRooms/${classRoomId}`, {
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

  // classRoom data fetch for edit
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classRooms/${classRoomId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setClassRoom(res.data?.classRoom);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [classRoomId]);

  return (
    <>
      <TopBar />
      <Sidebar>
        {/* ClassRoom create table title section */}
        <Link to='/admin/classRooms' className='add_button'>
          <button type='button' className='btn'>
            Class Room Table <AiOutlineArrowRight />
          </button>
        </Link>

        <div className='admin_form'>
          <div className='container-fluid px-1 py-5 mx-auto'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
                <div className='card'>
                  {/* ClassRoom create form title section */}
                  <div className='col-md-6 text-center mb-5'>
                    <h2 className='heading-section'>
                      Class Room Form Edit Table
                    </h2>
                    <div className='admin-create'>
                      <Link to='#' className='links'>
                        user
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        classRooms
                      </Link>
                      <RxSlash />
                      <Link to='' className='actives'>
                        edit
                      </Link>
                    </div>
                  </div>

                  {/* ClassRoom create form table*/}
                  <form className='form-card' onSubmit={handleSubmit}>
                    <div className='row justify-content-between text-left'>
                      <div className='form-group col-sm-6 flex-column d-flex'>
                        {' '}
                        <label className='form-label px-3'>
                          Class Room Name<span className='text-danger'> *</span>
                        </label>{' '}
                        <input
                          type='text'
                          name='class_room_name'
                          placeholder='Enter class room name'
                          id='class_room_name'
                          onChange={handleChange}
                          value={classRoom?.class_room_name}
                        />{' '}
                      </div>

                      <div className='form-group col-sm-6 flex-column d-flex'>
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
                      </div>
                    </div>

                    <div className='row justify-content-between text-left'>
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
                    </div>

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
      </Sidebar>
    </>
  );
};

export default ClassRoomEdit;
