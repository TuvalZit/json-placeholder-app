import React from "react";

const Arrow = ({
  fill = "#f3f3f3",
  stroke = "#fff",
  isAvailable = true,
  ...props
}) => (
  <svg
    id="Group_164"
    data-name="Group 164"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
  >
    <g
      id="Ellipse_1"
      data-name="Ellipse 1"
      fill="#f3f3f3"
      stroke="#8e8d8d"
      stroke-width="1"
    >
      <circle cx="20" cy="20" r="20" stroke="none" />
      <circle cx="20" cy="20" r="19.5" fill="none" />
    </g>
    <path
      id="Path_18"
      data-name="Path 18"
      d="M0,8.624,8.624,0l8.624,8.624"
      transform="translate(14.16 28.722) rotate(-90)"
      fill="none"
      stroke="#48c0b6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
    />
  </svg>
);

export default Arrow;
