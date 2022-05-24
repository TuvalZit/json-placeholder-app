import React from "react";
import Layout from "../Components/Layout";
import { Button, Text, Flex } from "theme-ui";
import ToDoView from "../Components/ToDoGrid/ToDoView.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToDos } from "../Redux/Slices/todoSlice.js";
import { SelfcareIcon } from "../Components/Icon";
function ToDoPage() {
  const { userID } = useSelector((state) => state.user);
  const { todosArray } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const itemsPerPage = 5;
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  //======================================================================================
  useEffect(() => {
    dispatch(getToDos(userID));
    //   return () => {
    //     null;
  }, [dispatch, userID]);
  //======================================================================================
  return (
    <Layout>
      {todosArray && (
        <Flex
          sx={{
            height: "100%",
            width: "100%",
            border: "solid",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
          }}
        >
          {todosArray.slice(0, itemsToShow).map((todo, index) => (
            <ToDoView userID={userID} data={todo} arr={todosArray} />
          ))}
          {itemsToShow <= todosArray.length && (
            <Button
              onClick={() => {
                setItemsToShow(itemsToShow + itemsPerPage + 1);
                console.log("clicking");
              }}
              disabled={false}
              sx={{
                width: "10rem",
                height: "10rem",
                border: "solid black",
                backgroundColor:
                  itemsToShow >= todosArray.length ? "Red" : "#764abc",
              }}
            >
              More
            </Button>
          )}
        </Flex>
      )}
    </Layout>
  );
}

export default ToDoPage;
