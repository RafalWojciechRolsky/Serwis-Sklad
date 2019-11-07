import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { getCustomerByIdQuery } from '../../../queries/queries'

const CustomerPartOfServiceElementList = props => {
	if (props.details) {
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

						return (
							<Fragment>
								<span>{data.customerById.name}</span>
							</Fragment>
						)
					}}
				</Query>
			</Fragment>
		)
	}

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
						console.log('Error', error)
					}

					return (
						<Fragment>
							<span>{data.customerById.name}</span>
							<span>{data.customerById.mail}</span>
							<span>{data.customerById.phoneNumber}</span>
						</Fragment>
					)
				}}
			</Query>
		</Fragment>
	)
}

export default CustomerPartOfServiceElementList
