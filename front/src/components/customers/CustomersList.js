import React from 'react'
import { graphql } from 'react-apollo'
import { getCustomersQuery } from '../../queries/queries'
import CustomerElementList from './CustomerElementList'
import CustomerHeader from './CustomerHeader'

const CustomersList = props => {
	const displayCustomers = () => {
		let data = props.data
		if (data.loading) {
			return <div>Loading ...</div>
		} else {
			return data.customersAll.map(el => {
				return <CustomerElementList key={el.id} {...el} />
			})
		}
	}

	return (
		<div className='main-container'>
			<CustomerHeader />
			<ul className='list'>{displayCustomers()}</ul>
		</div>
	)
}

export default graphql(getCustomersQuery)(CustomersList)
