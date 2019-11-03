import React, { Fragment } from 'react'
import { getCustomerByAllQuery } from '../../../queries/queries'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import constants from '../../store/constants'

const { ADD_ID } = constants

const CustomerPartOfAddService = props => {
	return (
		<Fragment>
			<Query
				query={getCustomerByAllQuery}
				variables={{
					name: props.nameProps,
					mail: props.mailProps,
					phone: props.phoneNumberProps
				}}>
				{({ loading, error, data }) => {
					if (loading) {
						return <div>Loading ...</div>
					}
					if (error) {
						console.log(error)
					}
					console.log(data)

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
								<label
									phone='id'
									className='customerDetail__label'
									htmlFor='id'>
									Numer ID KLienta
								</label>
								<input
									value={data.customerByAll.id}
									onChange={() => {}}
									name='id'
									className='customerDetail__input'
									type='text'
									placeholder='Numer Id Klienta'
								/>
							</form>
							{props.handleChangeId(
								null,
								data.customerByAll.id
							)}
						</Fragment>
					)
				}}
			</Query>
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
