import React from 'react';

const MyForm = ({ children, ...props }) => {
	return (
		<div className="form">
			<h2 className='form__title'>{props.title}</h2>
			<p className='form__text'>{props.description}</p>
			{children}
		</div>
	)
}

export default MyForm;