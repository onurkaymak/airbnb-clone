import "./Navbar.css";
import logo from "./../img/airbnblogo.png";
import sprite from "../img/SVG/sprite.svg";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-first">
        <div className="logo">
          <img className="img" src={logo} alt="logo" />

        </div>

        <div className="searchbar">
          <div className="searchbar-container">
            <div className="searchbar-item">Anywhere</div>

            <div className="searchbar-item">|</div>

            <div className="searchbar-item">Any week</div>

            <div className="searchbar-item">|</div>

            <div className="searchbar-item">Add guests</div>

            <div className="searchbar-icon">
              <svg className="searchbar-icon-actual">
                <use href={sprite + "#icon-search"}></use>
              </svg>
            </div>
          </div>
        </div>

        <div className="profile">Profile</div>
      </div>
      <div className="navbar-second">Second</div>

    </div>
  )
};

export default Navbar;