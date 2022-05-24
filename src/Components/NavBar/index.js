import { Box, Flex, Grid, Button } from "theme-ui";
import NavButton from "./NavButton";
import pages from "../../common/constants";
const NavBar = () => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "11.25rem",
        px: "7rem",
        bg: "lightgray",
        mt: "1rem",
      }}
    >
      <Flex>
        {pages.map((page, index) => {
          return (
            page.iconName !== "Error" &&
            page.iconName !== "Home" && (
              <Flex key={index}>
                <Flex sx={{ width: "4px", bg: "white" }}></Flex>
                <NavButton
                  toDisplay={page.toDisplay}
                  iconName={page.iconName}
                  path={page.path}
                />
              </Flex>
            )
          );
        })}
        <Flex sx={{ width: "4px", bg: "white" }}></Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
