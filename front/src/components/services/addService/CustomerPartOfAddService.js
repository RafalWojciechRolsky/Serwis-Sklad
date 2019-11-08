import React, { Fragment } from 'react'
import { getCustomerByAllQuery } from '../../../queries/queries'
import { useQuery } from 'react-apollo-hooks'

import { connect } from 'react-redux'
import constants from '../../store/constants'

const { ADD_ID } = constants

const CustomerPartOfAddService = props => {
	const { loading, error, data } = useQuery(
		getCustomerByAllQuery,
		{
			variables: {
				name: props.nameProps,
				mail: props.mailProps,
				phone: props.phoneNumberProps
			}
		}
	)

	if (error) {
		return (
			<h1 className='customerDetail__error'>
				Znajdź tego klienta i dodaj mu serwis. Coś poszło
				nie tak
			</h1>
		)
	}

	if (loading) {
		return <div>Loading... </div>
	}

	return (
		<Fragment>
			<h1 className='customerDetail__header'>
				Dane klienta
			</h1>
			<form className='customerDetail__form'>
				<label
					className='customerDetail__label'
					htmlFor='name'>
					Imię i Nazwisko
				</label>
				<input
					value={props.nameProps}
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
					value={props.mailProps}
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
					value={props.phoneNumberProps}
					onChange={() => {}}
					name='phoneNumber'
					className='customerDetail__input'
					type='text'
					placeholder='Jakiś numer telefonu'
				/>
			</form>
			{props.handleChangeId(null, data.customerByAll.id)}
		</Fragment>
	)
}

CustomerPartOfAddService.defaultProps = {}

const mapDispatchToProps = dispatch => {
	return {
		handleChangeId: (e, data) => {
			const action = {
				type: ADD_ID,
				id: data
			}
			dispatch(action)
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(CustomerPartOfAddService)
