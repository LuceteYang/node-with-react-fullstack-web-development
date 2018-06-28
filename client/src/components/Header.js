import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContents(){
		switch(this.props.auth){
			case null:
				return;
			case false:
				return (
					<li><a href="/auth/google">Login With Google</a></li>
					);
			default:
				return [
					<li key="1"><Payments /></li>,
					<li key="3">Credits : {this.props.auth.credits}</li>,
					<li key="2"><a href="/api/logout">Logout</a></li>
				];
					
		}
	}
	render(){
		return (
			<nav>
			<div className="nav-wrapper">
				<Link 
				to={this.props.user ? '/surveys': '/'}
				 className="left brand-logo"
				 >
					 LuceteYang
				</Link>
				<ul className="right">
					{this.renderContents()}
				</ul>
			</div>
			</nav>
			)
	}
};

function mapStateToProps({auth}){
	return {auth}
}

export default connect(mapStateToProps)(Header);