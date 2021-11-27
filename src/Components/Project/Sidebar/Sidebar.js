import React from "react";
import "./Sidebar.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import CastConnectedRoundedIcon from "@mui/icons-material/CastConnectedRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import OnlinePredictionRoundedIcon from '@mui/icons-material/OnlinePredictionRounded';
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Slider Header */}
      <h2 className="sidebar--header">
        TheMarketing <ArrowDropDownOutlinedIcon />
        <span className="sidebar--header--edit">
          {" "}
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
          <AssignmentIndRoundedIcon className="sidebar--name--icon" />
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
        <OnlinePredictionRoundedIcon className="sidebar--name--icon2" />
        <h4>Marketing</h4>
      </div>

      {/* Announcement */}
      <div className="sidebar--name">
        <CampaignRoundedIcon className="sidebar--name--icon2" />
        <h4>Announcement</h4>
      </div>

      {/* Announcement */}
      <div className="sidebar--name">
        <ConnectWithoutContactIcon className="sidebar--name--icon2" />
        <h4>Direct Message</h4>
      </div>
    </div>
  );
};

export default Sidebar;
