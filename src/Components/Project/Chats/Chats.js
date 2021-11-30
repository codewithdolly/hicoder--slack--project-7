import { Button } from "@mui/material";
import "./Chats.scss";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Shubh from "../Images/subh.jpg";

const Chats = () => {
  return (
    <>
      <div className="chats">
        <Button className="chats--date">
          Tuesday, November 25th
          <KeyboardArrowDownOutlinedIcon color="action" />
        </Button>
        <div className="chats--singleChat">
          <div className="chats--singleChat--img">
            <img src={Shubh} alt="Naga" className="chats--singleChat--imge" />
          </div>
          <div className="chats--singleChat--details">
            <div style={{ display: "flex" }}>
              <h3>Subh</h3>
              <p className="chats--singleChat--details--time">07:15 AM</p>
            </div>
            <p className="chats--singleChat--details--meggage">
              <span>@channel</span> Hello Guys, Today we got one new big
              project. So congratulation & cheers!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
