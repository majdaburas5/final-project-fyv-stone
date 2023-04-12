import * as React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../css/Opinion.css";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import MarbleByColor from "./MarbleByColor";

const PrettoSlider = styled(Slider)({
  color: "black",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "red",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function CustomizedSlider({
  showMarbleByColor,
  marblesByColor,
}) {
  const [wallSliderValue, setWallSliderValue] = useState(20);
  const handleWallSliderChange = (event, newValue) => {
    setWallSliderValue(newValue);
  };
  const [closetSliderValue, setClosetSliderValue] = useState(20);
  const handleClosetSliderChange = (event, newValue) => {
    setClosetSliderValue(newValue);
  };
  const [floorSliderValue, setFloorSliderValue] = useState(20);
  const handleFloorSliderChange = (event, newValue) => {
    setFloorSliderValue(newValue);
  };
  const [wallColorValue, setWallColor] = useState(0);
  const handleWallColorChange = (event, newValue) => {
    setWallColor(newValue);
  };
  const [closetColorValue, setClosetColor] = useState(0);
  const handleClosetColorChange = (event, newValue) => {
    setClosetColor(newValue);
  };
  const [floorColorValue, setFloorColor] = useState(0);
  const handleFloorColorChange = (event, newValue) => {
    setFloorColor(newValue);
  };

  const wallPercent = wallSliderValue / 100;
  const closetPercent = closetSliderValue / 100;
  const floorPercent = floorSliderValue / 100;
  const wallColor = wallColorValue;
  const closetColor = closetColorValue;
  const floorColor = floorColorValue;
  const sumPercents = wallPercent + closetPercent + floorPercent;

  const handleClick = function () {
    const wallResult = wallPercent * wallColor;
    const closetResult = closetPercent * closetColor;
    const floorResult = floorPercent * floorColor;
    const matchResult = wallResult + closetResult + floorResult;
    return Math.round(matchResult);
  };

  return (
    <div className="sliders">
      <h1>GIVE YOUR OPINION</h1>
      <table>
        <tr>
          <th>
            <Box sx={{ width: 270 }}>
              <Typography gutterBottom>
                How Much Wall Effect In Percent ?
              </Typography>
              <PrettoSlider
                value={wallSliderValue}
                onChange={handleWallSliderChange}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </Box>
          </th>
          <tr>
            <td>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handleWallColorChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Grey"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Beige"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Blue"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="White"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Brown"
                  />
                  <FormControlLabel
                    value="6"
                    control={<Radio />}
                    label="Black"
                  />
                </RadioGroup>
              </FormControl>
            </td>
          </tr>
        </tr>
        <tr>
          <th>
            <Box sx={{ width: 270 }}>
              <Typography gutterBottom>
                How Much Closet Effect In Percent ?
              </Typography>
              <PrettoSlider
                value={closetSliderValue}
                onChange={handleClosetSliderChange}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </Box>
          </th>
          <tr>
            {" "}
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleClosetColorChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="Grey" />
                <FormControlLabel value="2" control={<Radio />} label="Beige" />
                <FormControlLabel value="3" control={<Radio />} label="Blue" />
                <FormControlLabel value="4" control={<Radio />} label="White" />
                <FormControlLabel value="5" control={<Radio />} label="Brown" />
                <FormControlLabel value="6" control={<Radio />} label="Black" />
              </RadioGroup>
            </FormControl>
          </tr>
        </tr>
        <tr>
          <th>
            <Box sx={{ width: 270 }}>
              <Typography gutterBottom>
                How Much Floor Effect In Percent ?
              </Typography>
              <PrettoSlider
                value={floorSliderValue}
                onChange={handleFloorSliderChange}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </Box>
          </th>
          <tr>
            {" "}
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleFloorColorChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="Grey" />
                <FormControlLabel value="2" control={<Radio />} label="Beige" />
                <FormControlLabel value="3" control={<Radio />} label="Blue" />
                <FormControlLabel value="4" control={<Radio />} label="White" />
                <FormControlLabel value="5" control={<Radio />} label="Brown" />
                <FormControlLabel value="6" control={<Radio />} label="Black" />
              </RadioGroup>
            </FormControl>
          </tr>
        </tr>
      </table>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => showMarbleByColor(handleClick())}
        >
          Match
        </Button>
      </Stack>
      <MarbleByColor marblesByColor={marblesByColor} />
    </div>
  );
}
