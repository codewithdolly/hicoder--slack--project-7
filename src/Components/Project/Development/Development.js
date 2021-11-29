import React from 'react'
import "./Development.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Dolly from "../Images/dolly2.jpg"


const Development = () => {
    return (
        <>
            <div className="development">
               <div className="development--header">
               <Button  color="inherit"># Development <KeyboardArrowDownIcon /></Button>
               <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={Dolly} />
      <Avatar alt="Remy Sharp" src={Dolly} />
      <Avatar alt="Remy Sharp" src={Dolly} />
      <Avatar alt="Remy Sharp" src={Dolly} />
      <Avatar alt="Remy Sharp" src={Dolly} />
      <Avatar alt="Remy Sharp" src={Dolly} />
     
    </AvatarGroup>
              
               </div>
            </div>
        </>
    )
}

export default Development
