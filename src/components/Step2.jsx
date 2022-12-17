import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step2 = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/step3");
	}
	const PrevStep = () => {
		navigate("/");
	}
	return (
		<CardForm active={2}>
			<MyForm>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
				<div className="buttons">
					<PrevButton onClick={PrevStep}>Go Back</PrevButton>
					<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
				</div>
			</MyForm>
		</CardForm>
	)
}

export default Step2;