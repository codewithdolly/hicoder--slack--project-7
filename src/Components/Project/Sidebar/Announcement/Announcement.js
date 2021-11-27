import React from "react";
import "./Announcement.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Announcement = () => {
  return (
    <>
      {/* Announcement */}
      <div className="sidebar--name">
        <ArrowRightIcon className="sidebar--name--icon2" />
        <div>Announcement</div>
      </div>
    </>
  );
};

export default Announcement;
