import React from 'react';

const PrevButton = ({ children, step, ...props }) => {
	return (
		<button {...props} className={"prev-button"}>
			{children}
		</button>
	)
}

export default PrevButton;