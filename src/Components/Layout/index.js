import React from "react";
import { Flex, Text } from "theme-ui";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Slices/userSlice";
const Layout = ({ children }) => {
  const { userArray, userID, loading, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (userArray != null) {
      const currentUsername = userArray[userID - 1].name;
      const userNameSplitted = currentUsername.substring(
        0,
        currentUsername.indexOf(" ")
      );
      setUsername(userNameSplitted);
    } else {
      dispatch(getUsers);
    }
  }, [dispatch, userArray, userID]);

  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Header />
      <Flex
        sx={{
          alignItems: "center",
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
          Welcome {username}!
        </Text>
      </Flex>
      <NavBar
        sx={{
          my: "0.906rem",
        }}
      />
      <Flex
        px="7rem"
        sx={{
          flexDirection: "column",
          minHeight: "25.95rem",
          my: "5rem",
          justifyContent: "flex-start",
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
