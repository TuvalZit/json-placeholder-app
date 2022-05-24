import React from "react";
import { Box } from "@theme-ui/components";

const RoundCheckbox = ({
  color = "svgStrokePrimary",
  size = "iconMedium",
  ...props
}) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    sx={{ width: size, height: size, stroke: color, flexShrink: 0 }}
    {...props}
  >
    <g fill="#fff" stroke={color} strokeWidth="1" opacity="0.4">
      <circle cx="13" cy="13" r="13" stroke="none" />
      <circle cx="13" cy="13" r="12.5" fill="none" />
    </g>
    <g transform="translate(-1 -1)">
      <path
        d="M12011,5845.647l4.457-4.457,4.455-4.458"
        transform="translate(-11999.133 -5827.189)"
        fill="none"
        stroke="#39bf11"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M0,4.647,2.324,2.324,4.647,0"
        transform="translate(11.868 13.809) rotate(90)"
        fill="none"
        stroke="#39bf11"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </g>
  </Box>
);

export default RoundCheckbox;
