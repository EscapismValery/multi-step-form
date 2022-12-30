import React from 'react';

const MyLabel = ({ children, ...props }) => {
	return (
		<label htmlFor={props.name} className="form__label">
			<div className="form__label-text">
				<p className='form__label-title'>{props.title}</p>
				<p className='form__label-error'>{props.error}</p>
			</div>
			{children}
		</label>
	)
}

export default MyLabel;