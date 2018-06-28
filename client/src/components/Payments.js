import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Payments extends Component {
	constructor(props){
		super(props)
		this.handleToken1 = this.handleToken1.bind(this);
	}

	handleToken1(){
		this.props.handleToken("token");
	}
	render(){
		return (
			<button className="btn" onClick={this.handleToken1}>
			ADD CREDITS
			</button>
			)
	}
};


export default connect(null, actions)(Payments);