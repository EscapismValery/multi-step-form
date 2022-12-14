import React from 'react';
import Step from './Step';

const SideBar = ({ active }) => {

	return (
		<div className="sidebar">
			<div className="sidebar__steps">
				<Step stepId={1} title={"Your info"} active={active === 1 ? true : false} />
				<Step stepId={2} title={"Select plan"} active={active === 2 ? true : false} />
				<Step stepId={3} title={"Add-ons"} active={active === 3 ? true : false} />
				<Step stepId={4} title={"Summary"} active={active === 4 ? true : false} />
			</div>
		</div>
	)
}

export default SideBar;