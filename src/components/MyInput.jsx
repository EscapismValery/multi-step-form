import React from 'react';

const MyInput = ({ ...props }) => {
	return (
		<input {...props} className="form__input" />
	)
}

export default MyInput;