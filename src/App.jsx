import "./App.css";
import Properties from "./pages/properties";
import Mls from "./pages/Mls";
import News from "./pages/news";
import Home from "./pages/Home";
import {Contact }from "./pages/contact";
import SingleNews from "./pages/blogDetail";
import NewsDetails from'./pages/chatgpt';
import LoginForm from "./pages/login";
import Register from "./pages/register";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path: "/",
    element: <Properties />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/mls",
    element: <Mls />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/readmore",
    element: <SingleNews/>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <LoginForm />
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
