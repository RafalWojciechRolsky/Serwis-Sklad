import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { graphql } from 'react-apollo'
import { getCustomerByIdQuery } from '../../queries/queries'
import ServiceElementList from '../services/serviceListParts/ServiceElementList'

const CustomerDetailPage = props => {
	const { name, mail, phoneNumber } = props.location.state

	console.log('CustomerDetailPage', props.location)

	const displayCustomerServices = () => {
		const data = props.data.customerById
		if (props.data.loading) {
			return <div>Loading ...</div>
		} else {
			const customerPage = true
			console.log(data)

			return data.services.map(el => {
				return (
					<ServiceElementList
						key={el.id}
						customerPage={customerPage}
						{...el}
					/>
				)
			})
		}
	}

	return (
		<div className='customerDetail'>
			<h1 className='customerDetail__header'>
				Karta klienta
			</h1>
			<div className='customerDetail__divTable'>
				<div className='customerDetail__divTableBody'>
					<div className='customerDetail__divTableRow'>
						<div className='customerDetail__divTableCell'>
							Imię i Nazwisko
						</div>
						<div className='customerDetail__divTableCell'>
							{name}
						</div>
					</div>
					<div className='customerDetail__divTableRow'>
						<div className='customerDetail__divTableCell'>
							Mail
						</div>
						<div className='customerDetail__divTableCell'>
							{mail}
						</div>
					</div>
					<div className='customerDetail__divTableRow'>
						<div className='customerDetail__divTableCell'>
							Numer telefonu
						</div>
						<div className='customerDetail__divTableCell'>
							{phoneNumber}
						</div>
					</div>
				</div>
			</div>
			<div className='customers-services'>
				<h2 className='customers-services__header'>
					Lista serwisów klienta
				</h2>
				<ul className='customers-services__list'>
					{displayCustomerServices()}
				</ul>
			</div>
		</div>
	)
}

export default graphql(getCustomerByIdQuery, {
	options: props => ({
		variables: {
			id: props.location.state.id
		}
	})
})(CustomerDetailPage)
