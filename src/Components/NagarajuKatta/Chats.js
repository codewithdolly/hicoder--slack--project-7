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
    name: "Nagaraju Katta",
    img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
    time: "8:00AM",
    tag: "@Dolly",
    msg: "Hi Dolly",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "8:30AM",
    tag: "@Nagaraju Katta",
    msg: " Hello Sir",
  },
  {
    name: "Nagaraju Katta",
    img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
    time: "8:30AM",
    tag: "@Dolly",
    msg: "What is the status of project?",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "8:30AM",
    tag: "@Nagaraju Katta",
    msg: " Okay Sir!",
  },
  
];
