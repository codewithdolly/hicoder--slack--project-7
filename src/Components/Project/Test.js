import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import profile from "./Images/dolly2.jpg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Test = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const OpenGroupMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeGroupMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={OpenGroupMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={profile} />
        </IconButton>

        <Menu
          sx={{ mt: "45px" }}
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
          onClose={closeGroupMenu}
        >
          {settings.map((setting) => (
            <MenuItem onClick={closeGroupMenu}>{setting}</MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default Test;
