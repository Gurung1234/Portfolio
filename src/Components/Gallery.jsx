import React, { useState } from 'react';

// Import images
import i1 from '../assets/Gallery/1.JPG';
import i2 from '../assets/Gallery/2.JPEG';
import i3 from '../assets/Gallery/3.jpg';
import i4 from '../assets/Gallery/4.jpg';
import i5 from '../assets/Gallery/5.jpeg';
import i6 from '../assets/Gallery/6.jpg';
import i9 from '../assets/Gallery/9.jpeg';
import i10 from '../assets/Gallery/10.jpg';
import i11 from '../assets/Gallery/11.jpg';
import i12 from '../assets/Gallery/12.jpeg';
import i13 from '../assets/Gallery/13.jpg';
// import i14 from '../assets/Gallery/14.jpg';
import i15 from '../assets/Gallery/15.JPG';
import i16 from '../assets/Gallery/16.jpg';
import i17 from '../assets/Gallery/17.jpg';
import i18 from '../assets/Gallery/18.jpg';
import i19 from '../assets/Gallery/19.jpg';
import i20 from '../assets/Gallery/20.jpg';
import i21 from '../assets/Gallery/21.jpg';
import i22 from '../assets/Gallery/22.jpg';
import i23 from '../assets/Gallery/23.jpg';
import i24 from '../assets/Gallery/24.jpg';
import i25 from '../assets/Gallery/25.jpg';
import i26 from '../assets/Gallery/26.jpg';
import i27 from '../assets/Gallery/27.jpg';
import i28 from '../assets/Gallery/28.jpg';
import i29 from '../assets/Gallery/29.jpg';
import i30 from '../assets/Gallery/30.jpg';
import i31 from '../assets/Gallery/31.jpg';
import i32 from '../assets/Gallery/32.jpg';
import i33 from '../assets/Gallery/33.jpg';
import i34 from '../assets/Gallery/34.jpeg';
// import i35 from '../assets/Gallery/35.jpg';
import i36 from '../assets/Gallery/36.jpg';
import i37 from '../assets/Gallery/37.jpg';
import i38 from '../assets/Gallery/38.jpg';
import i39 from '../assets/Gallery/39.jpg';
import i40 from '../assets/Gallery/40.jpg';
import i41 from '../assets/Gallery/41.jpg';
import i42 from '../assets/Gallery/42.jpg';
import i43 from '../assets/Gallery/43.jpg';
import i44 from '../assets/Gallery/44.jpg';
import i45 from '../assets/Gallery/45.jpg';
import i46 from '../assets/Gallery/46.jpg';
import i47 from '../assets/Gallery/47.jpg';
import i48 from '../assets/Gallery/48.jpg';
import i49 from '../assets/Gallery/49.jpg';
import i50 from '../assets/Gallery/50.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(3);

  // Array of images
  const images = [
    { id: 1, src: i1 },
    { id: 2, src: i2 },
    { id: 3, src: i3 },
    { id: 4, src: i4 },
    { id: 5, src: i5 },
    { id: 6, src: i6 },
    { id: 7, src: i7 },
    { id: 8, src: i8 },
    { id: 9, src: i9 },
    { id: 10, src: i10 },
    { id: 11, src: i11 },
    { id: 12, src: i12 },
    { id: 13, src: i13 },
    // { id: 14, src: i14 },
    { id: 15, src: i15 },
    { id: 16, src: i16 },
    { id: 17, src: i17 },
    { id: 18, src: i18 },
    { id: 19, src: i19 },
    { id: 20, src: i20 },
    { id: 21, src: i21 },
    { id: 22, src: i22 },
    { id: 23, src: i23 },
    { id: 24, src: i24 },
    { id: 25, src: i25 },
    { id: 26, src: i26 },
    { id: 27, src: i27 },
    { id: 28, src: i28 },
    { id: 29, src: i29 },
    { id: 30, src: i30 },
    { id: 31, src: i31 },
    { id: 32, src: i32 },
    { id: 33, src: i33 },
    { id: 34, src: i34 },
    // { id: 35, src: i35 },
    { id: 36, src: i36 },
    { id: 37, src: i37 },
    { id: 38, src: i38 },
    { id: 39, src: i39 },
    { id: 40, src: i40 },
    { id: 41, src: i41 },
    { id: 42, src: i42 },
    { id: 43, src: i43 },
    { id: 44, src: i44 },
    { id: 45, src: i45 },
    { id: 46, src: i46 },
    { id: 47, src: i47 },
    { id: 48, src: i48 },
    { id: 49, src: i49 },
    { id: 50, src: i50 },
  ];

  const openImage = (imgUrl) => setSelectedImage(imgUrl);
  const closeImage = () => setSelectedImage(null);
  const loadMoreImages = () => setVisibleImages((prev) => prev + 6);
  const loadLessImages = () => setVisibleImages((prev) => Math.max(prev - 6, 3)); // Ensures minimum of 3 images

  return (
    <div className="bg-black text-light-gray lg:px-32 md:px-20 px-2 pb-3">
      <h1 className="font-bold text-white text-2xl text-center py-10 font-mont">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((image) => (
          <div
            key={image.id}
            className="overflow-hidden h-[200px] w-full shadow-sm shadow-[#00FFFF] "
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <img
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-500 transform hover:scale-125"
              onClick={() => openImage(image.src)}
            />
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <button
          onClick={loadMoreImages}

          className="bg-black text-white px-6 py-2 w-32 rounded-md border-2 border-[#00FFFF] hover:text-black hover:bg-[#00FFFF] duration-150 ease-in-out hover:scale-105 pt-2"
        >
          Load More
        </button>
      )}
{/* 
<div className='flex justify-between items-center mt-4'/>

{visibleImages > 3 && (
          <button
            onClick={loadLessImages}
            className="bg-black text-white px-6 py-2 w-32 rounded-md border-2 border-[#00FFFF] hover:text-black hover:bg-[#00FFFF] duration-150 ease-in-out hover:scale-105"
          >
            Load Less
          </button> */}
        {/* )} */}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Full Size" className="max-w-full max-h-screen" />
            <button
              className="absolute top-2 right-2 bg-[#00FFFF] text-black px-4 py-2 rounded-full "
              onClick={closeImage}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
