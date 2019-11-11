import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getServicesByModel } from '../../queries/queries'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import constants from '../store/constants'

import ServiceElementList from '../services/serviceListParts/ServiceElementList'

const {
	ADD_MODEL,
	ADD_BRAND,
	ADD_TYPE,
	ADD_WHERE_TO_FIX,
	ADD_DESCRIPTION,
	ADD_CUSTOMER_ID,
	ADD_STATUS,
	ADD_CREATE_AT,
	ADD_FINISHED_AT,
	ADD_PRICE
} = constants

const Search = props => {
	const customerPage = false
	// const [filter, setFilter] = useState('')

	// const handleChange = e => {
	// 	setFilter(e.target.value)
	// 	console.log(filter)
	// }

	const handleSubmitSearch = e => {
		e.preventDefault()
		// console.log(typeof props.getServicesByModel, '!!')
		// props.servicesByModel({
		// 	variables: {
		// 		model: 'Tele'
		// 	}
		// })

		// setFilter('')
		console.log(props.data)
	}

	const displaySearch = () => {
		if (!props.data.loading) {
			return props.data.servicesByModel.map(el => {
				console.log(el)

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
		<div>
			<div>
				<form onSubmit={props.handleChangeModel}>
					<label htmlFor='model' />
					<input
						value={props.model}
						name='model'
						type='text'
						onChange={props.handleChangeModel}
						placeholder='Search'
					/>
				</form>
			</div>

			<ul className='list'>{displaySearch()}</ul>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		model: state.model
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChangeModel: e => {
			const action = {
				type: ADD_MODEL,
				model: e.target.value
			}
			dispatch(action)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	graphql(getServicesByModel, {
		options: props => {
			return {
				variables: {
					model: props.model
				}
			}
		}
	})(Search)
)
