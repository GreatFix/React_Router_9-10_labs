import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.RemoveAuth = this.RemoveAuth.bind(this);
  }

  RemoveAuth() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <nav className="nav nav-pills nav-fill ">
        <Link className="nav-item border" to="/">
          Main
        </Link>
        <Link className="nav-item border" to="/profile">
          Profile
        </Link>
        {!localStorage.getItem("login") && (
          <Link className="nav-item border" to="/sign-in">
            Sign-in
          </Link>
        )}   
        {localStorage.getItem("login") && (
          <button
            className="nav-item bg-danger text-white"
            type="button"
            label="Ввод"
            onClick={this.RemoveAuth}
          >
            Log out
          </button>
        )}
      </nav>
    );
  }
}
export default Header;
