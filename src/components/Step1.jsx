import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import MyInput from './MyInput';
import MyLabel from './MyLabel';
import NextButton from './NextButton';
import * as yup from 'yup';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useData } from '../DataContext';

const schema = yup.object().shape({
	formName: yup
		.string()
		.matches(/^([^0-9]*)$/, "Name should not contain numbers")
		.required("This field is required"),
	email: yup
		.string()
		.email("Email should have correct format")
		.required("This field is required"),
	phone: yup
		.string()
		.matches(/^([+]?[0-9\s-/(/)]{5,25})*$/, "Phone number should have correct format")
		.required("This field is required"),
})

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value)
	if (!phoneNumber) {
		return value
	}
	return (
		phoneNumber.formatInternational()
	)
}

const Step1 = () => {
	const navigate = useNavigate();
	const { data, setValues } = useData();
	const {
		register,
		handleSubmit,
		formState: {
			errors,
		}
	} = useForm({
		defaultValues: { formName: data.formName, email: data.email, phone: data.phone },
		resolver: yupResolver(schema),
		mode: "onBlur",
	});

	const NextStep = (data) => {
		navigate("/step2");
		setValues(data);
	}

	return (
		<CardForm active={1}>
			<div className="cardform__container">
				<MyForm
					onSubmit={handleSubmit(NextStep)}
					title={"Personal info"}
					description={"Please provide your name, email address, and phone number."}
				>
					<div className='form__container'>
						<div className='form__content'>
							<MyLabel
								title={"Name"}
								error={errors?.formName?.message}
							>
								<MyInput
									{...register('formName')}
									name={"formName"}
									id={"formName"}
									type={"text"}
									placeholder={"e.g. Stephen King"}
									error={!errors.formName}
									className={errors?.formName ? "form__input form__input-error" : "form__input"}
								/>
							</MyLabel>
							<MyLabel
								title={"Email Address"}
								error={errors?.email?.message}
							>
								<MyInput
									{...register('email')}
									name={"email"}
									id={"email"}
									type={"email"}
									placeholder={"e.g. stephenking@lorem.com"}
									error={!!errors.email}
									className={errors?.email ? "form__input form__input-error" : "form__input"}
								/>
							</MyLabel>
							<MyLabel
								title={"Phone Number"}
								error={errors?.phone?.message}
							>
								<MyInput
									{...register('phone')}
									name={"phone"}
									id={"phone"}
									type={"tel"}
									placeholder={"e.g. +1 234 567 8900"}
									maxLength={16}
									error={!!errors.phone}
									className={errors?.phone ? "form__input form__input-error" : "form__input"}
									onChange={(event) => {
										event.target.value = normalizePhoneNumber(event.target.value);
									}}
								/>
							</MyLabel>
						</div>
					</div>
					<div className="buttons">
						<button disabled style={{ opacity: "0" }}></button>
						<NextButton type={"submit"} classes="next-button">Next Step</NextButton>
					</div>
				</MyForm>
			</div>
		</CardForm>
	)
}

export default Step1;