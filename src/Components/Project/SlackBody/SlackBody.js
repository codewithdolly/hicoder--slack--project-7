import React from "react";
import "./SlackBody.scss"
import { Sidebar } from "../Index";

const SlackBody = () => {
  return (
    <>
      <div className="slackBody">
        <div className="slackBody--left">
          <Sidebar />
        </div>
        <div className="slackBody--right">
      </div>
      </div>
    </>
  );
};

export default SlackBody;
