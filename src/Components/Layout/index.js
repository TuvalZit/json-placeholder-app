import React from "react";
import { Flex, Text } from "theme-ui";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setCurrentUserName } from "../../Redux/Slices/userSlice";
const Layout = ({ children }) => {
  const { userArray, userID, currentUserName, loading, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (userArray) {
      const userName = userArray[userID - 1].name;
      const userNameSplitted = userName.substring(0, userName.indexOf(" "));
      setUsername(userNameSplitted);
      setCurrentUserName(userNameSplitted);
      localStorage.setItem("CurrentUserName", userNameSplitted);
    } else {
      console.log("else!!!!!");
      dispatch(getUsers);
    }
  }, [dispatch, userArray, userID]);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Flex
        id="Welcome-Text-Container"
        sx={{
          my: "1.5rem",
          ml: "7rem",
        }}
      >
        <Text
          sx={{
            textAlign: "left",
            font: "normal normal bold 36px/42px Raleway",
            letterSpacing: "0.72px",
            color: "#0C3865",
            opacity: "1",
            fontWeight: "bold",
          }}
        >
          Welcome {currentUserName}!
        </Text>
      </Flex>
      <NavBar />
      <Flex
        px="7rem"
        sx={{
          flexDirection: "column",
          my: "auto",
          py: "3rem",
        }}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
export default Layout;
