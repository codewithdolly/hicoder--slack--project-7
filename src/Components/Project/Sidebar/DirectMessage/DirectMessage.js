import React from 'react'
import "./DirectMessage.scss"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const DirectMessage = () => {
  return (
    <>
      {/* DirectMessage */}
      <div className="sidebar--name">
        <ArrowRightIcon className="sidebar--name--icon2" />
        <div>Direct Message</div>
      </div>
    </>
  )
}

export default DirectMessage;
