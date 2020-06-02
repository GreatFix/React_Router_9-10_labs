import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import ProfilePage from "./ProfilePage";

import ProtectedRoute from "./ProtectedRoute";

export default function Layout() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route strict path="/sign-in" component={SignInPage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}
