import React from 'react'
import { graphql } from 'react-apollo'
import { getServicesQuery } from '../../queries/queries'

import ServiceElementList from './ServiceElementList'
import ServiceHeader from './ServiceHeader'

const ServicesList = props => {
	const displayServices = () => {
		let data = props.data
		if (data.loading) {
			return <div>Loading ...</div>
		} else {
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
	}

	return (
		<div className='main-container'>
			<ServiceHeader />
			<ul className='list'>{displayServices()}</ul>
		</div>
	)
}

export default graphql(getServicesQuery)(ServicesList)
