import { Button } from "@mui/material";
import "./Chats.scss";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PushPinIcon from "@mui/icons-material/PushPin";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageBox from "../MessageBox";

const Chats = () => {
  return (
    <>
      <div className="chats">
        <Button className="chats--date">
          Tuesday, November 30th
          <KeyboardArrowDownOutlinedIcon color="action" />
        </Button>

        {messages.map((message) => {
          return (
            <>
              <div className="chats--reaction">
                <AddReactionIcon className="chats--reaction--icon" />
                <ChatIcon className="chats--reaction--icon" />
                <ShareIcon className="chats--reaction--icon" />
                <BookmarkBorderIcon className="chats--reaction--icon" />
                <PushPinIcon className="chats--reaction--icon chats--reaction--icon--pin" />
                <MoreVertIcon className="chats--reaction--icon" />
              </div>
              <div className="chats--singleChat">
                <div className="chats--singleChat--img">
                  <img
                    src={message.img}
                    alt={message.name}
                    className="chats--singleChat--imge"
                  />
                </div>
                <div className="chats--singleChat--details">
                  <div style={{ display: "flex" }}>
                    <h4>{message.name}</h4>
                    <p className="chats--singleChat--details--time">
                      {message.time}
                    </p>
                  </div>
                  <p className="chats--singleChat--details--meggage">
                    <span>{message.tag}</span> {message.msg}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <MessageBox />
    </>
  );
};

export default Chats;

// Messages in objects
let messages = [
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "7:30AM",
    tag: "@work",
    msg: "Check project status",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "9:32AM",
    tag: "@work",
    msg: "send mail",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "11:00AM",
    tag: "@work",
    msg: "Take confirmation of project",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "3:50pM",
    tag: "@work",
    msg: "send importent mail to client",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "3:30pM",
    tag: "@work",
    msg: "modify codes",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "3:30pM",
    tag: "@work",
    msg: "modify codes",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "3:50pM",
    tag: "@work",
    msg: "Research",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "3:30pM",
    tag: "@work",
    msg: "make list of all works",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "3:30pM",
    tag: "@work",
    msg: "check project status",
  },
];
