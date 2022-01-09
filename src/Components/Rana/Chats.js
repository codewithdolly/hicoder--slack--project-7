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
    tag: "@Rana",
    msg: "Hello sir!",
  },
  {
    name: "Rana",
    img: process.env.PUBLIC_URL + "../Images/rana.jpg",
    time: "7:25AM",
    tag: "@channel",
    msg: " Hello",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "7:30AM",
    tag: "@Rana",
    msg: "I need to talk about project.",
  },
  {
    name: "Rana",
    img: process.env.PUBLIC_URL + "../Images/rana.jpg",
    time: "7:31AM",
    tag: "@channel",
    msg: "Okay, I am busy in other work, Will let you know.",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "7:31AM",
    tag: "@Rana",
    msg: "Okay!",
  },
  {
    name: "Rana",
    img: process.env.PUBLIC_URL + "../Images/rana.jpg",
    time: "9:40AM",
    tag: "@channel",
    msg: "Hi Dolly, connect me in 10 minutes.",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "9:40AM",
    tag: "@Rana",
    msg: "Okay!",
  },
 
];
