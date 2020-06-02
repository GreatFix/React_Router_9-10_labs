import React from "react";
import { Component } from "react";
import "./styles.css";
import Header from "./Header";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.SetLogPass = this.SetLogPass.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onChangeLogin(event) {
    this.setState({ login: event.target.value });
  }

  SetLogPass() {
    localStorage.setItem("login", JSON.stringify(this.state.login));
    localStorage.setItem("password", JSON.stringify(this.state.password));
    this.props.history.push("/profile");
  }

  render() {
    return (
      <div>
        <Header />
        <form
          className="column border border-dark p-5"
          onSubmit={this.onSubmit}
        >
          <h2 className="text-center">Sign-in</h2>
          <div className="form-group">
            <label for="formGroupExampleInput">Login</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Login input"
              value={this.state.login}
              onChange={this.onChangeLogin}
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Password</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Password input"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="button" label="Ввод" onClick={this.SetLogPass}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default SignInPage;
