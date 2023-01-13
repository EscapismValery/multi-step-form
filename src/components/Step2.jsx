import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step2 = () => {
	const navigate = useNavigate();

	const { data, setValues } = useData();

	const [periodPrice, setPeriodPrice] = useState(data.periodPrice ? data.periodPrice : [9, 12, 15]);
	const [numberPlan, setNumberPlan] = useState(0);
	const [periodTime, setPeriodTime] = useState(data.periodTime ? data.periodTime : "mo");

	var monthly = document.querySelector('.plan-period__radio-monthly');
	var yearly = document.querySelector('.plan-period__radio-yearly');
	var periodSwitch = document.querySelector('.plan-period__check');

	const {
		register,
		handleSubmit,
	} = useForm({
		defaultValues: {
			plan: data.plan,
			period: data.period,
			periodPrice: data.periodPrice,
			periodTime: data.periodTime,
			hasPeriod: data.hasPeriod,
			numberPlan: data.numberPlan,
		},
	});

	const NextStep = (data) => {
		navigate("/step3");
		if (data.periodPrice) {
			setValues({
				plan: data.plan,
			});
		} else {
			setValues({
				plan: data.plan,
				periodTime: periodTime,
				numberPlan: numberPlan,
			});
		}
	}

	const PrevStep = () => {
		navigate("/");
	}

	useEffect(() => {
		return setValues({ periodPrice: periodPrice, periodTime: periodTime })
	}, [periodPrice]);

	const ShowMonthly = () => {
		setPeriodPrice([9, 12, 15]);
		setPeriodTime("mo");
		yearly.checked = false;
		periodSwitch.checked = false;
		monthly.checked = true;
		setValues({
			...data,
			plan: data.plan,
			hasPeriod: false,
			numberPlan: data.numberPlan ? data.numberPlan : numberPlan,
			addons: [],
		});
	}

	const ShowYearly = () => {
		setPeriodPrice([90, 120, 150]);
		setPeriodTime("yr");
		monthly.checked = false;
		yearly.checked = true;
		periodSwitch.checked = true;
		setValues({
			...data,
			plan: data.plan,
			hasPeriod: true,
			numberPlan: data.numberPlan ? data.numberPlan : numberPlan,
			addons: [],
		});
	}

	const ShowCheckbox = () => {
		if (periodSwitch.checked) {
			monthly.checked = false;
			yearly.checked = true;
			setPeriodPrice([90, 120, 150]);
			setPeriodTime("yr");
			setValues({
				...data,
				plan: data.plan,
				hasPeriod: true,
				numberPlan: data.numberPlan ? data.numberPlan : numberPlan,
				addons: [],
			});
		} else {
			yearly.checked = false;
			monthly.checked = true;
			setPeriodPrice([9, 12, 15]);
			setPeriodTime("mo");
			setValues({
				...data,
				plan: data.plan,
				hasPeriod: false,
				numberPlan: data.numberPlan ? data.numberPlan : numberPlan,
				addons: [],
			});
		}
	}
	return (
		<CardForm active={2}>
			<div className="cardform__container">
				<MyForm
					onSubmit={handleSubmit(NextStep)}
					title={"Select your plan"}
					description={"You have the option of monthly or yearly billing."}
				>
					<div className='form__container'>
						<div className="form__plan plan-form">
							<label>
								<input
									{...register('plan')}
									type="radio"
									name='plan'
									className='plan-form__radio'
									defaultValue="Arcade"
									defaultChecked={data.plan ? false : true}
									onClick={() => {
										setValues({
											periodPrice: periodPrice,
											numberPlan: 0,
										});
										setNumberPlan(0);
									}}
								/>
								<div className="plan-form__item plan-form__item-arcade">
									<h4 className='plan-form__title'>Arcade</h4>
									<p className="plan-form__price">${periodPrice[0]}/{periodTime}</p>
									<p className={data.periodTime === "yr" ? 'plan-form__free active' : "plan-form__free"}>2 months free</p>
								</div>
							</label>
							<label>
								<input
									{...register('plan')}
									type="radio"
									name='plan'
									className='plan-form__radio'
									defaultValue="Advanced"
									onClick={() => {
										setValues({
											periodPrice: periodPrice,
											numberPlan: 1,
										});
										setNumberPlan(1);
									}}
								/>
								<div className="plan-form__item plan-form__item-advanced">
									<h4 className='plan-form__title'>Advanced</h4>
									<p className="plan-form__price">${periodPrice[1]}/{periodTime}</p>
									<p className={data.periodTime === "yr" ? 'plan-form__free active' : "plan-form__free"}>2 months free</p>
								</div>
							</label>
							<label>
								<input
									{...register('plan')}
									type="radio"
									name='plan'
									className='plan-form__radio'
									defaultValue="Pro"
									onClick={() => {
										setValues({
											periodPrice: periodPrice,
											numberPlan: 2,
										});
										setNumberPlan(2);
									}}
								/>
								<div className="plan-form__item plan-form__item-pro">
									<h4 className='plan-form__title'>Pro</h4>
									<p className="plan-form__price">${periodPrice[2]}/{periodTime}</p>
									<p className={data.periodTime === "yr" ? 'plan-form__free active' : "plan-form__free"}>2 months free</p>
								</div>
							</label>
						</div>
						<div className="form__plan-period plan-period">
							<label>
								<input
									type="radio"
									name="period"
									value="Monthly"
									className="plan-period__radio plan-period__radio-monthly"
									defaultChecked={!data.hasPeriod}
									onClick={ShowMonthly}
								/>
								<p className='plan-period__title plan-period-monthly'>Monthly</p>
							</label>
							<label>
								<input
									{...register('hasPeriod')}
									type="checkbox"
									name="hasPeriod"
									className="plan-period__check"
									defaultValue={data.hasPeriod}
									defaultChecked={data.hasPeriod}
									onClick={ShowCheckbox}
								/>
								<div className="plan-period__switch"></div>
							</label>
							<label>
								<input
									type="radio"
									name="period"
									value="Yearly"
									className="plan-period__radio plan-period__radio-yearly"
									defaultChecked={data.hasPeriod}
									onClick={ShowYearly}
								/>
								<p className='plan-period__title plan-period-yearly'>Yearly</p>
							</label>
						</div>
					</div>
					<div className="buttons">
						<PrevButton onClick={PrevStep}>Go Back</PrevButton>
						<NextButton type={"submit"} classes="next-button">Next Step</NextButton>
					</div>
				</MyForm>
			</div>
		</CardForm>
	)
}

export default Step2;