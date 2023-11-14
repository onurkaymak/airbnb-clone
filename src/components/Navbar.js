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

        <div className="profile">
          <div className="profile-item">Airbnb your home</div>

          <div className="profile-icon">
            <svg className="profile-icon-actual">
              <use href={sprite + "#icon-sphere"}></use>
            </svg>
          </div>

          <div className="profile-item">
            <svg className="profile-icon-actual">
              <use href={sprite + "#icon-menu"}></use>
            </svg>

            <svg className="profile-icon-actual">
              <use href={sprite + "#icon-user"}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="navbar-second">
        <div className="navbar-icons-list">List of Icons</div>


        <div>Filters</div>

        <div>Display total before taxes</div>
      </div>
    </div>
  )
};

export default Navbar;