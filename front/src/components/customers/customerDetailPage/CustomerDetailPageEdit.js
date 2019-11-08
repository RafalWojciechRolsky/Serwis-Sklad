import React from 'react'
import LinkButton from '../../LinkButton'
import { connect } from 'react-redux'
import constants from '../../store/constants'

const { ADD_NAME, ADD_MAIL, ADD_PHONE } = constants

const CustomerDetailPageEdit = props => {
	const { name } = props.location.state

	return (
		<div className='customerDetail'>
			<h1 className='customerDetail__header'>
				{`Edytuj dane klienta ${name}`}
			</h1>
			<form
				className='customerDetail__form'
				onSubmit={() => {}}>
				<label
					className='customerDetail__label'
					htmlFor='name'>
					Imię i Nazwisko
				</label>
				<input
					value={props.name}
					onChange={props.handleChangeName}
					name='name'
					className='customerDetail__input'
					type='text'
					placeholder='Podaj nowe imię i nazwisko'
				/>
				<label
					className='customerDetail__label'
					htmlFor='mail'>
					Kontakt mailowy
				</label>
				<input
					onChange={props.handleChangeMail}
					value={props.mail}
					name='mail'
					className='customerDetail__input'
					type='text'
					placeholder='Podaj nowy kontakt mailowy'
				/>
				<label
					phone='phoneNumber'
					className='customerDetail__label'
					htmlFor='phoneNumber'>
					Kontakt telefoniczny
				</label>
				<input
					onChange={props.handleChangePhone}
					value={props.phoneNumber}
					name='phoneNumber'
					className='customerDetail__input'
					type='text'
					placeholder='Podaj nowy kontakt telefoniczny'
				/>

				<LinkButton
					className='customerDetail__button customerDetail__button--btn'
					to={{
						pathname: `/`,
						state: {
							withCustomer: props.withCustomer
						}
					}}
					onClick={() => {}}>
					Aktualizuj dane klienta
				</LinkButton>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		name: state.name,
		mail: state.mail,
		phoneNumber: state.phoneNumber
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChangeName: e => {
			const action = {
				type: ADD_NAME,
				name: e.target.value
			}
			dispatch(action)
		},
		handleChangeMail: e => {
			const action = {
				type: ADD_MAIL,
				mail: e.target.value
			}
			dispatch(action)
		},
		handleChangePhone: e => {
			const action = {
				type: ADD_PHONE,
				phoneNumber: e.target.value
			}
			dispatch(action)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerDetailPageEdit)
