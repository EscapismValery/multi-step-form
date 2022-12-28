import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import MyLabel from './MyLabel';
import NextButton from './NextButton';


const Step1 = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/step2");
	}
	return (
		<CardForm active={1}>
			<div className="cardform__container">
				<MyForm
					title={"Personal info"}
					description={"Please provide your name, email address, and phone number."}
				>
					<div className='form__content'>
						<MyLabel title={"Name"} placeholder={"e.g. Stephen King"} name={"name"} type={"text"} />
						<MyLabel title={"Email Address"} placeholder={"e.g. stephenking@lorem.com"} name={"email"} type={"text"} />
						<MyLabel title={"Phone Number"} placeholder={"e.g. +1 234 567 890"} name={"phone"} type={"text"} />
					</div>
				</MyForm>
				<div className="buttons">
					<button disabled style={{ opacity: "0" }}></button>
					<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
				</div>
			</div>
		</CardForm>
	)
}

export default Step1;