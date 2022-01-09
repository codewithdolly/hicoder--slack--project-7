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
    tag: "@Dolly",
    msg: " Hello Everyone, We have meeting sharp 10 AM.",
  },
  {
    name: "subh",
    img: process.env.PUBLIC_URL + "../Images/subh.jpg",
    time: "9:25AM",
    tag: "@Dolly",
    msg: "You will be having meeting so please be ready for it.",
  },
  {
    name: "Anand P",
    img: process.env.PUBLIC_URL + "../Images/anand.jpg",
    time: "9:33AM",
    tag: "@Dolly",
    msg: "do we have meeting?",
  },

  {
    name: "Nagaraju Katta",
    img: process.env.PUBLIC_URL + "../Images/nagaraju.jpg",
    time: "9:50AM",
    tag: "@Dolly",
    msg: "We will be haveing meeting in 10 minutes in meeting room.",
  },
  {
    name: "Shashank",
    img: process.env.PUBLIC_URL + "../Images/shashank.jpg",
    time: "7:35AM",
    tag: "@Dolly",
    msg: "ok",
  },
  {
    name: "Samhitha",
    img: process.env.PUBLIC_URL + "../Images/sam.jpg",
    time: "9:35AM",
    tag: "@Dolly",
    msg: "yes",
  },

  {
    name: "Amegh",
    img: process.env.PUBLIC_URL + "../Images/amegh.jpg",
    time: "7:35AM",
    tag: "@Dolly",
    msg: " sir Okay...",
  },
  

];
