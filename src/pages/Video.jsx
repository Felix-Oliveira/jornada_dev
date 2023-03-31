import React, { useRef, useState } from 'react';
import './video.css'
import VideoFooter from './components/footer/VideoFooter';

function Video() {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)


  function handdleStart() {

    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }

  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"

      >

      </video>
      {/* side bar */}
      {/* footer */}
      <VideoFooter />

    </div>
  )
}

export default Video;