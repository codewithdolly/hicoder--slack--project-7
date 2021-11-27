import React from 'react';
import "./Sidebar.scss";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Sidebar = () => {
    return (
        <div className="Sidebar">
        {/* Slider Header */}
            <h2 className="Sidebar--name">TheMarketing <ArrowDropDownOutlinedIcon /><span className="Sidebar--edit"> <EditOutlinedIcon /></span></h2>

            {/* Slider Body */}
            <div>

            </div>
        </div>
    )
}

export default Sidebar
