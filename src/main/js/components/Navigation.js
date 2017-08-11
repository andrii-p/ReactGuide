import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navigation extends React.Component{
	
	constructor(){
		super();
		this.state = {
		  collapsed: true
		};
	}
	
	toggleCollapse(){
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}
	
	render(){
		const { location } = this.props;
	    const { collapsed } = this.state;
	    const featuredClass = location.pathname === "/" ? "active" : "";
	    const employeeClass = location.pathname.match(/^\/employee/) ? "active" : "";
	    const navClass = collapsed ? "collapse" : "";
	    
		return (
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	        <div class="container">
	          <div class="navbar-header">
	            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
	              <span class="sr-only">Toggle navigation</span>
	              <span class="icon-bar"></span>
	            </button>
	          </div>
	          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
	            <ul class="nav navbar-nav">
	              <li class={featuredClass}>
	                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Employee List</IndexLink>
	              </li>
	              <li class={employeeClass}>
	                <Link to="employee" onClick={this.toggleCollapse.bind(this)}>Employee</Link>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </nav>
		);
	}
}