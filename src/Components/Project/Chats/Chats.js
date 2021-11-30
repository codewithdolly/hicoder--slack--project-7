import { Button } from '@mui/material'
import "./Chats.scss"
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Chats = () => {
    return (
        <>
           <div className="chats">
           {/* <div></div> */}
           <Button className="chats--date" >Tuesday, November 25th</Button>

           </div> 
        </>
    )
}

export default Chats
