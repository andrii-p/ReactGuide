import React from "react";
import { IndexLink, Link } from "react-router";

const root = '/api'

export default class EmployeeList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {employees: [], page: 1, pageSize: 2, links: {}};
		this.loadFromServer = this.loadFromServer.bind(this);
	}
	
	componentDidMount() {
		this.loadFromServer();
	}
	
	loadFromServer() {
		var url = root + '/employees';
		
		fetch(url)
		  .then((response) => response.json())
		  .then((responseJson) => {
			  
			  console.log('Response fetch = ' + responseJson);
			  
			  this.setState({
				 employees: responseJson._embedded.employees
			  });
		  })
		  .catch((error) => {
			 console.log(error); 
		  });
	}
	
	render() {
		var employees = this.state.employees.map(employee =>
			<EmployeeRow key={employee._links.self.href} employee={employee}/>
		);
		
		return (
			<div>
				<h1>Employee List</h1>
				<table>
					<tbody>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Description</th>
							<th>Details</th>
						</tr>
						{employees}
					</tbody>
				</table>
			</div>
		);
	}
}

export class EmployeeRow extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		var selfLink = this.props.employee._links.self.href;
		var employeeId = /\/\d+$/gi;
		var employeeUrl = "employees/" + selfLink.match(employeeId);
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
				<td><Link className="btn-success" to={employeeUrl}>Go to details</Link></td>
			</tr>
		)
	}
}