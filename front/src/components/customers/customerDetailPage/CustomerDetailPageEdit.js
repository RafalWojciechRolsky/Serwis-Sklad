import React from 'react'
import LinkButton from '../../LinkButton'
import { connect } from 'react-redux'

const CustomerDetailPageEdit = props => {
	const { name, mail, phoneNumber } = props.location.state

	return (
		<div className='customerDetail'>
			<h1 className='customerDetail__header'>
				Dodaj klienta
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
					value={name}
					onChange={() => {}}
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
					onChange={() => {}}
					value={mail}
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
					onChange={() => {}}
					value={phoneNumber}
					name='phoneNumber'
					className='customerDetail__input'
					type='text'
					placeholder='Podaj numer telefonu'
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

export default connect(mapStateToProps)(
	CustomerDetailPageEdit
)
