import React from 'react'
import CustomerPartOfServiceElementList from '../serviceListParts/CustomerPartOfServiceElementList'
import { Link } from 'react-router-dom'

const ServiceDetailPageJSX = props => {
	const {
		RMA,
		id,
		RMANumber,
		brand,
		model,
		type,
		customerId,
		status,
		createdAt,
		finishedAt,
		whereToFix,
		price,
		description
	} = props.data
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
								{RMA}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Brand
							</div>
							<div className='serviceDetail__divTableCell'>
								{brand}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Model
							</div>
							<div className='serviceDetail__divTableCell'>
								{model}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Rodzaj
							</div>
							<div className='serviceDetail__divTableCell'>
								{type}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Klient
							</div>
							<div className='serviceDetail__divTableCell'>
								<CustomerPartOfServiceElementList
									customerId={customerId}
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
								{status}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Data przyjęcia
							</div>
							<div className='serviceDetail__divTableCell'>
								{createdAt}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Data wydania
							</div>
							<div className='serviceDetail__divTableCell'>
								{finishedAt}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Gdzie serwisowane
							</div>
							<div className='serviceDetail__divTableCell'>
								{whereToFix}
							</div>
						</div>
						<div className='serviceDetail__divTableRow'>
							<div className='serviceDetail__divTableCell'>
								Cena naprawy
							</div>
							<div className='serviceDetail__divTableCell'>
								{price}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link
				className='customerDetail__button customerDetail__button--btn customerDetail__button--link'
				to={{
					pathname: `/serviceDetailPage`,
					state: {
						id,
						RMA,
						RMANumber,
						brand,
						model,
						type,
						customerId,
						status,
						createdAt,
						finishedAt,
						whereToFix,
						price,
						description
					}
				}}>
				Edit
			</Link>
			<div className='serviceDetail__description'>
				<p className='serviceDetail__description-paragraph'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ServiceDetailPageJSX
