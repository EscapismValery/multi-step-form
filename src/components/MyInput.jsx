import React, { forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
	return (
		<input
			{...props}
			ref={ref}
		/>
	)
})

export default MyInput;