import React from 'react'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'

import LinkButton from '../LinkButton'
import constants from './../store/constants'

import { addCustomer } from '../../queries/queries'

const { ADD_NAME, ADD_MAIL, ADD_PHONE } = constants

const AddCustomer = props => {
	console.log('AddCustomer', props.location)

	const handleSubmitGraphQL = e => {
		e.preventDefault()
		props.addCustomer({
			variables: {
				name: props.name,
				mail: props.mail,
				phone: props.phoneNumber
			}
		})
	}

	return (
		<div className='customerDetail'>
			<h1 className='customerDetail__header'>
				Dodaj klienta
			</h1>
			<form
				className='customerDetail__form'
				onSubmit={handleSubmitGraphQL}>
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
					placeholder='Podaj imie i nazwisko'
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
					placeholder='Podaj maila'
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
					placeholder='Podaj numer telefonu'
				/>

				<LinkButton
					className='customerDetail__button customerDetail__button--btn'
					to='/services/addService/'
					onClick={handleSubmitGraphQL}>
					Dodaj klienta i przejdź do serwisu
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
)(
	compose(graphql(addCustomer, { name: 'addCustomer' }))(
		AddCustomer
	)
)
