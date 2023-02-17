import "./App.css";
import Properties from "./pages/properties";
import Mls from "./pages/Mls";
import News from "./pages/news";
import { Contact } from "./pages/contact";
import SingleNews from "./pages/blogDetail";
import LoginForm from "./pages/login";
import ViewPage from "./pages/viewPage";
import Admin from "./pages/Admin";
import { AddNew } from "./Components/New/Add";
import { DashboardComponent } from './Components/Dashboard/Poster'
import { Edit } from "./Components/Estates/edit";
import { Listing } from "./Components/Estates/Listings";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Admin />}>
        <Route path="/dashboard/dash" element={<DashboardComponent />} />
        <Route path="/dashboard/addNew" element={<AddNew />} />
        <Route path="/dashboard/listing" element={<Listing />} />
        <Route path="/dashboard/edit" element={<Edit />} />
      <Route path="/dashboard/view" element={<ViewPage />} />



      </Route>

      <Route path="/" element={<Properties />} />
      <Route path="/news" element={<News />} />
      <Route path="/mls" element={<Mls />} />
      <Route path="/readmore" element={<SingleNews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
