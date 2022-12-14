import React from 'react';

const Step = ({ stepId, title, active }) => {
	return (
		<div className={active && "step active" || "step"}>
			<div className="step__number">
				{stepId}
			</div>
			<div className="step__text">
				<div className="step__id">
					Step {stepId}
				</div>
				<div className="step__title">
					{title}
				</div>
			</div>
		</div>
	)
}

export default Step;