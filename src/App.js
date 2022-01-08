import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Header,
  Development,
  DirectMessage,
  Marketing,
  Channel,
} from "./Components";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CastConnectedRoundedIcon from "@mui/icons-material/CastConnectedRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AppsIcon from "@mui/icons-material/Apps";

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* Header added */}
          <Header />

          {/* adding sidebar started */}
          <div className="sidebar">
            {/* sidebar Threads */}
            <div className="sidebar--header">
              <h2 className="sidebar--header-groupName">
                TheMarketing <ArrowDropDownOutlinedIcon />
                <div
                  className="sidebar--header--user"
                  style={{ display: "flex", textAlign: "center" }}
                >
                  <div className="sidebar--header--user--status"></div>
                  <div className="sidebar--header--user--userName">
                    Dolly Singh
                  </div>
                </div>
                <div className="sidebar--header--edit">
                  <EditOutlinedIcon />
                </div>
              </h2>

              {threads.map((thread) => {
                return (
                  <>
                    <Link to={thread.link} className="Sidebar-route">
                      <div className="sidebar--name">
                        {thread.icon}
                        <div>{thread.name}</div>
                      </div>
                    </Link>
                  </>
                );
              })}
              {/* thread group adding */}
              <Marketing />
              <Channel />
              <DirectMessage />

              {/* Announcements start */}
              <div className="sidebar--Announcement">
                <MicNoneIcon />
                <h4> Announcement</h4>
                <Button
                  variant="outlined"
                  size="small"
                  color="inherit"
                  sx={{ ml: 3 }}
                >
                  {" "}
                  <Switch {...label} />
                  <HeadphonesOutlinedIcon sx={{ fontSize: "20px" }} />
                </Button>
              </div>
            </div>
            {/* Announcements start */}
            {/* Sidebar ends */}

            <div className="appRoutes">
              {threads.map((thread) => {
                return (
                  <>
                    <Routes>
                      <Route path={thread.link} element={thread.chat} />
                    </Routes>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

// Sidebar details in object
const threads = [
  {
    icon: <CommentRoundedIcon className="sidebar--name--icon" />,
    name: "Threads",
    link: "/threads",
    chat: <Development />,
  },
  {
    icon: <ForumRoundedIcon className="sidebar--name--icon" />,
    name: "All DMS",
    link: "/all-dms",
    chat: <Development />,
  },
  {
    icon: <AlternateEmailIcon className="sidebar--name--icon" />,
    name: "Mentions & Reactions",
    link: "/motion-reaction",
    chat: <Development />,
  },
  {
    icon: <CastConnectedRoundedIcon className="sidebar--name--icon" />,
    name: "Slack Connect",
    link: "/slack-connect",
    chat: <Development />,
  },
  {
    icon: <AppsIcon className="sidebar--name--icon" />,
    name: "Apps",
    link: "/app",
    chat: <Development />,
  },

  {
    icon: <MoreVertRoundedIcon className="sidebar--name--icon2" />,
    name: "More",
    link: "/more",
    chat: <Development />,
  },
];
