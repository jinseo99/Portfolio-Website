import React, { useRef, useEffect } from 'react';

const VideoPlayer = (props) => {
  const videoRef = useRef(null); // Reference to the <video> element
  const {filename} = props;
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      <video style={{"max-width":"100%"}} ref={videoRef} controls>
        <source src={process.env.PUBLIC_URL+"/"+filename} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
