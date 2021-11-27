import React from "react";
import "./Sidebar.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CastConnectedRoundedIcon from "@mui/icons-material/CastConnectedRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import OnlinePredictionRoundedIcon from "@mui/icons-material/OnlinePredictionRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Slider Header */}
      <h2 className="sidebar--header">
        TheMarketing <ArrowDropDownOutlinedIcon />
        <span className="sidebar--header--edit">
          <EditOutlinedIcon />
        </span>
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

      {/* Marketing */}
      <div className="sidebar--name">
        <ArrowRightIcon className="sidebar--name--icon2" />
        <div>Marketing</div>
      </div>

      {/* Announcement */}
      <div className="sidebar--name">
        <ArrowRightIcon className="sidebar--name--icon2" />
        <div>Announcement</div>
      </div>

      {/* Announcement */}
      <div className="sidebar--name">
        <ArrowRightIcon className="sidebar--name--icon2" />
        <div>Direct Message</div>
      </div>
    </div>
  );
};

export default Sidebar;
