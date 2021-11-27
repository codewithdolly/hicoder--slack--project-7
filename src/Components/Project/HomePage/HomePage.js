import React from "react";
import "./Home.scss";
import profile from "../Images/dolly2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Sidebar } from "../Index";

const HomePage = () => {
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
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
