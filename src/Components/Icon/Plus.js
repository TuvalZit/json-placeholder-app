import React from "react";
const Plus = ({ color = "#764abc", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    sx={{ width: "32px", height: "32px" }}
    {...props}
  >
    <title />
    <path
      d="M16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Zm0,26A11,11,0,1,1,27,16,11,11,0,0,1,16,27Z"
      fill={color}
    />
    <path
      d="M20,14H18V12a2,2,0,0,0-4,0v2H12a2,2,0,0,0,0,4h2v2a2,2,0,0,0,4,0V18h2a2,2,0,0,0,0-4Z"
      fill={color}
    />
  </svg>
);
export default Plus;
