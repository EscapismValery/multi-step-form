import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step2 = () => {
	const navigate = useNavigate();

	const [periodPrice, setPeriodPrice] = useState([9, 12, 15]);

	const { data, setValues } = useData();
	const {
		register,
		handleSubmit,
	} = useForm({
		defaultValues: { plan: data.plan, period: data.period },
	});

	const NextStep = (data) => {
		navigate("/step3");
		setValues(data);
	}

	const PrevStep = () => {
		navigate("/");
	}

	const ShowPeriod = (e) => {
		const monthly = document.querySelector('.plan-period__radio-monthly');
		const yearly = document.querySelector('.plan-period__radio-yearly');
		const periodSwitch = document.querySelector('.plan-period__switch');
		const freeMonth = document.querySelectorAll('.plan-form__free');

		switch (e.target.classList.value) {
			case 'plan-period__title plan-period-monthly':
				periodSwitch.classList.remove('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.remove('active');
				}
				setPeriodPrice([9, 12, 15]);
				break;
			case 'plan-period__title plan-period-yearly':
				periodSwitch.classList.add('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.add('active');
				}
				setPeriodPrice([90, 120, 150]);
				break;
			case 'plan-period__switch':
				monthly.checked = false;
				yearly.checked = true;
				periodSwitch.classList.add('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.add('active');
				}
				setPeriodPrice([90, 120, 150]);
				break;
			case 'plan-period__switch active':
				monthly.checked = true;
				yearly.checked = false;
				periodSwitch.classList.remove('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.remove('active');
				}
				setPeriodPrice([9, 12, 15]);
				break;
			default:
				break;
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
									value={"Arcade " + periodPrice[0]}
									className='plan-form__radio'
									defaultChecked
								/>
								<div className="plan-form__item plan-form__item-arcade">
									<h4 className='plan-form__title'>Arcade</h4>
									<p className="plan-form__price">${periodPrice[0]}/mo</p>
									<p className="plan-form__free">2 months free</p>
								</div>
							</label>
							<label>
								<input
									{...register('plan')}
									type="radio"
									name='plan'
									value={"Advanced " + periodPrice[1]}
									className='plan-form__radio'
								/>
								<div className="plan-form__item plan-form__item-advanced">
									<h4 className='plan-form__title'>Advanced</h4>
									<p className="plan-form__price">${periodPrice[1]}/mo</p>
									<p className="plan-form__free">2 months free</p>
								</div>
							</label>
							<label>
								<input
									{...register('plan')}
									type="radio"
									name='plan'
									value={"Pro " + periodPrice[2]}
									className='plan-form__radio'
								/>
								<div className="plan-form__item plan-form__item-pro">
									<h4 className='plan-form__title'>Pro</h4>
									<p className="plan-form__price">${periodPrice[2]}/mo</p>
									<p className="plan-form__free">2 months free</p>
								</div>
							</label>
						</div>
						<div className="form__plan-period plan-period" onClick={e => ShowPeriod(e)}>
							<label>
								<input
									{...register('period')}
									type="radio"
									name="period"
									value="Monthly"
									className="plan-period__radio plan-period__radio-monthly"
									defaultChecked
								/>
								<p className='plan-period__title plan-period-monthly'>Monthly</p>
							</label>
							<button type="button" className='plan-period__switch'></button>
							<label>
								<input
									{...register('period')}
									type="radio"
									name="period"
									value="Yearly"
									className="plan-period__radio plan-period__radio-yearly"
								/>
								<p className='plan-period__title plan-period-yearly'>Yearly</p>
							</label>

							{/* <button className='plan-period__title plan-period-monthly active'>Monthly</button>
							<button className='plan-period__switch'></button>
							<button className='plan-period__title plan-period-yearly'>Yearly</button> */}
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