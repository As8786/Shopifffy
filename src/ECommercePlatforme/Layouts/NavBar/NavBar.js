import React from "react";
import Select from "@atlaskit/select";
import TextField from "@atlaskit/field-text";

import "./navbar.css";

class NavBarSite extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="logo-container">
          <img src="https://ld-prestashop.template-help.com/prestashop_64477/img/new-store-logo-1497949551.jpg" />
        </div>
        <div className="search-items-container">
          <Select
            className="navbar-search-select"
            classNamePrefix="react-select"
            options={[
              { label: "LapTop", value: "laptop" },
              { label: "PC", value: "pc" },
              { label: "Smartphone", value: "smartphone" },
              { label: "Smart Watch", value: "smartWtach" },
              { label: "TV", value: "tv" },
              { label: "Console", value: "console" },
              { label: "Video Game", value: "videoGame" },
              { label: "Accessorie", value: "accessorie" }
            ]}
            placeholder="Category"
          />

          <input
            style={{ width: "500px" }}
            className="text-field-search-navbar"
            isLabelHidden={true}
            placeholder="search"
          />
          <button>
            <i class="fas fa-search" />
          </button>
        </div>
        <div className="card-user-profile-container">
          <i class="far fa-heart" />
          <i class="far fa-user" />
          <i class="fas fa-cart-plus" />
        </div>
      </div>
    );
  }
}

export default NavBarSite;
