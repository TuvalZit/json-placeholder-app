import { Box, Flex, Button } from "theme-ui";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { SelfcareIcon } from "../Icon";
const NavButton = ({ path, iconName, toDisplay, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.includes(path);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        bg: isActive ? "#0c3865" : "lightgray",
        ...props.sx,
      }}
    >
      {/* <Link to={"/" + name}> */}
      <Flex
        onClick={(e) => {
          navigate(path);
        }}
        sx={{
          cursor: "pointer",
          bg: "inherit",
          color: "white",
          width: "11.25rem",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SelfcareIcon name={iconName} />
          {toDisplay}
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          width: "100%",
          height: "0px",
        }}
      >
        {isActive && (
          <Flex
            id="arrow"
            sx={{
              width: "2rem",
              height: "2rem",
              transform: "rotate(45deg)",
              position: "relative",
              top: "47.5px",
              bg: "#0c3865",
            }}
          ></Flex>
        )}
      </Flex>
      {/* </Link> */}
    </Flex>
  );
};

export default NavButton;
