import React from 'react';



export default ({ input, label, meta:{error, touched} }) =>{
	return (
		<div>
			<label>{label}</label>
			 <input {...input} onBlur={input.onBlur} onChange={input.onChange} />
			 {touched && error}
		</div>
		)
};