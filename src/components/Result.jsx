import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';

const Result = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/finish");
	}
	return (
		<CardForm active={4}>
			<MyForm>
				<h2>Finishing up</h2>
				<p>Double-check everything looks OK before confirming.</p>
				<NextButton classes="confirm-button" onClick={NextStep}>Next Step</NextButton>
			</MyForm>
		</CardForm>
	)
}

export default Result;