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
                  <Button variant="contained" color="success" center fullWidth sx={{mt:5, mb:2}}>
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
      " Create new Google Docs, Slides, and Sheets files.Import an existing file from Google Drive into a channel or direct message. Google Drive into a channel or direct message",
  },
  {
    name: "Zoom",
    img: process.env.PUBLIC_URL + "../Images/zoom.png",
    content:
      "Easily Start a video Zoom Meeting directely from slack. Zoom Meetings is a software program developed by Zoom Video Communications. software program developed by Zoom.",
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
    link:"https://twitter.com/",
  },

  {
    name: "Calender",
    img: process.env.PUBLIC_URL + "../Images/calender.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/calendar/about/",
  },

  {
    name: "Outlook",
    img: process.env.PUBLIC_URL + "../Images/outlook.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    link:"https://outlook.live.com/owa/",
  },

  {
    name: "Jeera Cloud",
    img: process.env.PUBLIC_URL + "../Images/jeera.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    link:"https://hcjuly2021.slack.com/apps/A2RPP3NFR-jira-cloud?utm_source=in-prod&utm_medium=inprod-btn_app_install-index-click&tab=more_info",
  },
  {
    name: "Poll",
    img: process.env.PUBLIC_URL + "../Images/poll.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://hcjuly2021.slack.com/apps/A0HFW7MR6-simple-poll?utm_source=in-prod&utm_medium=inprod-btn_app_install-index-click&tab=more_info",
  },
  {
    name: "Google Analytics",
    img: process.env.PUBLIC_URL + "../Images/analitics.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/search?q=Analitics&oq=Analitics&aqs=chrome..69i57.270j0j9&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Brave Browser",
    img: process.env.PUBLIC_URL + "../Images/brave.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://brave.com/",
  },
  {
    name: "Devtool",
    img: process.env.PUBLIC_URL + "../Images/devtool.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://developer.chrome.com/docs/devtools/",
  },
  {
    name: "Google Drive",
    img: process.env.PUBLIC_URL + "../Images/Drive.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.google.com/intl/en_in/drive/",
  },
  {
    name: "Twitter",
    img: process.env.PUBLIC_URL + "../Images/twitter.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D",
  },
  {
    name: "Vscode",
    img: process.env.PUBLIC_URL + "../Images/vscode.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://code.visualstudio.com/",
  },
  {
    name: "Elementor",
    img: process.env.PUBLIC_URL + "../Images/elementor.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://elementor.com/",
  },
  {
    name: "Skype",
    img: process.env.PUBLIC_URL + "../Images/Skype.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.skype.com/en/",
  },
  {
    name: "Envato",
    img: process.env.PUBLIC_URL + "../Images/envato.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://www.envato.com/",
  },

  {
    name: "Outlook",
    img: process.env.PUBLIC_URL + "../Images/outlook.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://outlook.live.com/owa/",
  },
  {
    name: "Git",
    img: process.env.PUBLIC_URL + "../Images/git.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://git-scm.com/",
  },
  {
    name: "Search Console",
    img: process.env.PUBLIC_URL + "../Images/searchconsole.png",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  ",
    link:"https://search.google.com/search-console/about",
  },

  
];
