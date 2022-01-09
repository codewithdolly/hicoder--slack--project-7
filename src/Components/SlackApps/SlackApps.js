import React from "react";
import "./SlackApps.scss";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const SlackApps = () => {
  return (
    <>
      <div className="slackApps">
        <div className="slackApps--head">
          <div className="slackApps--head--paid">
            <h3>Apps</h3>
            <Button sx={{ ml: 1 }} variant="contained" color="warning">
              <AutoAwesomeIcon sx={{ mr: 1 }} /> Permium
            </Button>
          </div>
          <div>
            <Button variant="outlined" color="inherit">
              App Directory
            </Button>
          </div>
        </div>
        <div className="slackApps--freeApps">
        <TextField
          id="outlined-basic"
          placeholder="Search by Name Or category (e.g productivity or sales)"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ my: 1}}
        />
        <Button color="info" sx={{ m: 2, mx: 3 }}>
          3 app in TheMarketing
        </Button>
        <br />
        {Apps.map((app) => {
          return (
            <div className="slackApps--freeApp">
              <div className="slackApps--freeApp--img">
                <img
                  src={app.img}
                  alt=""
                  width="40px"
                  className="slackApps--freeApp--img"
                />
              </div>
              <div>
                <h3>{app.name}</h3>
                <p>{app.content}</p>
              </div>
            </div>
          );
        })}
        <div className="slackApps--paid">
        <Button color="info" sx={{ m: 2, mx: 3 }}>
        Recommended apps
        </Button>
        <div>
          {PaidApps.map((Paid) => {
            return (
              <div className="slackApps--freeApp">
                <div className="slackApps--freeApp--img">
                  <img
                    src={Paid.img}
                    alt=""
                    width="40px"
                    className="slackApps--freeApp--img"
                  />
                </div>
                <div>
                  <h3>{Paid.name}</h3>
                  <p>{Paid.content}</p>
                  <Button variant="contained" color="success" center fullWidth sx={{mt:6, mb:2}}>
                    Add
                  </Button>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SlackApps;

const Apps = [
  {
    name: "GitHub",
    img: process.env.PUBLIC_URL + "../Images/github.png",
    content:
      "Bring your code to the conversations you care about with the GitHub and Slack app. you’ll get updates about what’s happening on GitHub—without leaving Slack.",
  },
  {
    name: "Google Drive",
    img: process.env.PUBLIC_URL + "../Images/drive.png",
    content:
      " Create new Google Docs, Slides, and Sheets files.Import an existing file from Google Drive into a channel or direct message",
  },
  {
    name: "Zoom",
    img: process.env.PUBLIC_URL + "../Images/zoom.png",
    content:
      "Easily Start a video Zoom Meeting directely from slack. Zoom Meetings is a software program developed by Zoom Video Communications.",
  },
];

const PaidApps = [
  {
    name: "Gmail",
    img: process.env.PUBLIC_URL + "../Images/mail.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Twitter",
    img: process.env.PUBLIC_URL + "../Images/twitter.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },

  {
    name: "Calender",
    img: process.env.PUBLIC_URL + "../Images/calender.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },

  {
    name: "Outlook",
    img: process.env.PUBLIC_URL + "../Images/outlook.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },

  {
    name: "Jeera",
    img: process.env.PUBLIC_URL + "../Images/jeera.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=gmail.com&oq=gmail.com&aqs=chrome..69i58j69i57j69i61l2.10702j0j4&sourceid=chrome&ie=UTF-8",
  },
  
];
