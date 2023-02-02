import "./App.css";
import Properties from "./pages/properties";
import Mls from "./pages/Mls";
import News from "./pages/news";
import Home from "./pages/Home";
import {Contact }from "./pages/contact";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
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
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
