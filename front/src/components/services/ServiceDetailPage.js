import React from 'react'
import { graphql } from 'react-apollo'
import { getServiceByRMAQuery } from '../../queries/queries'
import CustomerPartOfServiceElementList from './serviceListParts/CustomerPartOfServiceElementList'

const ServiceDetailPage = props => {
	if (props.data.serviceByRMA) {
		const details = true
		return (
			<div className='serviceDetail'>
				<h1 className='serviceDetail__header'>
					Karta Serwisu i opis usterki
				</h1>
				<div className='serviceDetail__rightBlock'>
					<div className='serviceDetail__divTable'>
						<div className='serviceDetail__divTableBody'>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Numer Naprawy:
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.RMA}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Brand
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.brand}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Model
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.model}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Rodzaj
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.type}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Klient
								</div>
								<div className='serviceDetail__divTableCell'>
									<CustomerPartOfServiceElementList
										customerId={
											props.data.serviceByRMA.customerId
										}
										details={details}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='serviceDetail__leftBlock'>
					<div className='serviceDetail__divTable'>
						<div className='serviceDetail__divTableBody'>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Status naprawy
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.status}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Data przyjęcia
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.createdAt}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Data wydania
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.finishedAt}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Gdzie serwisowane
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.whereToFix}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Cena naprawy
								</div>
								<div className='serviceDetail__divTableCell'>
									{props.data.serviceByRMA.price}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='serviceDetail__description'>
					<p className='serviceDetail__description-paragraph'>
						{props.data.serviceByRMA.description}
					</p>
				</div>
			</div>
		)
	}

	return null
}

export default graphql(getServiceByRMAQuery, {
	options: props => ({
		variables: {
			number: parseInt(props.match.params.serviceID)
		}
	})
})(ServiceDetailPage)
