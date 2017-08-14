import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Employee from "./pages/Employee";
import EmployeeList from "./pages/EmployeeList";
import Layout from "./pages/Layout";

const app = document.getElementById('react');

ReactDOM.render(
	<Router history={hashHistory}>
	  <Route path="/" component={Layout}>
	    <IndexRoute component={EmployeeList}></IndexRoute>
	    <Route path="employees/:employeeId" name="employee" component={Employee}></Route>
	  </Route>
	</Router>,
app);