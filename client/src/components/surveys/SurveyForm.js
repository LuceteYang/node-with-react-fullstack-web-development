import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';

const FIELDS = [
{label:"Survey Title", type:"text", name:"title"},
{label:"Subject Line", type:"text", name:"subject"},
{label:"Email Body", type:"text", name:"body"},
{label:"Recipent List", type:"text", name:"emails"}
];

class SurveyForm extends Component {
	renderFields(){
		return _.map(FIELDS, ({ label, name }) => {
			return (
				<Field key={name} component={SurveyField} type="text" label={label} name={name} />
			);
		});
	}
	render(){
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values=> console.log(values))}>
				 {this.renderFields()}
				 <Link to="/surveys" className="red btn-flat white-text">
				 	Cancel
				 </Link>
				 <button type="submit" className="teal btn-flat right white-text">
				 Submit
				 <i className="material-icons right">done</i>
				 </button>
				 </form>
			</div>
			)
	}
};

function validate(values){
	const errors = {};
	if(!values.title){
		errors.title = "You must provide a title";
	}
	return errors;
}


export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);