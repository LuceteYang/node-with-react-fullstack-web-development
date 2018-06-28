import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
	render(){
		return (
			<div>
				 Dashboard
				 <div className="fixed-action-btn">
				 	<a className="btn-floating btn-large red">
				 		<i className="material-icons">add</i>
			 		</a>
		 		</div>
			</div>
			)
	}
};


export default Dashboard;