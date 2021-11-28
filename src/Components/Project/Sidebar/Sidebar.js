import React from "react";
import "./Sidebar.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CastConnectedRoundedIcon from "@mui/icons-material/CastConnectedRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Marketing from "./Marketing/Marketing";
import Announcement from "./Announcement/Announcement";
import DirectMessage from "./DirectMessage/DirectMessage";
import Test1 from "./Test1";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <h2 className="sidebar--header">
        TheMarketing <ArrowDropDownOutlinedIcon />
        <div className="sidebar--header--user" style={{display:"flex", textAlign:"center"}}><div className="sidebar--header--user--status"></div><div className="sidebar--header--user--userName">Dolly Singh</div></div>
        <div className="sidebar--header--edit">
          <EditOutlinedIcon />
        </div>
      </h2>

      {/* Slider Body */}
      <div>
        <div className="sidebar--name">
          <CommentRoundedIcon className="sidebar--name--icon" />
          <div>Threads</div>
        </div>

        <div className="sidebar--name">
          <ForumRoundedIcon className="sidebar--name--icon" />
          <div>All DMS</div>
        </div>
        <div className="sidebar--name">
          <AlternateEmailIcon className="sidebar--name--icon" />
          <div>Mentions & Reactions</div>
        </div>
        <div className="sidebar--name">
          <CastConnectedRoundedIcon className="sidebar--name--icon" />
          <div>Slack Connect</div>
        </div>

        <div className="sidebar--name">
          <MoreVertRoundedIcon className="sidebar--name--icon" />
          <div>More</div>
        </div>
      </div>

     <Marketing />
     <Announcement />
     <DirectMessage />
     <Test1 />

     <div className="sidebar--Announcement">
    Announcement
    </div>
    </div>


    </>
  );
};

export default Sidebar;
