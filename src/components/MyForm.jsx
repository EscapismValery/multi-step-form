import React from 'react';

const MyForm = ({ children, title, description, ...props }) => {
	return (
		<form noValidate className="form" {...props}>
			<div className='form__top'>
				<h2 className='form__title'>{title}</h2>
				<p className='form__text'>{description}</p>
			</div>
			{children}
		</form>
	)
}

export default MyForm;