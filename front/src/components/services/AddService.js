import React from 'react'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'

import LinkButton from '../LinkButton'
import { addServiceMutation } from '../../queries/queries'
import constants from './../store/constants'

const {
	ADD_MODEL,
	ADD_BRAND,
	ADD_TYPE,
	ADD_WHERE_TO_FIX,
	ADD_DESCRIPTION
} = constants

const AddService = props => {
	const handleSubmitGraphQL = e => {
		e.preventDefault()
		props.addServiceMutation({
			variables: {
				model: props.model,
				brand: props.brand,
				type: props.type,
				whereToFix: props.whereToFix,
				description: props.description,
				customerId: '5d8c9dd2807e981eb74ba5f1'
			}
		})
	}
	return (
		<div className='customerDetail'>
			{/* ///////////////////////////////////////////////////////////////////////////////////////////////
			// CUSTOMER PART */}
			<h1 className='customerDetail__header'>
				Dane klienta
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
					onChange={() => {}}
					name='name'
					className='customerDetail__input'
					type='text'
					placeholder='Jakieś imię i nazwisko'
				/>
				<label
					className='customerDetail__label'
					htmlFor='mail'>
					Kontakt mailowy
				</label>
				<input
					value={props.mail}
					onChange={() => {}}
					name='mail'
					className='customerDetail__input'
					type='text'
					placeholder='Jakiś kontakt mailowy'
				/>
				<label
					phone='phoneNumber'
					className='customerDetail__label'
					htmlFor='phoneNumber'>
					Kontakt telefoniczny
				</label>
				<input
					value={props.phoneNumber}
					onChange={() => {}}
					name='phoneNumber'
					className='customerDetail__input'
					type='text'
					placeholder='Jakiś numer telefonu'
				/>
			</form>
			{/* ///////////////////////////////////////////////////////////////////////////////////////////////
			// SERVICE PART */}
			<h1 className='serviceDetail__header serviceDetail__header--add'>
				Detale naprawy
			</h1>
			<form className='customerDetail__form'>
				<label
					className='customerDetail__label'
					htmlFor='model'>
					Model
				</label>
				<input
					name='model'
					value={props.model}
					onChange={props.handleChangeModel}
					className='customerDetail__input'
					type='text'
					placeholder='Podaj Model'
				/>
				<label
					className='customerDetail__label'
					htmlFor='brand'>
					Brand
				</label>
				<input
					name='brand'
					value={props.brand}
					onChange={props.handleChangeBrand}
					className='customerDetail__input'
					type='text'
					placeholder='Podaj Brand'
				/>
				<label
					className='customerDetail__label'
					htmlFor='type'>
					Typ przedmiotu naprawy
				</label>
				<input
					name='type'
					value={props.type}
					onChange={props.handleChangeType}
					className='customerDetail__input'
					type='text'
					placeholder='Podaj typ przedmiotu naprawy'
				/>
				<label
					className='customerDetail__label'
					htmlFor='whereToFix'>
					Miejsce naprawy
				</label>
				<input
					name='whereToFix'
					value={props.whereToFix}
					onChange={props.handleChangeWhereToFix}
					className='customerDetail__input'
					type='text'
					placeholder='Miejsce naprawy'
				/>
				<label
					className='customerDetail__label'
					htmlFor='description'>
					Opis usterki
				</label>
				<textarea
					rows='15'
					name='description'
					value={props.description}
					onChange={props.handleChangeDescription}
					className='customerDetail__input'
					type='text'
					placeholder='Tu napisz co jest do naprawy'
				/>
				<LinkButton
					className='customerDetail__button customerDetail__button--btn'
					to='/'
					onClick={handleSubmitGraphQL}>
					Dodaj naprawę do bazy danych
				</LinkButton>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		name: state.name,
		mail: state.mail,
		phoneNumber: state.phoneNumber,
		model: state.model,
		brand: state.brand,
		type: state.type,
		whereToFix: state.whereToFix,
		description: state.description
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChangeModel: e => {
			const action = {
				type: ADD_MODEL,
				model: e.target.value
			}
			dispatch(action)
		},
		handleChangeBrand: e => {
			const action = {
				type: ADD_BRAND,
				brand: e.target.value
			}
			dispatch(action)
		},
		handleChangeType: e => {
			const action = {
				type: ADD_TYPE,
				_type: e.target.value
			}
			dispatch(action)
		},
		handleChangeWhereToFix: e => {
			const action = {
				type: ADD_WHERE_TO_FIX,
				whereToFix: e.target.value
			}
			dispatch(action)
		},
		handleChangeDescription: e => {
			const action = {
				type: ADD_DESCRIPTION,
				description: e.target.value
			}
			dispatch(action)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	compose(
		graphql(addServiceMutation, {
			name: 'addServiceMutation'
		})
	)(AddService)
)
