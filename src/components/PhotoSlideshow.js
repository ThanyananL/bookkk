import React, { useState, useEffect } from 'react';
import './PhotoSlideshow.css';

export default function PhotoSlideshow() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const photos = [
      'https://picsum.photos/id/1/800/600',
      'https://picsum.photos/id/2/800/600',
   ];

   useEffect(() => {
      const interval = setInterval(() => {
         const lastIndex = photos.length - 1;
         const shouldResetIndex = currentIndex === lastIndex;
         const index = shouldResetIndex ? 0 : currentIndex + 1;
         setCurrentIndex(index);
      }, 3000);
      return () => clearInterval(interval);
   }, [currentIndex, photos]);

   return (
      <div className="slideshow">
         <img src={photos[currentIndex]} alt="slideshow" />
      </div>
   );
}
