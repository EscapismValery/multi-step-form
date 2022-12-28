import React from 'react';
import MyInput from './MyInput';

const MyLabel = ({ title, placeholder, name, type }) => {
	return (
		<label htmlFor={name} className="form__label">
			{title}
			<MyInput type={type} name={name} id={name} placeholder={placeholder} />
		</label>
	)
}

export default MyLabel;