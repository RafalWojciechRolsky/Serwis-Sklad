import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'

import LinkButton from '../LinkButton'

import {
	addCustomer
	// getCustomerByAllQuery
} from '../../queries/queries'

class AddCustomer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			mail: '',
			phoneNumber: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addCustomer({
			variables: {
				name: this.state.name,
				mail: this.state.mail,
				phone: this.state.phoneNumber
			}
		})
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		console.log(this.props)
		return (
			<div className='customerDetail'>
				<h1 className='customerDetail__header'>
					Dodaj klienta
				</h1>
				<form
					className='customerDetail__form'
					onSubmit={this.handleSubmit}>
					<label
						className='customerDetail__label'
						htmlFor='name'>
						Imię i Nazwisko
					</label>
					<input
						onChange={this.handleChange}
						value={this.props.name}
						name='name'
						className='customerDetail__input'
						type='text'
						placeholder='Podaj imie i nazwisko'
					/>
					<label
						className='customerDetail__label'
						htmlFor='mail'>
						Mail
					</label>
					<input
						onChange={this.handleChange}
						value={this.props.mail}
						name='mail'
						className='customerDetail__input'
						type='text'
						placeholder='Podaj maila'
					/>
					<label
						phone='phoneNumber'
						className='customerDetail__label'
						htmlFor=''>
						Numer telefonu
					</label>
					<input
						onChange={this.handleChange}
						value={this.props.phoneNumber}
						name='phoneNumber'
						className='customerDetail__input'
						type='text'
						placeholder='Podaj numer telefonu'
					/>

					<LinkButton
						className='customerDetail__button customerDetail__button--btn'
						to='/customer/addService/'
						onClick={this.handleSubmit}>
						Dodaj klienta i przejdź do serwisu
					</LinkButton>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		name: state.name,
		mail: state.mail,
		phoneNumber: state.phoneNumber
	}
}

export default connect(mapStateToProps)(
	compose(graphql(addCustomer, { name: 'addCustomer' }))(
		AddCustomer
	)
)

// export default compose(
// 	graphql(addCustomer, { name: 'addCustomer' }),
// 	graphql(getCustomerByAllQuery, {
// 		options: props => ({
// 			variables: {
// 				name: 'Rafał Maje',
// 				mail: 'zamowienia@skladmuzyczny.pl',
// 				phone: '791 946 49312 346-18-42'
// 			}
// 		})
// 	})
// )(AddCustomer)
