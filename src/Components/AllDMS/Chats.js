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
          Tuesday, November 20th
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
    name: "Rana",
    img: process.env.PUBLIC_URL + "../Images/rana.jpg",
    time: "7:25AM",
    tag: "@channel",
    msg: " Hello Everyone, We have meeting sharp 10 AM.",
  },
  {
    name: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
    time: "9:25AM",
    tag: "@channel",
    msg: "You will be having meeting so please be ready for it.",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "9:30AM",
    tag: "@Rana",
    msg: "Okay!",
  },
  {
    name: "Anand P",
    img: process.env.PUBLIC_URL + "../Images/anand.jpg",
    time: "9:33AM",
    tag: "@Shubh",
    msg: "do we have meeting?",
  },
  {
    name: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
    time: "9:25AM",
    tag: "@Dolly",
    msg: "Call to Nagaraju sir",
  },
  {
    name: "Samhitha",
    img: process.env.PUBLIC_URL + "../Images/sam.jpg",
    time: "9:35AM",
    tag: "@Anand p",
    msg: "yes",
  },
  {
    name: "Nagaraju Katta",
    img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
    time: "9:50AM",
    tag: "@channel",
    msg: "We will be haveing meeting in 10 minutes in meeting room.",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "9:50AM",
    tag: "@Nagaraju Katta",
    msg: "Okay!",
  },
  {
    name: "Nagaraju Katta",
    img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
    time: "9:50AM",
    tag: "@channel",
    msg: "Send me those sheets of yesterday's meetings.",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "9:52AM",
    tag: "@Nagaraju Katta",
    msg: "Okay!",
  },
  {
    name: "Amegh",
    img: process.env.PUBLIC_URL + "../Images/amegh.jpg",
    time: "9:55AM",
    tag: "@NAGARAJU KATTA",
    msg: " sir Okay...",
  },
  {
    name: "Shashank",
    img: process.env.PUBLIC_URL + "../Images/shashank.jpg",
    time: "9:55AM",
    tag: "@channel",
    msg: "ok",
  },
  {
    name: "Dolly",
    img: process.env.PUBLIC_URL + "../Images/dolly2.jpg",
    time: "10:00AM",
    tag: "@channel",
    msg: "guys, join on meeting",
  },
];
