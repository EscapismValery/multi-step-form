import React from 'react';
import SideBar from './SideBar';

const CardForm = ({ children, active }) => {
	return (
		<div className="cardform">
			<SideBar active={active} />
			{children}
		</div>
	)
}

export default CardForm;