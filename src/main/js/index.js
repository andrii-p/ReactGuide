'use strict';

const React = require('react');
const ReactDOM = require('react-dom')

const root = '/api'
	
class App extends React.Component {
	
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
		return (
			<div>
				<EmployeeList employees={this.state.employees}/>
			</div>
		);		
	}
}

class EmployeeList extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		var employees = this.props.employees.map(employee =>
			<EmployeeRow key={employee._links.self.href} employee={employee}/>
		);
		
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Description</th>
						</tr>
						{employees}
					</tbody>
				</table>
			</div>
		);
	}
}

class EmployeeRow extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)