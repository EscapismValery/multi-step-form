import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Step3 = () => {
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
	console.log(data)
	const ShowActive = (num) => {
		const addonsItems = document.querySelectorAll('.addons-form__item');
		const addonsItemCheck = addonsItems[num].querySelector('.addons-form__check').checked;
		addonsItemCheck ? addonsItems[num].classList.add('active') : addonsItems[num].classList.remove('active');
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
							<label>
								<input
									{...register('addons')}
									type="checkbox"
									name='addons'
									className='addons-form__check'
									defaultValue="Online service"
								/>
								<div className="addons-form__item" onChange={e => ShowActive(0)}>
									<div className='addons-form__item-container'>
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
								<input
									{...register('addons')}
									type="checkbox"
									name='addons'
									className='addons-form__check'
									defaultValue="Larger storage"
								/>
								<div className="addons-form__item" onChange={e => ShowActive(1)}>
									<div className='addons-form__item-container'>
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
								<input
									{...register('addons')}
									type="checkbox"
									name='addons'
									className='addons-form__check'
									defaultValue="Customizable Profile"
								/>
								<div className="addons-form__item" onChange={e => ShowActive(2)}>
									<div className='addons-form__item-container'>
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