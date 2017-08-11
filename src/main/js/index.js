import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Employee from "./pages/Employee";
import EmployeeList from "./pages/EmployeeList";
import Main from "./pages/Main";

const app = document.getElementById('react');

ReactDOM.render(
	<Router history={hashHistory}>
	  <Route path="/" component={Main}>
	    <IndexRoute component={EmployeeList}></IndexRoute>
	    <Route path="employee" name="employee" component={Employee}></Route>
	  </Route>
	</Router>,
app);