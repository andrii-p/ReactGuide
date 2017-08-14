import React from "react";

import Navigation from "../components/Navigation";

export default class Layout extends React.Component {
	
	constructor(props) {
		super(props);
	}
			
	render() {
		const { location } = this.props;
		const containerStyle = {
	      marginTop: "60px"
	    };
		
		console.log("this.props:");
		console.log(this.props);
		
		const {params} = this.props;
		
		console.log("{params}:");
		console.log(params);
		
		
		return (
			<div>
				<Navigation location={location} />
				
				<div class="container" style={containerStyle}>
					{this.props.children}
				</div>
				
			</div>
		);		
	}
}