import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null); // Reference to the <video> element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      <video style={{"max-width":"100%"}} ref={videoRef} controls>
        <source src="stock_demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
