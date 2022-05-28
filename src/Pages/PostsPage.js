//======================================================================================
import React from "react";
import Layout from "../Components/Layout";
import { Text, Button, Flex, Input, Image } from "theme-ui";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/Slices/userSlice";
import PostBar from "../Components/PostsBar";
import PostView from "../Components/PostsBar/PostView";
import { SelfcareIcon } from "../Components/Icon";
//My Posts
const PostsPage = () => {
  const { postsArray, userID, loading, error } = useSelector(
    (state) => state.user
  );
  const [startIndex, setstartIndex] = useState(0);
  const [tempArray, settempArray] = useState([]);
  const itemsPerPage = 4;
  const [len, setLen] = useState(10);
  const dispatch = useDispatch();
  const [filter, setfilter] = useState("");
  //======================================================================================
  useEffect(
    () => {
      dispatch(getPosts(userID));
      if (postsArray) {
        settempArray(postsArray);
      }
      return;
    },
    //   return () => {
    //     null;
    []
  );
  //======================================================================================
  useEffect(() => {
    tempArray.splice(0);
    if (postsArray && postsArray.length > 4) {
      tempArray.push(...postsArray);
      for (let i = 0; i < 4; i++) tempArray.push(postsArray[i]);
      settempArray([...tempArray]);
      console.log("tempArray:", tempArray);
    }

    // return () => {
    //
    //   null;
    // };
  }, [postsArray]);
  //======================================================================================
  const searchFilter = (text) => {
    console.log("SEARCHING");
    tempArray.splice(0);
    if (text === "") {
      tempArray.push(...postsArray);
      for (let i = 0; i < 4; i++) {
        tempArray.push(postsArray[i]);
      }
      settempArray([...tempArray]);
    } else {
      const filterArr = postsArray.filter(
        (post) => post.body.includes(text) || post.title.includes(text)
      );
      tempArray.push(...filterArr);
      if (filterArr && filterArr.length > 4) {
        for (let i = 0; i < 4; i++) {
          tempArray.push(filterArr[i]);
        }
        settempArray(tempArray);
      }
    }
    console.log("______", tempArray);
  };
  //======================================================================================
  return (
    <Layout sx={{}}>
      <Flex
        id="Total-Posts-search-container"
        sx={{
          mb: "20px",
        }}
      >
        <Flex id="Total-Posts-container">
          <Text
            sx={{
              textAlign: "left",
              font: "normal normal 600 36px/42px Raleway",
              letterSpacing: "0.72px",
              color: " #0C3865",
              opacity: "1",
              position: "relative",
            }}
          >
            Total posts (
            {tempArray.length > 4 ? tempArray.length - 4 : tempArray.length})
          </Text>
        </Flex>
        <Flex
          id="Search-Container"
          sx={{
            ml: "0.738rem",
            background: "#F3F3F3 0% 0% no-repeat padding-box",
            borderRadius: "9px",
            opacity: "1",
            px: "0.984rem",
            width: "23.563rem",
            height: "3.125rem",
            alignItems: "center",
          }}
        >
          <SelfcareIcon name={"search"}></SelfcareIcon>
          <Input
            placeholder="Search here to find a number or a plan"
            sx={{
              width: "19rem",
              outline: "none",
              border: "none",
              font: "normal normal normal 16px/19px Raleway",
            }}
            onChange={(text) => {
              setfilter(text.target.value);
              searchFilter(text.target.value);
              setstartIndex(0);
            }}
            value={filter}
          ></Input>
        </Flex>
      </Flex>
      {tempArray && tempArray.length > 0 ? (
        <PostBar
          length={
            tempArray.length > 4 ? tempArray.length - 4 : tempArray.length
          }
          startIndex={startIndex}
          setstartIndex={setstartIndex}
          itemsPerPage={4}
        >
          {tempArray.slice(startIndex, startIndex + 4).map((post, index) => {
            return (
              <PostView
                id={post.id}
                title={post.title}
                body={post.body}
                key={index}
              ></PostView>
              //31 65
            );
          })}
        </PostBar>
      ) : (
        <Text>No matches found</Text>
      )}
    </Layout>
  );
};
export default PostsPage;
