import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import NewPost from "../pages/Admin/Posts/NewPost";
import HomeAdmin from "../pages/Admin/Home";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/admin" exact component={HomeAdmin} />
      <Route path="/admin/post/new" component={NewPost} />
      <Redirect to="/login" />
    </Router>
  );
};
