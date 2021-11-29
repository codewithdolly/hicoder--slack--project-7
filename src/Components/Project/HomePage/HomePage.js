import React, { useState } from "react";
import "./Home.scss";
import profile from "../Images/dolly2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const status = ["😃 Update your Status"];
const settings = [
  "Profile",
  "Pouse Notifications",
  "Sign out of the marketing",
];

const HomePage = () => {
  const [user, setuser] = useState(null);

  const openUserMenu = (event) => {
    setuser(event.currentTarget);
  };

  const closeUserMenu = () => {
    setuser(null);
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
            <IconButton onClick={openUserMenu}>
              <img alt="Remy Sharp" src={profile} />
            </IconButton>

            <Menu
              user={user}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(user)}
              onClose={closeUserMenu}
            >
              {status.map((status) => (
                <MenuItem onClick={closeUserMenu}>
                  <Button variant="outlined" color="secondary">
                    {status}
                  </Button>
                </MenuItem>
              ))}
              {settings.map((setting) => (
                <MenuItem onClick={closeUserMenu}>{setting}</MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </div>
      </div>
    </>
  );
};

export default HomePage;
