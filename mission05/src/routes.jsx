import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/Layout";
import About from "@pages/About";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import TodoList from "@pages/TodoList";
import TodoDetail from "@pages/TodoDetail";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "list", element: <TodoList /> },
      { path: "list/:_id", element: <TodoDetail /> },
      { path: "add", element: <TodoAdd /> },
      { path: "list/:_id/edit", element: <TodoEdit /> },
    ],
  },
]);

export default router;
