import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { getCustomerByIdQuery } from '../../../queries/queries'

const CustomerPartOfServiceElementList = props => {
	return (
		<Fragment>
			<Query
				query={getCustomerByIdQuery}
				variables={{
					id: props.customerId
				}}>
				{({ loading, error, data }) => {
					if (loading) {
						return <div>Loading ...</div>
					}
					if (error) {
						console.log(error)
					}
					console.log(data)

					return (
						<Fragment>{data.customerById.name}</Fragment>
					)
				}}
			</Query>
		</Fragment>
	)
}

export default CustomerPartOfServiceElementList
