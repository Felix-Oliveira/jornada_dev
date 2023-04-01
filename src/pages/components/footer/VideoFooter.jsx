import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({ name, description, music }) {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className='videoFooter_icon' />
          <div className="videoFooter_title">
            <p >{music}</p>
          </div>
        </div>
      </div>
      <img src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" alt="record" className='videoFooter_record' />


    </div>
  )
}

export default VideoFooter