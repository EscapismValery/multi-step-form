import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step2 = () => {
	const navigate = useNavigate();

	const [periodPrice, setPeriodPrice] = useState([9, 12, 15]);

	const NextStep = () => {
		navigate("/step3");
	}
	const PrevStep = () => {
		navigate("/");
	}

	const ShowPeriod = (e) => {
		e.preventDefault();
		const monthly = document.querySelector('.plan-period-monthly');
		const yearly = document.querySelector('.plan-period-yearly');
		const periodSwitch = document.querySelector('.plan-period__switch');
		const freeMonth = document.querySelectorAll('.plan-form__free');

		switch (e.target.classList.value) {
			case 'plan-period__title plan-period-monthly':
				monthly.classList.add('active');
				yearly.classList.remove('active');
				periodSwitch.classList.remove('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.remove('active');
				}
				setPeriodPrice([9, 12, 15]);
				break;
			case 'plan-period__title plan-period-yearly':
				monthly.classList.remove('active');
				yearly.classList.add('active');
				periodSwitch.classList.add('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.add('active');
				}
				setPeriodPrice([90, 120, 150]);
				break;
			case 'plan-period__switch':
				monthly.classList.remove('active');
				yearly.classList.add('active');
				periodSwitch.classList.add('active');
				for (let i = 0; i < freeMonth.length; i++) {
					freeMonth[i].classList.add('active');
				}
				setPeriodPrice([90, 120, 150]);
				break;
			case 'plan-period__switch active':
				monthly.classList.add('active');
				yearly.classList.remove('active');
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
					title={"Select your plan"}
					description={"You have the option of monthly or yearly billing."}
				>
					<div className="form__plan plan-form">
						<label>
							<input type="radio" name='plan' className='plan-form__radio' defaultChecked />
							<div className="plan-form__item">
								<h4 className='plan-form__title'>Arcade</h4>
								<p className="plan-form__price">${periodPrice[0]}/mo</p>
								<p className="plan-form__free">2 months free</p>
							</div>
						</label>
						<label>
							<input type="radio" name='plan' className='plan-form__radio' />
							<div className="plan-form__item">
								<h4 className='plan-form__title'>Advanced</h4>
								<p className="plan-form__price">${periodPrice[1]}/mo</p>
								<p className="plan-form__free">2 months free</p>
							</div>
						</label>
						<label>
							<input type="radio" name='plan' className='plan-form__radio' />
							<div className="plan-form__item">
								<h4 className='plan-form__title'>Pro</h4>
								<p className="plan-form__price">${periodPrice[2]}/mo</p>
								<p className="plan-form__free">2 months free</p>
							</div>
						</label>
					</div>
					<div className="form__plan-period plan-period" onClick={e => ShowPeriod(e)}>
						<button className='plan-period__title plan-period-monthly active'>Monthly</button>
						<button className='plan-period__switch'></button>
						<button className='plan-period__title plan-period-yearly'>Yearly</button>
					</div>
				</MyForm>
				<div className="buttons">
					<PrevButton onClick={PrevStep}>Go Back</PrevButton>
					<NextButton classes="next-button" onClick={NextStep}>Next Step</NextButton>
				</div>
			</div>
		</CardForm>
	)
}

export default Step2;