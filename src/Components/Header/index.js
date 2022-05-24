import { Flex, Text, useThemeUI } from "theme-ui";
import headerImage from "../../resources/images/header-background.png";
import { useNavigate } from "react-router-dom";
import { SelfcareIcon } from "../Icon";
const Header = () => {
  const navigate = useNavigate();
  const { theme } = useThemeUI();
  return (
    <Flex
      id="Header-Container"
      sx={{
        width: "100%",
        bg: "primary",
        height: "8.188rem",
        alignItems: "center",
        px: "7rem",
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "100%",
      }}
    >
      <SelfcareIcon
        name={"ReduxIcon"}
        color="white"
        sx={{
          width: ["5rem", "5rem", "5rem"],
          height: ["3rem", "3rem", "2rem"],
          mr: "74px",
        }}
      />
      <Flex
        id="home_icon_background"
        sx={{
          justifyContent: "center",
          background: "#333086 0% 0% no-repeat padding-box",
          mixBlendMode: "multiply",
          opacity: "0.5",
          width: "245px",
          height: "100%",
          mr: "-245px",
        }}
      ></Flex>
      <Flex
        id="Home-Container"
        sx={{
          width: "245px",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SelfcareIcon
          name="home"
          sx={{
            width: "47.996px",
            height: "47.493px",
            zIndex: "100",
            mr: "20px",
          }}
        ></SelfcareIcon>
        <Flex
          sx={{
            py: "10px",
            zIndex: "100",
          }}
        >
          <Text
            sx={{
              textAlign: "left",
              font: "normal normal bold 19px/22px Raleway",
              letterSpacing: "0.57px",
              color: "white",
            }}
          >
            Home
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
