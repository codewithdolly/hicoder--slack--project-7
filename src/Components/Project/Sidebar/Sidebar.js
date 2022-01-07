import React from "react";
import "./Sidebar.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CastConnectedRoundedIcon from "@mui/icons-material/CastConnectedRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Marketing from "./Marketing/Marketing";
import Announcement from "./Meeting/Meeting";
import DirectMessage from "./DirectMessage/DirectMessage";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import Development from "../Development"

const label = { inputProps: { "aria-label": "Switch demo" } };

const Sidebar = () => {
  return (
    <>
    <BrowserRouter>
      <div className="sidebar">
        <h2 className="sidebar--header">
          TheMarketing <ArrowDropDownOutlinedIcon />
          <div
            className="sidebar--header--user"
            style={{ display: "flex", textAlign: "center" }}
          >
            <div className="sidebar--header--user--status"></div>
            <div className="sidebar--header--user--userName">Dolly Singh</div>
          </div>
          <div className="sidebar--header--edit">
            <EditOutlinedIcon />
          </div>
        </h2>

        {/* sidebar Threads */}
            {threads.map((thread) => {
              return <>
              <Link to= {thread.link} className="Sidebar-route">
              <div className="sidebar--name">
              { thread.icon }
              <div>{ thread.name }</div>
              </div>
              </Link>
              <Routes>
                <Route path={thread.link} element={<>HI</> } />
              </Routes>
              </>
            })}

        
        <Marketing />
        <Announcement />
        <DirectMessage />

        <div className="sidebar--Announcement">
          <MicNoneIcon />
          <div> Announcement</div>
          <Button
            variant="outlined"
            size="small"
            color="inherit"
            sx={{ ml: 2 }}
          >
            {" "}
            <Switch {...label} size="small" color="secondary" />
            <HeadphonesOutlinedIcon sx={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>

      </BrowserRouter>
    </>
  );
};

export default Sidebar;

// Sidebar details in object

const threads = [
  {
    icon: <CommentRoundedIcon className="sidebar--name--icon" />,
    name: "Threads",
    link: "/threads",
  },
  {
    icon: <ForumRoundedIcon className="sidebar--name--icon" />,
    name: "All DMS",
    link: "/all-dms",
  },
  {
    icon: <AlternateEmailIcon className="sidebar--name--icon" />,
    name: "Mentions & Reactions",
    link: "/motion-reaction",
  },
  {
    icon: <CastConnectedRoundedIcon className="sidebar--name--icon" />,
    name: "Slack Connect",
    link: "/slack-connect",
  },
  { icon: <AppsIcon className="sidebar--name--icon" />,
   name: "Apps",
   link: "/app",
   },

  {
    icon: <MoreVertRoundedIcon className="sidebar--name--icon2" />,
    name: "More",
    link: "/more",
  },
];
