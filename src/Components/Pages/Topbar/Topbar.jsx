import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./topbar.css";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import profile from "../../../images/icons/profile-1.jpg";
import { useMsal } from "@azure/msal-react";
import bell from "../../../images/icons/bell-02.svg";
import light from "../../../images/icons/light.png";

import srm_white_logo from "../../../images/Logo/logo_srm_white.png";
import srm_dark_logo from "../../../images/Logo/srm_logo_dark.png";

import nexus from "../../../images/Logo/NexusLabs-Logo.png";
import SRM from "../../../images/Logo/SRM-White.svg";
import brand from "../../../images/Logo/kabi-white.svg";
import { ThemeContext } from "../../../ThemContent";
import Avatar from '@mui/material/Avatar';

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation()
  console.log(window.location.origin)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    // instance.logoutRedirect({
    //   postLogoutRedirectUri: window.location.origin, // 🔁 Back to login page or home
    // });
    navigate('/')
  };

  console.log(accounts);
  return (
    <nav className="header-main" role="navigation">
      <div className="header">
        <div className="header-left">
          <h6 className="nav-title">
            {/* <img src={nexus}/> */}
              <img src={SRM} className="sidebar-logo" />
              <div className="divider"></div>
              <img src={brand} className="sidebar-logo" />
          </h6>
        </div>
        <div className="head-middle">
            <h5>SRM Insights360</h5>
        </div>
        <div className="header-right">
          {/* <div className="header-icon">
        <img src={messageIcon} alt="Message" />
      </div> */}
          {/* <div className="header-icon">
        <img src={bellIcon} alt="Notification" />
      </div> */}

          <span></span>
          <div className="header-profile">
            <div className="d-flex align-items-center gap-2">
              {/* <img
                src={light}
                className="header-notifi"
                onClick={toggleTheme}
                title={theme}
              />
              <img src={bell} className="header-notifi" /> */}
              <div className="profile-img-wrapper">
                <Avatar style={{backgroundColor:'#ADC6FF',color:'#344054',fontWeight:550}}>{accounts[0]?.name?.charAt(0)?.toUpperCase()}</Avatar>
                {/* <img
                src={profile}
                className="profile-img"
                alt="Profile"
                title={`${accounts[0]?.name}`}
              /> */}
              {/* <img src={dropdown} alt="Dropdown" /> */}
               <ul className="header-profile-dropdown">
              <Link to={"/profile"}>
                <li>My Profile</li>
              </Link>
              {/* <li>Manage Address</li> */}
              <li className="logout" onClick={() => handleLogout()}>
                Logout
              </li>
            </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      <div className="header-child"></div>
    </nav>
  );
}

export default Topbar;
