import React from "react";
import "./Admin.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <div className="admin--message">
          <ArrowRightIcon className="admin--message--icon" />
          <div>Admin</div>
        </div>
        <div className="admin--hide">
          <MoreVertIcon />
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default Admin;
