import React from 'react'
import { Link } from 'react-router-dom'

const Customer = props => {
	const { name, mail, phoneNumber } = props

	return (
		<li className='list__customers'>
			<Link to={`/customer/${name}`}>
				<span> {name}</span>
				<span> {mail}</span>
				<span> {phoneNumber}</span>
			</Link>
		</li>
	)
}

export default Customer
