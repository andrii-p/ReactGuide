import React from "react";

export default class Employee extends React.Component {
	
	constructor(props){
		super(props);		
	}
	
	render() {
		return (
		  <div>
		  	<h2>Employee Details</h2>
		  	<div>Employee ID - {this.props.params.employeeId}</div>
		  </div>
		);
	}
}