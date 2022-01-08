import React from "react";
import "./Channel.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Channel = () => {
  return (
    <>
      <div className="channel">
        <div className="channel--message">
          <ArrowRightIcon className="channel--message--icon" />
          <div>Channel</div>
        </div>
        <div className="channel--hide">
          <MoreVertIcon />
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default Channel;
