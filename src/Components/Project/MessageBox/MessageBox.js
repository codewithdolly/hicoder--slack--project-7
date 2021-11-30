import React from "react";
import "./MessageBox.scss";
import TextField from "@mui/material/TextField";
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import StrikethroughSOutlinedIcon from '@mui/icons-material/StrikethroughSOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

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
        <ToggleButton value="bold" aria-label="bold" sx={{height: "30px", width:"30px"}}>
            <BoltOutlinedIcon  sx={{fontSize: "20px"}} />
          </ToggleButton>
          <ToggleButton value="bold" aria-label="bold" sx={{height: "30px", width:"30px"}}>
            <FormatBoldIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic" sx={{height: "30px", width:"30px"}}>
            <FormatItalicIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined" sx={{height: "30px", width:"30px"}}>
            <FormatUnderlinedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="strike" aria-label="strike" sx={{height: "30px", width:"30px"}}>
            <StrikethroughSOutlinedIcon  sx={{fontSize: "20px"}} />
          </ToggleButton>
          <ToggleButton value="code" aria-label="code" sx={{height: "30px", width:"30px"}}>
            <CodeOutlinedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>

          <ToggleButton value=" link" aria-label="link" sx={{height: "30px", width:"30px"}}>
            <AddLinkOutlinedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="unorderd List" aria-label="unorderd List" sx={{height: "30px", width:"30px"}}>
            <FormatListBulletedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="orderd List" aria-label="orderd List" sx={{height: "30px", width:"30px"}}>
            <FormatListNumberedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="textColor" aria-label="textColor"  sx={{height: "30px", width:"50px"}}>
            <FormatColorTextIcon  sx={{fontSize: "15px"}}/>
            <ArrowDropDownIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color"  sx={{height: "30px", width:"50px"}}>
            <FormatColorFillIcon  sx={{fontSize: "15px"}}/>
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
        <ToggleButton value="font" aria-label="font" sx={{height: "30px", width:"30px"}}>
            <HdrAutoIcon  sx={{fontSize: "20px"}} />
          </ToggleButton>
          <ToggleButton value="tag" aria-label="tag" sx={{height: "30px", width:"30px"}}>
            <AlternateEmailIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="emoji" aria-label="emoji" sx={{height: "30px", width:"30px"}}>
            <TagFacesIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="attachment" aria-label="attachment" sx={{height: "30px", width:"30px"}}>
            <AttachFileIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="video" aria-label="video" sx={{height: "30px", width:"30px"}}>
            <VideocamOutlinedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>

          <ToggleButton value=" audio" aria-label="audio" sx={{height: "30px", width:"30px"}}>
            <MicNoneOutlinedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
          <ToggleButton value="Send" aria-label="Send"  sx={{height: "30px", width:"50px"}}>
            <SendOutlinedIcon />
          </ToggleButton>
          <ToggleButton value=" more" aria-label="more" sx={{height: "30px", width:"30px"}}>
            <KeyboardArrowDownOutlinedIcon  sx={{fontSize: "20px"}}/>
          </ToggleButton>
        </ToggleButtonGroup>
        </div>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
