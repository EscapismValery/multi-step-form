import React from 'react';

const NextButton = ({ children, step, ...props }) => {
	return (
		<button {...props} className={"button " + props.classes}>
			{children}
		</button>
	)
}

export default NextButton;