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
import { showMarbleByColor } from "../api";

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

const ColorsRadio = () => {
  const colorsMap = [
    {
      label: "grey",
      value: 1,
    },
    {
      label: "beige",
      value: 2,
    },
    {
      label: "blue",
      value: 3,
    },
    {
      label: "white",
      value: 4,
    },
    {
      label: "brown",
      value: 5,
    },
    {
      label: "black",
      value: 6,
    },
  ];
  return colorsMap.map((color) => {
    return (
      <FormControlLabel
        value={color.value}
        control={<Radio />}
        label={color.label}
        key={color.value}
      />
    );
  });
};

export default function CustomizedSlider() {
  const [marblesByColor, setMarblesByColor] = useState([]);
  const [wallSliderValue, setWallSliderValue] = useState(20);
  const [closetSliderValue, setClosetSliderValue] = useState(20);
  const [floorSliderValue, setFloorSliderValue] = useState(20);
  const [wallColorValue, setWallColor] = useState(0);
  const [closetColorValue, setClosetColor] = useState(0);
  const [floorColorValue, setFloorColor] = useState(0);

  const handleClick = async () => {
    const wallPercent = wallSliderValue / 100;
    const closetPercent = closetSliderValue / 100;
    const floorPercent = floorSliderValue / 100;
    const wallColor = wallColorValue;
    const closetColor = closetColorValue;
    const floorColor = floorColorValue;
    const sumPercents = wallPercent + closetPercent + floorPercent;

    const wallResult = wallPercent * wallColor;
    const closetResult = closetPercent * closetColor;
    const floorResult = floorPercent * floorColor;
    const matchResult = wallResult + closetResult + floorResult;
    const marbles = await showMarbleByColor(Math.round(matchResult));
    if (sumPercents === 1) {
      setMarblesByColor(marbles);
    } else {
      alert("you must choose 100 % ");
      setMarblesByColor([]);
    }
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
                onChange={(event) => setWallSliderValue(event.target.value)}
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
                  onChange={(event) => setWallColor(event.target.value)}
                >
                  <ColorsRadio />
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
                onChange={(event) => setClosetSliderValue(event.target.value)}
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
                onChange={(event) => setClosetColor(event.target.value)}
              >
                <ColorsRadio />
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
                onChange={(event) => setFloorSliderValue(event.target.value)}
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
                onChange={(event) => setFloorColor(event.target.value)}
              >
                <ColorsRadio />
              </RadioGroup>
            </FormControl>
          </tr>
        </tr>
      </table>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={async () => handleClick()}
        >
          Match
        </Button>
      </Stack>
      <MarbleByColor marblesByColor={marblesByColor} />
    </div>
  );
}
