import React from "react";
const Posts = ({ fill = "none", stroke = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    {...props}
  >
    {/* <defs>
        <style>
            .cls-1{fill:none;stroke:#fff;strokeLinecap:round;strokeLinejoin:round;strokeWidth:2px}
        </style>
    </defs> */}
    <g id="compass" transform="translate(-1.5 -1)">
      <circle
        id="Ellipse_37"
        data-name="Ellipse 37"
        className="cls-1"
        cx="14"
        cy="14"
        r="14"
        fill={fill}
        stroke={stroke}
        transform="translate(2.5 2)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Path_754"
        data-name="Path 754"
        className="cls-1"
        d="M21.533 7.76 18.09 18.09 7.76 21.533 11.2 11.2z"
        transform="translate(1.353 1.353)"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <g
        id="Ellipse_41"
        data-name="Ellipse 41"
        transform="translate(15 15)"
        fill={stroke}
        stroke={stroke}
      >
        <circle cx="1" cy="1" r="1" stroke="none" />
        <circle cx="1" cy="1" r=".5" fill="none" />
      </g>
    </g>
  </svg>
);
export default Posts;
