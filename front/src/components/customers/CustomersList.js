import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { getCustomersQuery } from '../../queries/queries'
import CustomerElementList from './CustomerElementList'
import CustomerHeader from './CustomerHeader'

const CustomersList = props => {
	const { data, error, loading } = useQuery(
		getCustomersQuery
	)
	if (error) {
		return <div>Error! {error.message}</div>
	}

	if (loading) {
		return <div>Loading... </div>
	}

	const displayCustomers = () => {
		return data.customersAll.map(el => {
			return <CustomerElementList key={el.id} {...el} />
		})
	}

	return (
		<div className='main-container'>
			<CustomerHeader />
			<ul className='list'>{displayCustomers()}</ul>
		</div>
	)
}

export default CustomersList
