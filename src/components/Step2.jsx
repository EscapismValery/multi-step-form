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

	const [periodPrice, setPeriodPrice] = useState([9, 12, 15]);
	const [numberPlan, setNumberPlan] = useState(0);
	const [periodTime, setPeriodTime] = useState("mo");

	const {
		register,
		handleSubmit,
		watch,
	} = useForm({
		defaultValues: {
			plan: data.plan,
			period: data.period,
			periodPrice: data.periodPrice,
			periodTime: data.periodTime,
			hasPeriod: data.hasPeriod
		},
	});

	const hasPeriod = watch("hasPeriod");

	const NextStep = (data) => {
		navigate("/step3");
		if (data.hasPeriod == false) {
			console.log('standart');

			setValues({
				plan: data.plan,
				hasPeriod: data.hasPeriod,
				period: "Monthly",
				periodPrice: periodPrice[numberPlan],
				periodTime: periodTime,
			});
		} else {
			setValues({
				plan: data.plan,
				hasPeriod: data.hasPeriod,
			});
		}
	}

	const PrevStep = () => {
		navigate("/");
	}

	useEffect(() => {
		return setValues({ periodPrice: periodPrice[numberPlan], periodTime: periodTime })
	}, [periodPrice]);

	const ShowMonthly = () => {
		const monthly = document.querySelector('.plan-period__radio-monthly');
		const freeMonth = document.querySelectorAll('.plan-form__free');
		const periodSwitch = document.querySelector('.plan-period__check');

		for (let i = 0; i < freeMonth.length; i++) {
			freeMonth[i].classList.remove('active');
		}
		setPeriodPrice([9, 12, 15]);
		setPeriodTime("mo");
		periodSwitch.checked = false;
		monthly.checked = true;
		setValues({
			...data,
			plan: data.plan,
			period: "Monthly",
			// periodPrice: periodPrice[numberPlan],
			// periodTime: periodTime,
			hasPeriod: false,
		});
	}

	const ShowYearly = () => {
		const yearly = document.querySelector('.plan-period__radio-yearly');
		const freeMonth = document.querySelectorAll('.plan-form__free');
		const periodSwitch = document.querySelector('.plan-period__check');

		for (let i = 0; i < freeMonth.length; i++) {
			freeMonth[i].classList.add('active');
		}
		setPeriodPrice([90, 120, 150]);
		setPeriodTime("yr");
		yearly.checked = true;
		periodSwitch.checked = true;
		setValues({
			...data,
			period: "Yearly",
			// periodPrice: periodPrice[numberPlan],
			// periodTime: periodTime,
			hasPeriod: true,
		});
	}

	const ShowCheckbox = () => {
		const monthly = document.querySelector('.plan-period__radio-monthly');
		const yearly = document.querySelector('.plan-period__radio-yearly');
		const freeMonth = document.querySelectorAll('.plan-form__free');
		const periodSwitch = document.querySelector('.plan-period__check');

		if (periodSwitch.checked) {
			monthly.checked = false;
			yearly.checked = true;
			setPeriodPrice([90, 120, 150]);
			setPeriodTime("yr");
			setValues({
				...data,
				period: "Yearly",
				// periodPrice: periodPrice[numberPlan],
				// periodTime: periodTime,
				hasPeriod: true,
			});
		} else {
			yearly.checked = false;
			monthly.checked = true;
			setPeriodPrice([9, 12, 15]);
			setPeriodTime("mo");
			setValues({
				...data,
				period: "Monthly",
				// periodPrice: periodPrice[numberPlan],
				// periodTime: periodTime,
				hasPeriod: false,
			});
		}
		for (let i = 0; i < freeMonth.length; i++) {
			periodSwitch.checked ? freeMonth[i].classList.add('active') : freeMonth[i].classList.remove('active');
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
										setValues({ periodPrice: periodPrice[0] });
										setNumberPlan(0);
									}}
								/>
								<div className="plan-form__item plan-form__item-arcade">
									<h4 className='plan-form__title'>Arcade</h4>
									<p className="plan-form__price">${periodPrice[0]}/{periodTime}</p>
									<p className="plan-form__free">2 months free</p>
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
										setValues({ periodPrice: periodPrice[1] });
										setNumberPlan(1);
									}}
								/>
								<div className="plan-form__item plan-form__item-advanced">
									<h4 className='plan-form__title'>Advanced</h4>
									<p className="plan-form__price">${periodPrice[1]}/{periodTime}</p>
									<p className="plan-form__free">2 months free</p>
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
										setValues({ periodPrice: periodPrice[2] });
										setNumberPlan(2);
									}}
								/>
								<div className="plan-form__item plan-form__item-pro">
									<h4 className='plan-form__title'>Pro</h4>
									<p className="plan-form__price">${periodPrice[2]}/{periodTime}</p>
									<p className="plan-form__free">2 months free</p>
								</div>
							</label>
						</div>
						<div className="form__plan-period plan-period">
							<label>
								<input
									{...register('period')}
									type="radio"
									name="period"
									value="Monthly"
									className="plan-period__radio plan-period__radio-monthly"
									defaultChecked={!hasPeriod}
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
									{...register('period')}
									type="radio"
									name="period"
									value="Yearly"
									className="plan-period__radio plan-period__radio-yearly"
									defaultChecked={hasPeriod}
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