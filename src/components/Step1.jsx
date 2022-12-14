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
			<MyForm>
				<h2 className='form__title'>Personal info</h2>
				<p className='form__text'>Please provide your name, email address, and phone number.</p>
				<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
			</MyForm>
		</CardForm>
	)
}

export default Step1;