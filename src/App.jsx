import "./App.css";
import Properties from "./pages/properties";
import Mls from "./pages/Mls";
import News from "./pages/news";
import Home from "./pages/Home";
import {Contact }from "./pages/contact";
import SingleNews from "./pages/blogDetail";
import NewsDetails from'./pages/chatgpt';
import LoginForm from "./pages/login";
import ReactDOM from "react-dom/client";
import ViewPage from "./pages/viewPage";
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
    path: "/view",
    element: <ViewPage />,
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
    path: "/login",
    element: <LoginForm open={open} onClick={()=> setOpen(true)}/>
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
