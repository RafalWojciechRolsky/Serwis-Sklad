import React from 'react'
// import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'

import {} from '../../queries/queries'

const AddService = props => {
	console.log(props)

	return (
		<div className='customerDetail'>
			{/* ///////////////////////////////////////////////////////////////////////////////////////////////
			// CUSTOMER PART */}
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
					value={props.name}
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
					className='customerDetail__input'
					type='text'
					placeholder='Opis usterki'
				/>
				<button className='customerDetail__button customerDetail__button--btn'>
					Dodaj naprawę do bazy danych
				</button>
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

export default connect(mapStateToProps)(
	compose()(AddService)
)
// graphql(getCustomersQuery, { name: 'getCustomersQuery' }),
// graphql(addServiceMutation, {		name: 'addServiceMutation'	})
