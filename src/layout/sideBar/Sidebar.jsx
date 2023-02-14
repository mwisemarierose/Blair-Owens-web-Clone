import "./sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FiTrendingUp,
  FiCalendar,
  FiFilePlus,
  FiList,
  FiMail,
  FiMessageSquare,
  FiPlus,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Main</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <NavLink to={"/dashboard/dash"} className="py-0">

              <FiTrendingUp className="sidebarIcon" />
              Dashboard
              </NavLink>
            </li>
            <li className="sidebarListItem border-bottom">
              <FiUserPlus className="sidebarIcon" />
              Edit Profile
            </li>
            <li className="sidebarListItem border-bottom">
              <FiMail className="sidebarIcon" />
              Messages
              <span> 3 </span>
            </li>
            <li className="sidebarListItem border-bottom">
              <FiUsers className="sidebarIcon" />
              Agent List
            </li>
            <li className="sidebarListItem border-bottom">
              <FiPlus className="sidebarIcon" />
              Submenu
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Listings</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem border-bottom">
              <NavLink to={"/dashboard/listing"} className="py-0">
              <FiList className="sidebarIcon" />
              My listings
              </NavLink>
            </li>
            <li className="sidebarListItem border-bottom">
              {/* <Link to={"/"} className="py-0"> */}
              <FiCalendar className="sidebarIcon" />
              Bookings
              {/* </Link> */}
            </li>
            <li className="sidebarListItem border-bottom">
              <FiMessageSquare className="sidebarIcon" />
              Reviews
              <span>2</span>
            </li>
            
            <li className="sidebarListItem border-bottom">
            <NavLink to={"/dashboard/addNew"} className="py-0"> 
              <FiFilePlus className="sidebarIcon" />
              Add New
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
