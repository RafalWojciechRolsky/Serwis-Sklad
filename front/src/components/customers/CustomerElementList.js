import React from 'react'
import { Link } from 'react-router-dom'

const Customer = props => {
	const { name, mail, phoneNumber, id } = props

	return (
		<li className='list__customers'>
			<Link
				to={{
					pathname: `/customer/${name}`,
					state: { id, name, mail, phoneNumber }
				}}>
				<span> {name}</span>
				<span> {mail}</span>
				<span> {phoneNumber}</span>
				<span> {id}</span>
			</Link>
		</li>
	)
}

export default Customer
