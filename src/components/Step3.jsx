import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step3 = () => {
	const navigate = useNavigate();
	const NextStep = () => {
		navigate("/result");
	}
	const PrevStep = () => {
		navigate("/step2");
	}

	const ShowActive = (num) => {
		const addonsItems = document.querySelectorAll('.addons-form__item');
		addonsItems[num].classList.toggle('active');
	}
	return (
		<CardForm active={3}>
			<div className="cardform__container">
				<MyForm
					title={"Pick add-ons"}
					description={"Add-ons help enhance your gaming experience."}
				>
					<div className="form__addons addons-form">
						<label>
							<div className="addons-form__item" onChange={e => ShowActive(0)}>
								<div className='addons-form__item-container'>
									<input type="checkbox" name='addons' className='addons-form__check' />
									<span className='addons-form__mark'></span>
									<div className="addons-form__text">
										<h4 className='addons-form__title'>Online service</h4>
										<p className="addons-form__desc">Access to multiplayer games</p>
									</div>
								</div>
								<p className="addons-form__price">+$1/mo</p>
							</div>
						</label>
						<label>
							<div className="addons-form__item" onChange={e => ShowActive(1)}>
								<div className='addons-form__item-container'>
									<input type="checkbox" name='addons' className='addons-form__check' />
									<span className='addons-form__mark'></span>
									<div className="addons-form__text">
										<h4 className='addons-form__title'>Larger storage</h4>
										<p className="addons-form__desc">Extra 1TB of cloud save</p>
									</div>
								</div>
								<p className="addons-form__price">+$2/mo</p>
							</div>
						</label>
						<label>
							<div className="addons-form__item" onChange={e => ShowActive(2)}>
								<div className='addons-form__item-container'>
									<input type="checkbox" name='addons' className='addons-form__check' />
									<span className='addons-form__mark'></span>
									<div className="addons-form__text">
										<h4 className='addons-form__title'>Customizable Profile</h4>
										<p className="addons-form__desc">Custom theme on your profile</p>
									</div>
								</div>
								<p className="addons-form__price">+$2/mo</p>
							</div>
						</label>
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

export default Step3;