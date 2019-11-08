import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { getServicesQuery } from '../../queries/queries'

import ServiceElementList from './serviceListParts/ServiceElementList'
import ServiceHeader from './ServiceHeader.jsx'

const ServicesList = props => {
	console.log('ServicesList', props.location)

	const { data, error, loading } = useQuery(
		getServicesQuery
	)
	if (error) {
		return <div>Error! {error.message}</div>
	}

	if (loading) {
		return <div>Loading... </div>
	}

	const displayServices = () => {
		return data.servicesAll.map(el => {
			const customerPage = false
			return (
				<ServiceElementList
					key={el.id}
					customerPage={customerPage}
					{...el}
				/>
			)
		})
	}

	return (
		<div className='main-container'>
			<ServiceHeader />
			<ul className='list'>{displayServices()}</ul>
		</div>
	)
}

export default ServicesList
