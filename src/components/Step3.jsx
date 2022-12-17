import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step3 = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/result");
	}
	const PrevStep = () => {
		navigate("/step2");
	}
	return (
		<CardForm active={3}>
			<MyForm>
				<h2>Pick add-ons</h2>
				<p>Add-ons help enhance your gaming experience.</p>
				<div className="buttons">
					<PrevButton onClick={PrevStep}>Go Back</PrevButton>
					<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
				</div>
			</MyForm>
		</CardForm>
	)
}

export default Step3;