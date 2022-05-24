import { Input, Text, Box, Flex, Grid, Button } from "theme-ui";
import React from "react";
import { useState } from "react";
import { SelfcareIcon } from "../Icon";
const PostBar = ({
  length,
  children,
  startIndex,
  setstartIndex,
  itemsPerPage,
}) => {
  return (
    <Flex sx={{ position: "relative" }}>
      <Flex
        id="PostBar-Container"
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          alignItems: "center",
          justifyItems: "stretch",
          height: "21rem",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {children}

        {length > 4 && (
          <>
            <SelfcareIcon
              id="left-arrow"
              name={"arrow"}
              disabled={length < 4}
              onClick={(e) => {
                startIndex - 4 <= 0
                  ? setstartIndex(startIndex + length - itemsPerPage)
                  : setstartIndex(startIndex - itemsPerPage);
                console.log("Move Left");
              }}
              sx={{
                position: "absolute",
                left: "-1.25rem",
                width: "2.5rem",
                height: "2.5rem",
              }}
            />
            <SelfcareIcon
              id="right-arrow"
              name={"arrow"}
              disabled={length < 4}
              onClick={(e) => {
                setstartIndex((startIndex + itemsPerPage) % length);
              }}
              sx={{
                position: "absolute",
                right: "8.5rem",
                transform: "rotate(180deg)",
                width: "2.5rem",
                height: "2.5rem",
              }}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};
export default PostBar;
