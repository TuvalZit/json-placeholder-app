//Imports
import { Text, Button, Flex, Input, Image } from "theme-ui";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers, setUserID } from "../Redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import login_background from "../resources/images/login_background.jpg";
import { SelfcareIcon } from "../Components/Icon";
//=========================================================================

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userArray, loading, error, userID } = useSelector(
    (state) => state.user
  ); //user the name of the reducer
  const isValidUser = () => {
    userArray.map((user) => {
      if (user.username === userName && user.email === email) {
        dispatch(setUserID(user.id));
        console.log("Valid User Name");
        navigate("/Posts");
      }
      return null;
    });
    return false;
  };
  useEffect(() => {
    dispatch(getUsers());
    console.log(userArray);
    //   return () => {
    //     null;
    //   }
  }, []);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        background: `transparent url(${login_background}) 0% 0% no-repeat padding-box`,
        backgroundSize: "100%",
      }}
    >
      <Flex
        sx={{
          width: "34.875rem",
          height: "40.563rem",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5rem",
          background: "#F9F9F9 0% 0% no-repeat padding-box",
          boxShadow: "0px 2px 8px #00000080",
          borderRadius: "9px",
          opacity: "1",
          zIndex: "1",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SelfcareIcon
            name={"ReduxIcon"}
            sx={{
              width: ["5rem", "5rem", "7rem"],
              height: ["3rem", "3rem", "2rem"],
            }}
          />
          <Text
            sx={{
              textAlign: "center",
              font: "normal normal 600 30px/35px Raleway",
              letterSpacing: "0.6px",
              color: "#0C3865",
              opacity: "1",
              mt: "35.75px",
            }}
          >
            Login Page
          </Text>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
        >
          <Text>Username</Text>
          <Input
            onChange={(text) => {
              setUserName(text.target.value);
            }}
            placeholder="Enter username"
            value={userName}
          />
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
        >
          <Text>Email</Text>
          <Input
            onChange={(text) => {
              setEmail(text.target.value);
            }}
            placeholder="Enter Email"
            value={email}
          />
        </Flex>
        <Flex sx={{ justifyContent: "center" }}>
          <Button
            onClick={isValidUser}
            sx={{
              background:
                "var(--unnamed-color-48c0b6) 0% 0% no-repeat padding-box",
              background: "#48C0B6 0% 0% no-repeat padding-box",
              borderRadius: "28px",
              opacity: "1",
              width: "184px",
              height: "50px",
            }}
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: "558px",
          height: "179px",
          background: "#E5E5E7 0% 0% no-repeat padding-box",
          borderRadius: " 0px 0px 9px 9px",
          opacity: "1",
          mt: "-30px",
          zIndex: "0",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            font: "normal normal 600 30px/35px Raleway",
            letterSpacing: "0.6px",
            color: "#0C3865",
            opacity: "1",
            mt: "35.75px",
          }}
        >
          New Here?
        </Text>
        <Button
          onClick={isValidUser}
          sx={{
            background:
              "var(--unnamed-color-48c0b6) 0% 0% no-repeat padding-box",
            background: "#48C0B6 0% 0% no-repeat padding-box",
            borderRadius: "28px",
            opacity: "1",
            width: "184px",
            height: "50px",
          }}
        >
          Create An Account
        </Button>
        <Text
          sx={{
            textAlign: "center",
            font: "normal normal 300 12px/14px Roboto",
            letterSpacing: "0.36px",
            color: "#8E8D8D",
            opacity: "1",
            mt: "35.75px",
          }}
        >
          © MIND CTI 2021
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
