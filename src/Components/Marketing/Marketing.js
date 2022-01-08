import React, { useState } from "react";
import "./Marketing.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FaceBook from "./FaceBook";
import YouTube from "./YouTube";
import Instagram from "./Instagram"
import Twitter from "./Twitter";

const socialIcon = [<FaceBook />,<YouTube />, <Instagram />, <Twitter />];

const Marketing = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const OpenGroupMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeGroupMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="market">
        <Toolbar>
          <div className="market--marketing" onClick={OpenGroupMenu}>
            <ArrowRightIcon className="market--marketing--icon" />
            <div>Marketing</div>
          </div>
          <div className="market--hide">
            <MoreVertIcon />
            <AddIcon />
          </div>
          <Menu
            anchorEl={anchorElUser}
            keepMounted   
            open={Boolean(anchorElUser)}
            onClose={closeGroupMenu}
          >
            {socialIcon.map((setting) => (
              <MenuItem id= "item" onClick={closeGroupMenu}>{setting}</MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </div>
    </>
  );
};

export default Marketing;
