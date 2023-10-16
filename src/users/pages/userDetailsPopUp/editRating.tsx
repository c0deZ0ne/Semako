import * as React from 'react';
import Box from '@mui/joy/Box';
import { ratingStar } from '../../../assets/icon';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { createTheme } from '@mui/material/styles';

const marks = [
  {
    value: 1,
    label: (
      <svg
        className="flex ml-[15px]"
        width="32"
        height="18"
        viewBox="0 0 32 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.04894 2.92705C8.3483 2.00574 9.6517 2.00574 9.95106 2.92705L10.7961 5.52786C10.93 5.93989 11.3139 6.21885 11.7472 6.21885H14.4818C15.4505 6.21885 15.8533 7.45846 15.0696 8.02786L12.8572 9.63525C12.5067 9.8899 12.3601 10.3413 12.494 10.7533L13.339 13.3541C13.6384 14.2754 12.5839 15.0415 11.8002 14.4721L9.58779 12.8647C9.2373 12.6101 8.7627 12.6101 8.41222 12.8647L6.19983 14.4721C5.41612 15.0415 4.36164 14.2754 4.66099 13.3541L5.50604 10.7533C5.63992 10.3413 5.49326 9.8899 5.14277 9.63525L2.93039 8.02787C2.14668 7.45846 2.54945 6.21885 3.51818 6.21885H6.25283C6.68606 6.21885 7.07001 5.93989 7.20389 5.52786L8.04894 2.92705Z"
          fill="#FFA500"
        />
        <path
          d="M31.08 13V12.37H29.16V5.95H29L26.5 6.24L26.53 6.93L28.32 6.72V12.37H26.34V13H31.08Z"
          fill="black"
        />
      </svg>
    )
  },
  {
    value: 2,
    label: (
      <svg
        width="33"
        height="18"
        viewBox="0 0 33 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.79894 2.92705C9.0983 2.00574 10.4017 2.00574 10.7011 2.92705L11.5461 5.52786C11.68 5.93989 12.0639 6.21885 12.4972 6.21885H15.2318C16.2005 6.21885 16.6033 7.45846 15.8196 8.02786L13.6072 9.63525C13.2567 9.8899 13.1101 10.3413 13.244 10.7533L14.089 13.3541C14.3884 14.2754 13.3339 15.0415 12.5502 14.4721L10.3378 12.8647C9.9873 12.6101 9.5127 12.6101 9.16221 12.8647L6.94983 14.4721C6.16612 15.0415 5.11164 14.2754 5.41099 13.3541L6.25604 10.7533C6.38992 10.3413 6.24326 9.8899 5.89277 9.63525L3.68039 8.02787C2.89668 7.45846 3.29945 6.21885 4.26818 6.21885H7.00283C7.43606 6.21885 7.82001 5.93989 7.95389 5.52786L8.79894 2.92705Z"
          fill="#FFA500"
        />
        <path
          d="M30.11 10.93C30.74 10.32 31.2 9.82 31.47 9.42C31.74 9.02 31.88 8.56 31.88 8.05C31.88 6.68 30.95 5.92 29.47 5.92C28.6 5.92 27.81 6.25 27.11 6.91L27.59 7.5C28.25 6.89 28.86 6.58 29.43 6.58C30.36 6.58 30.97 7.11 30.97 8.07C30.97 8.48 30.86 8.84 30.64 9.16C30.43 9.48 30.07 9.89 29.57 10.39L27.12 12.84V13H31.92V12.31L28.65 12.36L30.11 10.93Z"
          fill="black"
        />
      </svg>
    )
  },
  {
    value: 3,
    label: (
      <svg
        width="33"
        height="18"
        viewBox="0 0 33 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.54894 2.92705C8.8483 2.00574 10.1517 2.00574 10.4511 2.92705L11.2961 5.52786C11.43 5.93989 11.8139 6.21885 12.2472 6.21885H14.9818C15.9505 6.21885 16.3533 7.45846 15.5696 8.02786L13.3572 9.63525C13.0067 9.8899 12.8601 10.3413 12.994 10.7533L13.839 13.3541C14.1384 14.2754 13.0839 15.0415 12.3002 14.4721L10.0878 12.8647C9.7373 12.6101 9.2627 12.6101 8.91222 12.8647L6.69983 14.4721C5.91612 15.0415 4.86164 14.2754 5.16099 13.3541L6.00604 10.7533C6.13992 10.3413 5.99326 9.8899 5.64277 9.63525L3.43039 8.02787C2.64668 7.45846 3.04945 6.21885 4.01818 6.21885H6.75283C7.18606 6.21885 7.57001 5.93989 7.70389 5.52786L8.54894 2.92705Z"
          fill="#FFA500"
        />
        <path
          d="M31.58 6.14V6H27.16V6.68H30.32L28.35 9.27V9.44H28.86C30.15 9.44 30.95 9.89 30.95 10.88C30.95 11.87 30.18 12.41 29.14 12.41C28.43 12.41 27.8 12.13 27.23 11.56L26.78 12.15C27.39 12.76 28.19 13.07 29.16 13.07C29.94 13.07 30.58 12.89 31.08 12.52C31.58 12.15 31.83 11.61 31.83 10.91C31.83 9.68 30.94 8.95 29.5 8.88L31.58 6.14Z"
          fill="black"
        />
      </svg>
    )
  },
  {
    value: 4,
    label: (
      <div>
        <svg
          width="34"
          height="18"
          viewBox="0 0 34 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.29894 2.92705C8.5983 2.00574 9.9017 2.00574 10.2011 2.92705L11.0461 5.52786C11.18 5.93989 11.5639 6.21885 11.9972 6.21885H14.7318C15.7005 6.21885 16.1033 7.45846 15.3196 8.02786L13.1072 9.63525C12.7567 9.8899 12.6101 10.3413 12.744 10.7533L13.589 13.3541C13.8884 14.2754 12.8339 15.0415 12.0502 14.4721L9.83779 12.8647C9.4873 12.6101 9.0127 12.6101 8.66222 12.8647L6.44983 14.4721C5.66612 15.0415 4.61164 14.2754 4.91099 13.3541L5.75604 10.7533C5.88992 10.3413 5.74326 9.8899 5.39277 9.63525L3.18039 8.02787C2.39668 7.45846 2.79945 6.21885 3.76818 6.21885H6.50283C6.93606 6.21885 7.32001 5.93989 7.45389 5.52786L8.29894 2.92705Z"
            fill="#FFA500"
          />
          <path
            d="M30.96 8.61H30.15L30.14 10.81H27.6L29.95 6H29.08L26.51 11.3V11.44H30.14V13H30.96V11.44H32.11V10.81H30.96V8.61Z"
            fill="black"
          />
        </svg>
      </div>
    )
  },
  {
    value: 5,
    label: (
      <svg
        className="flex mr-[18px]"
        width="32"
        height="18"
        viewBox="0 0 32 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.04894 2.92705C8.3483 2.00574 9.6517 2.00574 9.95106 2.92705L10.7961 5.52786C10.93 5.93989 11.3139 6.21885 11.7472 6.21885H14.4818C15.4505 6.21885 15.8533 7.45846 15.0696 8.02786L12.8572 9.63525C12.5067 9.8899 12.3601 10.3413 12.494 10.7533L13.339 13.3541C13.6384 14.2754 12.5839 15.0415 11.8002 14.4721L9.58779 12.8647C9.2373 12.6101 8.7627 12.6101 8.41222 12.8647L6.19983 14.4721C5.41612 15.0415 4.36164 14.2754 4.66099 13.3541L5.50604 10.7533C5.63992 10.3413 5.49326 9.8899 5.14277 9.63525L2.93039 8.02787C2.14668 7.45846 2.54945 6.21885 3.51818 6.21885H6.25283C6.68606 6.21885 7.07001 5.93989 7.20389 5.52786L8.04894 2.92705Z"
          fill="#FFA500"
        />
        <path
          d="M28.98 8.71C28.51 8.71 28.05 8.75 27.59 8.83V6.67H31.14V6H26.86V9.47L26.95 9.52C27.55 9.41 28.11 9.35 28.64 9.35C29.91 9.35 30.62 9.85 30.62 10.84C30.62 11.87 29.86 12.44 28.73 12.44C28.1 12.44 27.47 12.18 26.86 11.66L26.47 12.27C27.06 12.81 27.84 13.08 28.8 13.08C29.63 13.08 30.28 12.88 30.77 12.47C31.26 12.06 31.5 11.51 31.5 10.81C31.5 9.48 30.57 8.71 28.98 8.71Z"
          fill="black"
        />
      </svg>
    )
  }
];

