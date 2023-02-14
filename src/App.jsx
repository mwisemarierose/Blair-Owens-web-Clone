import "./App.css";
import Properties from "./pages/properties";
import Mls from "./pages/Mls";
import News from "./pages/news";
import {Contact }from "./pages/contact";
import SingleNews from "./pages/blogDetail";
import LoginForm from "./pages/login";
import ViewPage from "./pages/viewPage";
import Admin from './pages/Admin'
import AddNew from "./Components/addNew/addNew";
import dashboard from "./Components/dashboard/dashboard";
import { Route,Routes } from "react-router-dom";
import { Dashboard } from "@material-ui/icons";




function App() {
return(
  <Routes>
      <Route path="/dashboard" element={<Admin/>}>
      <Route path="/dashboard/dash" element={<Dashboard/>}/>
      <Route path="/dashboard/addNew" element={<AddNew/>}/>
      </Route>

      <Route path="/" element={<Properties />} />
      <Route path="/news" element={<News />} />
      <Route path="/mls" element={<Mls />} />
      <Route path="/view" element={<ViewPage />} />
      <Route path="/readmore" element={<SingleNews />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<LoginForm/>} />
      </Routes>
);


}

// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <Properties />,
//   },
//   // {
//   //   path: "/dashboard",
//   //   element: <Admin />,
//   // },
//   {
//     path: "/news",
//     element: <News />,
//   },
//   {
//     path: "/mls",
//     element: <Mls />,
//   },
//   {
//     path: "/view",
//     element: <ViewPage />,
//   },

//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/readmore",
//     element: <SingleNews/>
//   },
  
//   {
//     path: "/login",
//     element: <LoginForm open={open} onClick={()=> setOpen(true)}/>
//   },
// ]);

// function App() {
//   return <RouterProvider router={router}></RouterProvider>;
//   return <RouterProvider routes={routes}></RouterProvider>;

// }

export default App;
