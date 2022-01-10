import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Header,
  Development,
  DirectMessage,
  Marketing,
  Channel,
  SlackApps,
  BusinessAnalysis,
  ProjectMeeting,
  General,
  TestingTeam,
  Dolly,
  Amegh,
  NagarajuKatta,
  Rana,
  Samhitha,
  Threads,
  AllDMS,
  MentionsAndReactions,
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
import TagIcon from "@mui/icons-material/Tag";
import AddIcon from "@mui/icons-material/Add";

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
              <div className="sidebar--chatbox">
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
                {/* channel content */}
                {channels.map((thread) => {
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
                <DirectMessage />
                {/* Direct message group */}
                {directMessage.map((thread) => {
                  return (
                    <>
                      <Link to={thread.link} className="Sidebar-route">
                        <div className="sidebar--name sidebar--name--message">
                          <img
                            src={process.env.PUBLIC_URL + thread.image}
                            alt=""
                            width="20px"
                            style={{ marginRight: "5px" }}
                          />
                          {thread.icon}
                          <div>
                            {thread.name} {thread.name2}
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>

              {/* Announcements start */}
              <div className="sidebar--Announcement">
                <MicNoneIcon />
                <h3> Announcement</h3>
                <Button
                  variant="outlined"
                  size="small"
                  color="inherit"
                  sx={{ ml: 3 }}
                >
                  {" "}
                  <Switch {...label} size="small" />
                  <HeadphonesOutlinedIcon size="small" />
                </Button>
              </div>
            </div>
            {/* Announcements ends */}

            {/* Sidebar ends */}

            {/* Routing Starts */}
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

              {channels.map((thread) => {
                return (
                  <>
                    <Routes>
                      <Route path={thread.link} element={thread.chat} />
                    </Routes>
                  </>
                );
              })}
              {directMessage.map((thread) => {
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
          {/* Routing Starts */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

// Sidebar details in object
const threads = [
  {
    link: "/",
    chat: <Development />,
  },
  {
    icon: <CommentRoundedIcon className="sidebar--name--icon" />,
    name: "Threads",
    link: "/threads",
    chat: <Threads />,
  },
  {
    icon: <ForumRoundedIcon className="sidebar--name--icon" />,
    name: "All DMS",
    link: "/all-dms",
    chat: <AllDMS />,
  },
  {
    icon: <AlternateEmailIcon className="sidebar--name--icon" />,
    name: "Mentions & Reactions",
    link: "/motion-reaction",
    chat: <MentionsAndReactions />,
  },
  {
    icon: <CastConnectedRoundedIcon className="sidebar--name--icon" />,
    name: "Slack Connect",
    link: "/",
    chat: <Development />,
  },
  {
    icon: <AppsIcon className="sidebar--name--icon" />,
    name: "Apps",
    link: "/app",
    chat: <SlackApps />,
  },

  {
    icon: <MoreVertRoundedIcon className="sidebar--name--icon2" />,
    name: "More",
    link: "/more",
    chat: <Development />,
  },
];

//add channel
const channels = [
  {
    icon: <TagIcon className="sidebar--name--icon" />,
    name: "Development Team",
    link: "/development",
    chat: <Development />,
  },
  {
    icon: <TagIcon className="sidebar--name--icon" />,
    name: "Business Analysis Team",
    link: "/business-analysis",
    chat: <BusinessAnalysis />,
  },
  {
    icon: <TagIcon className="sidebar--name--icon" />,
    name: "Project Meeting Team",
    link: "/projectmeeting",
    chat: <ProjectMeeting />,
  },
  {
    icon: <TagIcon className="sidebar--name--icon" />,
    name: "Testing Team",
    link: "/testing",
    chat: <TestingTeam />,
  },
  {
    icon: <TagIcon className="sidebar--name--icon" />,
    name: "General",
    link: "/general",
    chat: <General />,
  },

  {
    icon: <AddIcon className="sidebar--name--addIcon" />,
    name: "Add channels",
    link: "/",
    chat: "",
  },
];

// direct messages
const directMessage = [
  {
    image: "../Images/slack2.png",
    name: "Slackbot",
    link: "/slackpot",
    chat: <Development />,
  },
  {
    image: "../Images/dolly.jpg",
    name: "Dolly",
    name2: <span className="me">you</span>,
    link: "/dolly",
    chat: <Dolly />,
  },
  {
    image: "../Images/amegh.jpg",
    name: "Amegh",
    link: "/amegh",
    chat: <Amegh />,
  },

  {
    image: "../Images/nagaraju.jpg",
    name: "Nagaraju Katta",
    link: "/nagaraju",
    chat: <NagarajuKatta />,
  },
  {
    image: "../Images/rana.jpg",
    name: "Rana",
    link: "/rana",
    chat: <Rana />,
  },
  {
    image: "../Images/sam.jpg",
    name: "Samhitha",
    link: "/sam",
    chat: <Samhitha />,
  },

  {
    icon: <AddIcon className="sidebar--name--addIcon2" />,
    name: "Add Teammates",
    link: "/development",
    chat: "",
  },
];
