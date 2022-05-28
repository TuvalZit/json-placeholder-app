import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Get All users from json place holder
export const getUsers = createAsyncThunk(
  "UserSlice/getUsers",
  async (args, { dispatch, rejectWithValue }) => {
    console.log("Fetching users");
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = fetch(url).then((response) => response.json());
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
//======================================================================
//Get post of a users from json place holder
export const getPosts = createAsyncThunk(
  "UserSlice/getPosts",
  async (userID, { dispatch, rejectWithValue }) => {
    console.log("Fetching posts");
    try {
      const url = "https://jsonplaceholder.typicode.com/posts?userId=";
      console.log(url + userID);
      const response = fetch(url + userID).then((response) => response.json());
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
//======================================================================
//Get todo of a  users from json place holder
export const getToDos = createAsyncThunk(
  "UserSlice/getToDos",
  async (userID, { dispatch, rejectWithValue }) => {
    console.log("Fetching todo");
    try {
      const url = "https://jsonplaceholder.typicode.com/todos?userId=";
      const response = fetch(url + userID).then((response) => response.json());
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
//======================================================================
const UserSlice = createSlice({
  name: "user",
  initialState: {
    userArray: null,
    currentUserName:
      localStorage.getItem("CurrentUserName") === undefined
        ? ""
        : localStorage.getItem("CurrentUserName"),
    loading: false,
    error: null,
    postsArray: null,
    todosArray: null,
    todosData: {
      loading: false,
      error: null,
      isSuccess: false,
    },
    userID: localStorage.getItem("userID"),
  },
  reducers: {
    setUserID: (state, action) => {
      state.userID = action.payload;
      localStorage.setItem("userID", action.payload);
    },
    setCurrentUserName: (state, action) => {
      state.userID = action.payload;
      localStorage.setItem("CurrentUserName", action.payload);
    },
  },
  extraReducers: {
    //====================================getUsers
    [getUsers.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.userArray = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //====================================getPosts
    [getPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.postsArray = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { setUserID, setCurrentUserName } = UserSlice.actions;
export default UserSlice.reducer;
