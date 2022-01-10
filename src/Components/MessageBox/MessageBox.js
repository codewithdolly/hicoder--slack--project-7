import React from "react";
import "./MessageBox.scss";
import TextField from "@mui/material/TextField";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const MessageBox = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div className="messageBox">
        <TextField
          multiline
          maxRows={4}
          fullWidth
          placeholder="Send a Message to # Development"
          placeholderTextColor="#D50000"
        />
        <div className="messageBox--option">
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            {leftIcons.map((icon) => {
              return (
                <>
                  <ToggleButton
                    value=" more"
                    aria-label="more"
                    sx={{ height: "30px", width: "30px" }}
                  >
                    {icon.leftIcon}
                  </ToggleButton>
                </>
              );
            })}
            <ToggleButton
              value="textColor"
              aria-label="textColor"
              sx={{ height: "30px", width: "50px" }}
            >
              <FormatColorTextIcon sx={{ fontSize: "15px" }} />
              <ArrowDropDownIcon />
            </ToggleButton>
            <ToggleButton
              value="color"
              aria-label="color"
              sx={{ height: "30px", width: "50px" }}
            >
              <FormatColorFillIcon sx={{ fontSize: "15px" }} />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <div>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              {icons.map((icon) => {
                return (
                  <>
                    <ToggleButton
                      value=" more"
                      aria-label="more"
                      sx={{ height: "30px", width: "30px" }}
                    >
                      {icon.rightIcon}
                      {icon.downIcon}
                    </ToggleButton>
                  </>
                );
              })}
              <ToggleButton
                value="color"
                aria-label="color"
                sx={{ height: "30px", width: "50px" }}
              >
                <SendOutlinedIcon sx={{ fontSize: "20px", pl: 1 }} />
                <ArrowDropDownIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBox;

let icons = [
  {
    rightIcon: <HdrAutoIcon sx={{ fontSize: "20px" }} />,
  },
  {
    rightIcon: <AlternateEmailIcon sx={{ fontSize: "20px" }} />,
  },
  {
    rightIcon: <TagFacesIcon sx={{ fontSize: "20px" }} />,
  },
  {
    rightIcon: <AttachFileIcon sx={{ fontSize: "20px" }} />,
  },
  {
    rightIcon: <MicNoneOutlinedIcon sx={{ fontSize: "20px" }} />,
  },
];

const leftIcons = [
  {
    leftIcon: <BoltOutlinedIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <FormatBoldIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <FormatItalicIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <FormatUnderlinedIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <StrikethroughSOutlinedIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <CodeOutlinedIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <AddLinkOutlinedIcon sx={{ fontSize: "20px" }} />,
  },
  {
    leftIcon: <FormatListBulletedIcon sx={{ fontSize: "20px" }} />,
  },
];
