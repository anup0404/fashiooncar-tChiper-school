import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './RatingIcon.css'
function RatingIcon() {
  return (
    <div className='Icon_container'>
      <StarOutlineIcon/>
      <p><span>4.8</span></p>
    </div>
  )
}

export default RatingIcon
