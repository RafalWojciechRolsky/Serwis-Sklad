import React from 'react'
import { Link } from 'react-router-dom'

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
				<span> {customerId.name}</span>
			</Link>
		</li>
	)
}

export default Service
