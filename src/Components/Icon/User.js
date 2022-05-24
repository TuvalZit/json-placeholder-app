import React from "react";
const User = ({ fill = "none", stroke = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23.003"
    height="24.175"
    viewBox="0 0 23.003 24.175"
    {...props}
  >
    {/* <defs>
        <style>
            .cls-1{fill:none;stroke:#fff;strokeLinecap:round;strokeLinejoin:round;strokeMiterlimit:10;strokeWidth:2px}
        </style>
    </defs> */}
    <g id="Layer_1" transform="translate(1 1)">
      <g id="Group_28" data-name="Group 28">
        <path
          id="Path_76"
          data-name="Path 76"
          className="cls-1"
          d="M6.5 28.953a10.5 10.5 0 0 1 21 0z"
          transform="translate(-6.5 -6.778)"
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <circle
          id="Ellipse_7"
          data-name="Ellipse 7"
          className="cls-1"
          cx="5.861"
          cy="5.861"
          transform="translate(4.591)"
          r="5.861"
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </g>
  </svg>
);
export default User;
