import React from "react";
import "./SlackBody.scss"
import { Sidebar } from "../Index";
import Development from "../Development/Development";
import SlackApps from "../SlackApps/Index"



const SlackBody = () => {
  return (
    <>
      <div className="slackBody">
        <div className="slackBody--left">
          <Sidebar />
        </div>
        <div className="slackBody--right">
        <Development />
        {/* <SlackApps /> */}

      </div>
      </div>
    </>
  );
};

export default SlackBody;
