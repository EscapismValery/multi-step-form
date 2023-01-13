import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step3 = () => {
	const addonsList = [
		{
			id: 1,
			title: "Online service",
			description: "Access to multiplayer games",
			price: 1,
		},
		{
			id: 2,
			title: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: 2,
		},
		{
			id: 3,
			title: "Customizable Profile",
			description: "Custom theme on your profile",
			price: 2,
		},
	];

	const navigate = useNavigate();

	const { data, setValues } = useData();

	const {
		register,
		handleSubmit,
	} = useForm({
		defaultValues: { addons: data.addons },
	});

	const NextStep = (data) => {
		navigate("/result");
		setValues(data);
	}
	const PrevStep = () => {
		navigate("/step2");
	}
	return (
		<CardForm active={3}>
			<div className="cardform__container">
				<MyForm
					onSubmit={handleSubmit(NextStep)}
					title={"Pick add-ons"}
					description={"Add-ons help enhance your gaming experience."}
				>
					<div className='form__container'>
						<div className="form__addons addons-form">
							<label className='addons-form__label'>
								<input
									{...register('addons')}
									type="checkbox"
									name='addons'
									className='addons-form__check'
									defaultValue={addonsList[0].title + "," + addonsList[0].price * (data.periodTime === "yr" ? 10 : 1)}
								/>
								<div className="addons-form__item">
									<div className='addons-form__item-container'>
										<span className='addons-form__mark'></span>
										<div className="addons-form__text">
											<h4 className='addons-form__title'>{addonsList[0].title}</h4>
											<p className="addons-form__desc">{addonsList[0].description}</p>
										</div>
									</div>
									<p className="addons-form__price">+${addonsList[0].price}{data.periodTime === "yr" ? "0" : ""}/{data.periodTime}</p>
								</div>
							</label>
							<label className='addons-form__label'>
								<input
									{...register('addons')}
									type="checkbox"
									name='addons'
									className='addons-form__check'
									defaultValue={addonsList[1].title + "," + addonsList[1].price * (data.periodTime === "yr" ? 10 : 1)}
								/>
								<div className="addons-form__item">
									<div className='addons-form__item-container'>
										<span className='addons-form__mark'></span>
										<div className="addons-form__text">
											<h4 className='addons-form__title'>{addonsList[1].title}</h4>
											<p className="addons-form__desc">{addonsList[1].description}</p>
										</div>
									</div>
									<p className="addons-form__price">+${addonsList[1].price}{data.periodTime === "yr" ? "0" : ""}/{data.periodTime}</p>
								</div>
							</label>
							<label className='addons-form__label'>
								<input
									{...register('addons')}
									type="checkbox"
									name='addons'
									className='addons-form__check'
									defaultValue={addonsList[2].title + "," + addonsList[2].price * (data.periodTime === "yr" ? 10 : 1)}
								/>
								<div className="addons-form__item">
									<div className='addons-form__item-container'>
										<span className='addons-form__mark'></span>
										<div className="addons-form__text">
											<h4 className='addons-form__title'>{addonsList[2].title}</h4>
											<p className="addons-form__desc">{addonsList[2].description}</p>
										</div>
									</div>
									<p className="addons-form__price">+${addonsList[2].price}{data.periodTime === "yr" ? "0" : ""}/{data.periodTime}</p>
								</div>
							</label>
						</div>
					</div>
					<div className="buttons">
						<PrevButton onClick={PrevStep}>Go Back</PrevButton>
						<NextButton type="submit" classes="next-button">Next Step</NextButton>
					</div>
				</MyForm>
			</div>
		</CardForm>
	)
}

export default Step3;