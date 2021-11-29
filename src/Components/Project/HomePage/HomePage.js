import React, {useState} from "react";
import "./Home.scss";
import profile from "../Images/dolly2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const HomePage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <div className="HomePage">
        <div></div>
        <div className="HomePage--search">
          <AccessTimeIcon />
          <div className="HomePage--search--searchBox">
            <input type="text" placeholder="Search all across Slack" />
            <SearchOutlinedIcon className="HomePage--search--searchBox--find" />
          </div>
          <HelpOutlineOutlinedIcon />
        </div>
        <div className="HomePage--profile">
        <Toolbar>
        <IconButton onClick={handleOpenUserMenu} >
          <img alt="Remy Sharp" src={profile} />
        </IconButton>

        <Menu
          
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem onClick={handleCloseUserMenu}>{setting}</MenuItem>
          ))}
        </Menu>
      </Toolbar>

          {/* <img src={profile} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
