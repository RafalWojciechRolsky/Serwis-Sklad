import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getCustomersQuery } from '../../queries/queries'
import CustomerElementList from './CustomerElementList'
import CustomerHeader from './CustomerHeader'

class CustomersList extends Component {
	displayCustomers = () => {
		var data = this.props.data
		if (data.loading) {
			return <div>Loading ...</div>
		} else {
			return data.customersAll.map(el => {
				return <CustomerElementList key={el.id} {...el} />
			})
		}
	}

	render() {
		return (
			<div className='main-container'>
				<CustomerHeader />
				<ul className='list'>{this.displayCustomers()}</ul>
			</div>
		)
	}
}

export default graphql(getCustomersQuery)(CustomersList)
