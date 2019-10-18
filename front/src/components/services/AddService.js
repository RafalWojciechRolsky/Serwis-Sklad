import React, { Component } from 'react'
// import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'

import {} from '../../queries/queries'

class AddService extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className=''>
				<h1>Add Service</h1>
			</div>
		)
	}
}

export default compose()(AddService)
// graphql(getCustomersQuery, { name: 'getCustomersQuery' }),
// graphql(addServiceMutation, {		name: 'addServiceMutation'	})
