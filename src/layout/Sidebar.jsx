import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem border-bottom">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem border-bottom">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem border-bottom">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem border-bottom">
              <Link to={"/"} className="py-0">
                <Storefront className="sidebarIcon" />
                Products
              </Link>
            </li>
            <li className="sidebarListItem border-bottom">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem border-bottom">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem border-bottom">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem border-bottom">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem border-bottom">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem border-bottom">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem border-bottom">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem border-bottom">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
