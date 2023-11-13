import "./Navbar.css";
import logo from "./../img/airbnblogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-first">
        <div className="logo">
          <img className="img" src={logo} alt="logo" />
        </div>
        <div className="searchbar">Searchbar</div>
        <div className="profile">Profile</div>
      </div>
      <div className="navbar-second">Second</div>

    </div>
  )
};

export default Navbar;