function valueText(value: number) {
  return `${value} ${ratingStar()}`;
}

const useStyles = makeStyles({
  root: {
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 0,
    width: 0,
    borderRadius: '100%'
  },
  markActive: {
    backgroundColor: '#fff'
  }
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B6EFF' // Set your primary color using hex value
    }
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: green[500],
          height: 4
        }
      }
    }
  }
});

function valuetext(value: any) {
  return `${value}`;
}

export function Edit() {
  const classes = useStyles();
  return (
    <div className="w-[100%] p-[16px] h-[100%]  flex flex-col ">
      <div className=" mr-auto ml-auto max-sm:w-[100%]  md:w-[70%] gap-10">
        <label
          htmlFor="stars"
          className="flex flex-col font-Corsa-Grotesk w-[100%] my-[16px] "
        >
          <span className="text-[#000000] text-[12px] my-[16px]">
            Total Reviews
          </span>
          <input
            className="w-[100%] text-[#D9DBDE] pl-[16px]  md:w-[100%] max-sm:[100%] h-[48px] outline-none border rounded-md"
            type="number"
            name=""
            id="stars"
            placeholder="Enter Riviews"
          />
        </label>

        <span className=" flex w-[100%] text-[12px]">Average Ratings</span>

        <ThemeProvider theme={theme}>
          <Slider
            classes={{
              root: classes.root,
              thumb: classes.thumb,
              active: classes.active,
              valueLabel: classes.valueLabel,
              track: classes.track,
              rail: classes.rail,
              mark: classes.mark,
              markActive: classes.markActive
            }}
            aria-label="Custom marks"
            max={5}
            min={1}
            defaultValue={2}
            getAriaValueText={valuetext}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
