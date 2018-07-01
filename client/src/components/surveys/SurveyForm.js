import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

import formFields from './formFields';

class SurveyForm extends Component {
	renderFields(){
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field key={name} component={SurveyField} type="text" label={label} name={name} />
			);
		});
	}
	render(){
		return ( 
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
				 {this.renderFields()}
				 <Link to="/survey" className="red btn-flat white-text">
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
	// if(!values.title){
	// 	errors.title = "You must provide a title";
	// }
	// if(!values.subject){
	// 	errors.subject = "You must provide a subject";
	// }
	// if(!values.body){
	// 	errors.body = "You must provide a body";
	// }
	// if(!values.emails){
	// 	errors.emails = "You must provide a emails";
	// }
	errors.recipients = validateEmails(values.recipients || '');
	_.map(formFields, ({ name, noValueError }) => {
		console.log(values)
		if(!values[name]){
			errors[name] = noValueError
		}
	});

	return errors;
}


export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false	//이거 해주면 없어졌다다시 와도 살아있음
})(SurveyForm);