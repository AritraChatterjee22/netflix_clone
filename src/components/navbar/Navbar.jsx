import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () =>{
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return(
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo"/>
        <Link to="/" className="link">
          <span>Homepage</span>
        </Link>
        <Link to="/series" className="link">
          <span>Series</span>
        </Link>
        <Link to="/movies" className="link">
          <span>Movies</span>
        </Link>
        <span>New and Popular</span>
        <span>My list</span>
        </div>
        <div className="right">
          <Search className="icon"/> 
          <span>KID</span>
          <Notifications className="icon"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar
