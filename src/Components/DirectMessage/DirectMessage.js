import React from "react";
import "./DirectMessage.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DirectMessage = () => {
  return (
    <>
      <div className="directMessage">
        <div className="directMessage--message">
          <ArrowRightIcon className="directMessage--message--icon" />
          <div>DirectMessage</div>
        </div>
        <div className="directMessage--hide">
          <MoreVertIcon />
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default DirectMessage;
