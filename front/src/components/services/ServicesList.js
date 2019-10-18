import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getServicesQuery } from '../../queries/queries'

import ServiceElementList from './ServiceElementList'
import ServiceHeader from './ServiceHeader'

class ServicesList extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	displayServices = () => {
		var data = this.props.data
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

	render() {
		return (
			<div className='main-container'>
				<ServiceHeader />
				<ul className='list'>{this.displayServices()}</ul>
			</div>
		)
	}
}

export default graphql(getServicesQuery)(ServicesList)
