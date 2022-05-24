import { Flex, Button, Text } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, setTodosArray } from "../../Redux/Slices/todoSlice.js";
import { useState, useEffect } from "react";
const ToDoView = ({ userID, data, arr, ...props }) => {
  const { singleTodo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [tempTodo, settempTodo] = useState({});
  const finishTodo = () => {
    dispatch(updateTodo(userID, data));
    console.log("click finished");
  };
  useEffect(() => {
    if (singleTodo) {
      console.log("effect");
      const updatedTodoArr = arr.map((todo, index) => {
        if (todo.id === tempTodo.id) return tempTodo;
      });
      dispatch(setTodosArray(updatedTodoArr));
    }
  }, [singleTodo]);
  return (
    <Flex
      sx={{
        width: "20rem",
        height: "10rem",
        py: "0.5rem",
        px: "1rem",
        border: "solid",
        borderRadius: "2rem",
        borderColor: data.completed ? "red" : "lightGreen",
        flexDirection: "column",
      }}
    >
      <Flex id="header" sx={{ flexDirection: "column" }}>
        <Flex id="todoID">
          <Text>#{data.id}</Text>
        </Flex>
      </Flex>
      <Flex
        id="body"
        sx={{ padding: "1rem", justifyContent: "center", minHeight: "4rem" }}
      >
        <Text sx={{ textAlign: "center" }}>{data.title}</Text>
      </Flex>
      <Flex id="Footer" sx={{ justifyContent: "center" }}>
        <Flex sx={{ justifyContent: "space-around", width: "100%" }}>
          <ActionButton id="Delete" action="delete" />
          {data.completed && (
            <ActionButton id="Delete" action="finish" onClick={finishTodo} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
const ActionButton = ({ action, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "5rem",
        height: "3rem",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: action === "finish" ? "green" : "red",
        borderRadius: "1rem",
      }}
    >
      {action}
    </Button>
  );
};
export default ToDoView;
