import { Button } from "@mui/material";
import "./Chats.scss";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Shubh from "../Images/subh.jpg";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PushPinIcon from "@mui/icons-material/PushPin";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
        <div className="chats--reaction">
          <AddReactionIcon className="chats--reaction--icon" />
          <ChatIcon className="chats--reaction--icon" />
          <ShareIcon className="chats--reaction--icon" />
          <BookmarkBorderIcon className="chats--reaction--icon" />
          <PushPinIcon className="chats--reaction--icon" />
          <MoreVertIcon className="chats--reaction--icon" />
        </div>
      </div>
    </>
  );
};

export default Chats;
