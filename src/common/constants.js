import React from "react";
import MyInvoicePage from "../Pages/MyInvoicePage";
import ToDoPage from "../Pages/ToDoPage";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import PostsPage from "../Pages/PostsPage";
const pages = [
  {
    iconName: "Home",
    toDisplay: "",
    path: "/",
    toRender: <LoginPage />,
  },
  {
    iconName: "Posts",
    toDisplay: "Posts",
    path: "/Posts",
    toRender: <PostsPage />,
  },
  {
    iconName: "ToDo",
    toDisplay: "ToDo",
    path: "/ToDo",
    toRender: <ToDoPage />,
  },
  {
    iconName: "myInvoices",
    toDisplay: "My Invoices",
    path: "/myInvoices",
    toRender: <MyInvoicePage />,
  },
  {
    iconName: "Error",
    toDisplay: "Error",
    path: "/*",
    toRender: <ErrorPage />,
  },
];
export default pages;
