import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';

const Step2 = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/step3");
	}
	return (
		<CardForm active={2}>
			<MyForm>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
				<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
			</MyForm>
		</CardForm>
	)
}

export default Step2;