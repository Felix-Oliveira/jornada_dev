import React, { useRef, useState } from 'react';
import './video.css'
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sidebar/VideoSidebar';

function Video({ likes, messages, shares, name, description, music, url }) {
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
        src={url}

      >

      </video>
      {/* side bar */}
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
      {/* footer */}
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />

    </div>
  )
}

export default Video;