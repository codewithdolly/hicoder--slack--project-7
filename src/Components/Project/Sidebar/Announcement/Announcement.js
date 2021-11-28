import React from "react";
import "./Announcement.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Announcement = () => {
  return (
    <>
     <div className="announcement">
        <div className="announcement--message">
          <ArrowRightIcon className="announcement--message--icon" />
          <div>Announcement</div>
        </div>
        <div className="announcement--hide">
          <MoreVertIcon />
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default Announcement;
