import React from "react";
const ToDo = ({ fill = "none", stroke = "#fff", ...props }) => (
  <svg
    id="settings"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    {...props}
  >
    <circle
      id="Ellipse_35"
      data-name="Ellipse 35"
      className="cls-1"
      cx="4"
      cy="4"
      r="4"
      transform="translate(10.882 11.118)"
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      id="Path_749"
      data-name="Path 749"
      className="cls-1"
      d="M24.418 18.818a2.1 2.1 0 0 0 .42 2.316l.076.076a2.547 2.547 0 1 1-3.6 3.6l-.076-.076a2.117 2.117 0 0 0-3.589 1.5v.216a2.545 2.545 0 0 1-5.091 0v-.11a2.1 2.1 0 0 0-1.375-1.922 2.1 2.1 0 0 0-2.316.42l-.076.076a2.547 2.547 0 1 1-3.6-3.6l.076-.076a2.117 2.117 0 0 0-1.5-3.589h-.222a2.545 2.545 0 0 1 0-5.091h.115a2.1 2.1 0 0 0 1.922-1.375 2.1 2.1 0 0 0-.42-2.316l-.076-.076a2.547 2.547 0 1 1 3.6-3.6l.076.076a2.1 2.1 0 0 0 2.316.42h.1a2.1 2.1 0 0 0 1.273-1.922v-.22a2.545 2.545 0 0 1 5.091 0v.115a2.117 2.117 0 0 0 3.589 1.5l.076-.076a2.547 2.547 0 1 1 3.6 3.6l-.076.076a2.1 2.1 0 0 0-.42 2.316v.1a2.1 2.1 0 0 0 1.922 1.273h.216a2.545 2.545 0 0 1 0 5.091h-.109a2.1 2.1 0 0 0-1.922 1.278z"
      fill={"none"}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
export default ToDo;
