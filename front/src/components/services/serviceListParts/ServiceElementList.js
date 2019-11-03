import React from 'react'
import { Link } from 'react-router-dom'
import CustomerPartOfServiceElementList from './CustomerPartOfServiceElementList'

const Service = props => {
	const {
		RMANumber,
		RMA,
		model,
		brand,
		type,
		createdAt,
		customerId,
		customerPage
	} = props

	if (customerPage) {
		return (
			<li
				className={
					customerPage ? 'customers-services__item' : ''
				}>
				<Link to={`/services/RMA/${RMANumber}`}>
					<span> {RMA}</span>
					<span> {model}</span>
					<span> {brand}</span>
					<span> {type}</span>
					<span> {createdAt}</span>
				</Link>
			</li>
		)
	}
	return (
		<li className={customerPage ? '' : 'list__rma'}>
			<Link to={`/services/RMA/${RMANumber}`}>
				<span> {RMA}</span>
				<span> {model}</span>
				<span> {brand}</span>
				<span> {type}</span>
				<span> {createdAt}</span>
				<CustomerPartOfServiceElementList
					customerId={customerId}
				/>
			</Link>
		</li>
	)
}

export default Service
