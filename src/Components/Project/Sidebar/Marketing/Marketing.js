import React from "react";
import "./Marketing.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Marketing = () => {
  return (
    <>
      <div className="market">
        <div className="marketing">
          <ArrowRightIcon className="icon" />
          <div>Marketing</div>
        </div>
        <div className="hide">
            <MoreVertIcon />
            <AddIcon />
          </div>
      </div>
    </>
  );
};

export default Marketing;
