import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Result = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/finish");
	}
	const PrevStep = () => {
		navigate("/step3");
	}
	return (
		<CardForm active={4}>
			<MyForm
				title={"Finishing up"}
				description={"Double-check everything looks OK before confirming."}
			>
				<div className="buttons">
					<PrevButton onClick={PrevStep}>Go Back</PrevButton>
					<NextButton classes="confirm-button" onClick={NextStep}>Confirm</NextButton>
				</div>
			</MyForm>
		</CardForm>
	)
}

export default Result;