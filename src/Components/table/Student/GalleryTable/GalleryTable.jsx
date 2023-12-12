import React from 'react';
import { GalleryData } from './GalleryData';
import { useState } from 'react';
import StudentSidebar from '../../../Sidebar/StudentSidebar';
import Footer from '../../../Footer';
import StudentTopBar from '../../../StudentTopBar';

const GalleryTable = () => {
  const [images, setImage] = useState(GalleryData);

  const allItem = () => {
    const finalData = GalleryData.filter((value) => {
      return value;
    });
    setImage(finalData);
  };

  const onlyLibrary = (titleItem) => {
    const finalData = GalleryData.filter((value) => {
      return value.title == titleItem;
    });

    setImage(finalData);
  };

  const onlyComputerClub = (titleItem) => {
    const finalData = GalleryData.filter((value) => {
      return value.title == titleItem;
    });

    setImage(finalData);
  };

  const onlyCulturalFunction = (titleItem) => {
    const finalData = GalleryData.filter((value) => {
      return value.title == titleItem;
    });

    setImage(finalData);
  };



  return (
    <>
      <StudentTopBar />
      <StudentSidebar>
        {/* Library Facility title section */}
        <div className='parent_notice_title'>
          <h4
            style={{
              width: '340px',
              backgroundColor: '#053270',
              borderRadius: '5px',
              border: '3px solid black',
              color: '#F7FBFF',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <b>School Gallery</b>
          </h4>
        </div>
        <div className='gallery_card'>
          <div className='container my-5'>
            <div className='row gallery_button'>
              <div className='col-2'>
                <button className='btn btn-primary' onClick={allItem}>
                  All
                </button>
              </div>
              <div className='col-3'>
                <button
                  className='btn btn-primary'
                  onClick={() => onlyLibrary('Library')}
                >
                  Library
                </button>
              </div>
              <div className='col-4'>
                <button
                  className='btn btn-primary'
                  onClick={() => onlyComputerClub('ComputerClub')}
                >
                  Computer Club
                </button>
              </div>
              <div className='col-3'>
                <button
                  className='btn btn-primary'
                  onClick={() => onlyCulturalFunction('CulturalFunction')}
                >
                  Cultural Function
                </button>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
              {images.map((value) => {
                return (
                  <div className='col-md-4 mt-3' key={value.i}>
                    <img src={value.image} className='img-fluid' alt='image' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default GalleryTable;
