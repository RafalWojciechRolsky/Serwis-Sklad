import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { getServiceByRMAQuery } from '../../../queries/queries'
import ServiceDetailPageJSX from './ServiceDetailPageJSX'

const ServiceDetailPage = props => {
	const { loading, error, data } = useQuery(
		getServiceByRMAQuery,
		{
			variables: {
				number: parseInt(props.match.params.serviceID)
			}
		}
	)

	if (error) {
		return <div>Error! {error.message}</div>
	}

	if (loading) {
		return <div>Loading... </div>
	}

	return <ServiceDetailPageJSX data={data.serviceByRMA} />
}

export default ServiceDetailPage
