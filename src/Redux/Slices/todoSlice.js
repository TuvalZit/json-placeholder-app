import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//======================================================================
//Get todo of a  users from json place holder
export const getToDos = createAsyncThunk(
  "todo/getToDos",
  async (userID, { dispatch, rejectWithValue }) => {
    console.log("Fetching todo");
    try {
      const url = "https://jsonplaceholder.typicode.com/todos?userId=";
      const response = fetch(url + userID).then((response) => response.json());
      console.log("Redux_todosArray_______");
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
//======================================================================
//Get todo of a  users from json place holder
export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (userID, data, { dispatch, rejectWithValue }) => {
    console.log("Fetching todo");
    try {
      const url = "https://jsonplaceholder.typicode.com/todos?userId=";
      const response = fetch(url + userID, {
        method: "PUT",
        body: JSON.stringify({
          userId: userID,
          id: data.id,
          title: data.title,
          completed: !data.completed,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
      console.log("Redux_todosArray_______");
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
//======================================================================
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todosArray: null,
    singleTodo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setTodosArray: (state, action) => {
      state.todosArray = action.payload;
      localStorage.setItem("todosArray", action.payload);
    },
  },
  extraReducers: {
    //====================================getToDo
    [getToDos.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getToDos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todosArray = action.payload;
    },
    [getToDos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //====================================
    //====================================getUpdatedToDo
    [updateTodo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleTodo = action.payload;
    },
    [updateTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //====================================
  },
});
export const { setTodosArray } = todoSlice.actions;
export default todoSlice.reducer;
