import React from "react";
import "./SlackBody.scss"
import { Sidebar } from "../Index";
import Development from "../Development/Development";




const SlackBody = () => {
  return (
    <>
      <div className="slackBody">
        <div className="slackBody--left">
          <Sidebar />
        </div>
        <div className="slackBody--right">
        <Development />


      </div>
      </div>
    </>
  );
};

export default SlackBody;
