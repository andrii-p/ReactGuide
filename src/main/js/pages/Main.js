import React from "react";

import Navigation from "../components/Navigation";

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}
			
	render() {
		const { location } = this.props;
		const containerStyle = {
	      marginTop: "60px"
	    };
		
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