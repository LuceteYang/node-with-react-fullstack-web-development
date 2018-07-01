import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchSurveys} from '../../actions';

class SurveyList extends Component {
	componentDidMount(){
		this.props.fetchSurveys();
	}
	renderSurveys(){
		return this.props.surveys.map(survey=>{
			return (
				<div className="card darken-1" >
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>
							{survey.body}
						</p>
						<p className="right">
							Sent On: {new Date().toLocaleDateString()}
						</p>
					</div>
				<div className="card-action">
					<a> Yes: 5</a>
					<a> No: 0</a>
				</div>
				</div>
				)
		})
	}
	render(){
		return (
			<div>
				 <div class>
					 <div>
					 	{this.renderSurveys()}
					 </div>
				 </div>
			</div>
			)
	}
};

function mapStateToProps({surveys}){
	return { surveys};
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);