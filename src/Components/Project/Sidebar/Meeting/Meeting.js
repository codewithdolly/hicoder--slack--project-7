import React, { useState } from "react";
import "./Meeting.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const meeting = [
  "# Project Management",
  "# Project Requirement",
  "# Design",
  "# Development",
  "# Backend",
  "# Testing",
  "# Deployment",
];

const TeamMeeting = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const OpenGroupMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeGroupMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <div className="Meeting">
        <Toolbar>
          <div className="Meeting--message" onClick={OpenGroupMenu}>
            <ArrowRightIcon className="Meeting--message--icon" />
            <div>Team Meeting</div>
          </div>
          <div className="Meeting--hide">
            <MoreVertIcon />
            <AddIcon />
          </div>
          <Menu
            anchorEl={anchorElUser}
            keepMounted
            open={Boolean(anchorElUser)}
            onClose={closeGroupMenu}
          >
            {meeting.map((setting) => (
              <MenuItem id="item" onClick={closeGroupMenu}>
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </div>
    </>
  );
};

export default TeamMeeting;
