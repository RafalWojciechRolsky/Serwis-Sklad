import React from 'react'
import { graphql } from 'react-apollo'
import { getCustomerByNameQuery } from '../../queries/queries'
import ServiceElementList from '../services/serviceListParts/ServiceElementList'

const CustomerDetailPage = props => {
	if (props.data.customerByName) {
		const result = props.data.customerByName

		const displayCustomerServices = () => {
			const data = props.data.customerByName.services
			if (data.loading) {
				return <div>Loading ...</div>
			} else {
				const customerPage = true
				return data.map(el => {
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
								{result.name}
							</div>
						</div>
						<div className='customerDetail__divTableRow'>
							<div className='customerDetail__divTableCell'>
								Mail
							</div>
							<div className='customerDetail__divTableCell'>
								{result.mail}
							</div>
						</div>
						<div className='customerDetail__divTableRow'>
							<div className='customerDetail__divTableCell'>
								Numer telefonu
							</div>
							<div className='customerDetail__divTableCell'>
								{result.phoneNumber}
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

	return null
}

export default graphql(getCustomerByNameQuery, {
	options: props => ({
		variables: {
			name: props.match.params.customerID
		}
	})
})(CustomerDetailPage)
