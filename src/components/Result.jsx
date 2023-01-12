import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import CardForm from './CardForm';
import MyForm from './MyForm';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Result = () => {
	const navigate = useNavigate();
	const { data } = useData();

	const {
		handleSubmit,
	} = useForm({
		defaultValues: {},
	});

	const NextStep = () => {
		navigate("/finish");
	}
	const PrevStep = () => {
		navigate("/step3");
	}
	const StartStep = (e) => {
		e.preventDefault();
		navigate("/");
	}
	console.log(data)
	return (
		<CardForm active={4}>
			<div className="cardform__container">
				<MyForm
					onSubmit={handleSubmit(NextStep)}
					title={"Finishing up"}
					description={"Double-check everything looks OK before confirming."}
				>
					<div className='form__container'>
						<div className="form__result result-form">
							<div className="result-form__data">
								<div className="result-form__plan">
									<div className="result-form__plan-info">
										<h4 className="result-form__title">{data.plan} ({data.period})</h4>
										<button className="result-form__change" type='button' onClick={e => StartStep(e)}>Change</button>
									</div>
									<p className="result-form__plan-price">${data.periodPrice}/{data.periodTime}</p>
								</div>
								<div className="result-form__addons">
									{data.addons[0] ?
										<div className="result-form__addons-item">
											<h4 className="result-form__text">{data.addons[0]}</h4>
											<p className="result-form__addons-price">+$1/mo</p>
										</div>
										: ""}
									{data.addons[1] ?
										<div className="result-form__addons-item">
											<h4 className="result-form__text">{data.addons[1]}</h4>
											<p className="result-form__addons-price">+$2/mo</p>
										</div>
										: ""}
									{data.addons[2] ?
										<div className="result-form__addons-item">
											<h4 className="result-form__text">{data.addons[2]}</h4>
											<p className="result-form__addons-price">+$2/mo</p>
										</div>
										: ""}
								</div>
							</div>
							<div className="result-form__total">
								<h4 className="result-form__text">Total</h4>
								<p className="result-form__total-price">+$12/mo</p>
							</div>
						</div>
					</div>
					<div className="buttons">
						<PrevButton onClick={PrevStep}>Go Back</PrevButton>
						<NextButton type="submit" classes="confirm-button">Confirm</NextButton>
					</div>
				</MyForm>
			</div >
		</CardForm >
	)
}

export default Result;