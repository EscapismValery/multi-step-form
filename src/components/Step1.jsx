import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';


const Step1 = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/step2");
	}
	return (
		<CardForm active={1}>
			<MyForm
				title={"Personal info"}
				description={"Please provide your name, email address, and phone number."}
			>
				<div className="buttons">
					<button disabled style={{ opacity: "0" }}></button>
					<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
				</div>
			</MyForm>
		</CardForm>
	)
}

export default Step1;