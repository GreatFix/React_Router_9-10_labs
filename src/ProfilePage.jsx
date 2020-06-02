import React from "react";
import { Component } from "react";
import "./styles.css";
import Header from "./Header";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: JSON.parse(localStorage.getItem("login")),
      password: JSON.parse(localStorage.getItem("password"))
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="column border border-dark p-2">
          <h2 className="text-center">Profile</h2>
          <div className="border p-2">
            <div className="d-flex justify-content-between ">
              <h3>Login </h3>
              <h4 className="border border-success p-2">{this.state.login}</h4>
            </div>
            <div className="d-flex justify-content-between">
              <h3>Password </h3>
              <h4 className="border border-success p-2">
                {this.state.password}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfilePage;
