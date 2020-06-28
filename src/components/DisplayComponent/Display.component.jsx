import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
const DisplayComponent = ({ sources, thumb }) => {

  const state = useSelector(state => state);
  const videoRef = useRef(null);

  const updateAllOptions = () => {
    videoRef.current.volume = state.volume;
    videoRef.current.style.filter = `brightness(${state.bright}%) contrast(${state.contrast}%)`;
    if (state.playStatus) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  useEffect(() => {
    updateAllOptions();
  });

  return (
    //Without the key it never refreshes otherwise only the son who is never born gets the update
    <video key={thumb} width="80%" height="80%" poster={thumb} ref={videoRef}>
      <source src={sources[0]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default DisplayComponent;