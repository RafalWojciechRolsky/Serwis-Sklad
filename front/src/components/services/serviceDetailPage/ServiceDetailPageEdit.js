import React, { Fragment } from 'react'
import LinkButton from '../../LinkButton'
import { connect } from 'react-redux'
import constants from '../../store/constants'
import { updateServiceByRMA } from '../../../queries/queries'
import { graphql } from 'react-apollo'

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

const ServiceDetailPageEdit = props => {
	const {
		RMA,
		RMANumber,
		brand,
		model,
		type,
		customerId,
		status,
		createdAt,
		finishedAt,
		whereToFix,
		price,
		description
	} = props.location.state

	const handleSubmitGraphQL = e => {
		e.preventDefault()

		props.updateServiceByRMA({
			variables: {
				RMANumer: RMANumber,
				model: props.model,
				brand: props.brand,
				type: props.type,
				description: props.description,
				price: props.price,
				status: props.status,
				finishedAt: props.finishedAt,
				whereToFix: props.whereToFix,
				customerId: props.customerId,
				createdAt: props.createdAt
			}
		})
	}

	return (
		<Fragment>
			<div className='customerDetail'>
				<h1 className='customerDetail__header'>
					{`Edytuj dane naprawy ${RMA}`}
				</h1>
				<form
					className='customerDetail__form'
					onSubmit={handleSubmitGraphQL}>
					<label
						className='customerDetail__label'
						htmlFor='RMA'>
						Numer naprawy
					</label>
					<input
						value={RMA}
						onChange={() => {}}
						name='RMA'
						className='customerDetail__input'
						type='text'
						placeholder={RMA}
					/>
					<label
						className='customerDetail__label'
						htmlFor='brand'>
						Brand
					</label>
					<input
						value={props.brand}
						onChange={props.handleChangeBrand}
						name='brand'
						className='customerDetail__input'
						type='text'
						placeholder={brand}
					/>
					<label
						className='customerDetail__label'
						htmlFor='model'>
						Model
					</label>
					<input
						value={props.model}
						onChange={props.handleChangeModel}
						name='model'
						className='customerDetail__input'
						type='text'
						placeholder={model}
					/>
					<label
						className='customerDetail__label'
						htmlFor='type'>
						Rodzaj
					</label>
					<input
						value={props.type}
						onChange={props.handleChangeType}
						name='type'
						className='customerDetail__input'
						type='text'
						placeholder={type}
					/>
					<label
						className='customerDetail__label'
						htmlFor='customerId'>
						Klient
					</label>
					<input
						value={props.customerId}
						onChange={props.handleChangeCustomer}
						name='customerId'
						className='customerDetail__input'
						type='text'
						placeholder={customerId}
					/>
					<label
						className='customerDetail__label'
						htmlFor='status'>
						Status naprawy
					</label>
					<input
						value={props.status}
						onChange={props.handleChangeStatus}
						name='status'
						className='customerDetail__input'
						type='text'
						placeholder={status}
					/>
					<label
						className='customerDetail__label'
						htmlFor='createdAt'>
						Data przyjęcia
					</label>
					<input
						value={props.createdAt}
						onChange={props.handleChangeCreateAt}
						name='createdAt'
						className='customerDetail__input'
						type='text'
						placeholder={createdAt}
					/>
					<label
						className='customerDetail__label'
						htmlFor='finishedAt'>
						Data wydania
					</label>
					<input
						value={props.finishedAt}
						onChange={props.handleChangeFinishedAt}
						name='finishedAt'
						className='customerDetail__input'
						type='text'
						placeholder={finishedAt}
					/>
					<label
						className='customerDetail__label'
						htmlFor='whereToFix'>
						Gdzie serwisowane
					</label>
					<input
						value={props.whereToFix}
						onChange={props.handleChangeWhereToFix}
						name='whereToFix'
						className='customerDetail__input'
						type='text'
						placeholder={whereToFix}
					/>
					<label
						className='customerDetail__label'
						htmlFor='price'>
						Cena naprawy
					</label>
					<input
						value={props.price}
						onChange={props.handleChangePrice}
						name='price'
						className='customerDetail__input'
						type='text'
						placeholder={price}
					/>
					<label
						className='customerDetail__label'
						htmlFor='description'>
						Opis usterki
					</label>
					<textarea
						rows='15'
						name='description'
						value={props.description}
						onChange={props.handleChangeDescription}
						className='customerDetail__input'
						type='text'
						placeholder={description}
					/>

					<LinkButton
						className='customerDetail__button customerDetail__button--btn'
						to={{
							pathname: `/`
						}}
						onClick={handleSubmitGraphQL}>
						Aktualizuj dane klienta
					</LinkButton>
				</form>
			</div>
		</Fragment>
	)
}

const mapStateToProps = state => {
	return {
		brand: state.brand,
		model: state.model,
		type: state.type,
		customerId: state.customerId,
		status: state.status,
		createdAt: state.createdAt,
		finishedAt: state.finishedAt,
		whereToFix: state.whereToFix,
		price: state.price,
		description: state.description
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleChangeBrand: e => {
			const action = {
				type: ADD_BRAND,
				brand: e.target.value
			}
			dispatch(action)
		},
		handleChangeModel: e => {
			const action = {
				type: ADD_MODEL,
				model: e.target.value
			}
			dispatch(action)
		},
		handleChangeType: e => {
			const action = {
				type: ADD_TYPE,
				_type: e.target.value
			}
			dispatch(action)
		},
		handleChangeWhereToFix: e => {
			const action = {
				type: ADD_WHERE_TO_FIX,
				whereToFix: e.target.value
			}
			dispatch(action)
		},
		handleChangeDescription: e => {
			const action = {
				type: ADD_DESCRIPTION,
				description: e.target.value
			}
			dispatch(action)
		},
		handleChangeCustomer: e => {
			const action = {
				type: ADD_CUSTOMER_ID,
				customerId: e.target.value
			}
			dispatch(action)
		},
		handleChangeStatus: e => {
			const action = {
				type: ADD_STATUS,
				status: e.target.value
			}
			dispatch(action)
		},
		handleChangeCreateAt: e => {
			const action = {
				type: ADD_CREATE_AT,
				createdAt: e.target.value
			}
			dispatch(action)
		},
		handleChangeFinishedAt: e => {
			const action = {
				type: ADD_FINISHED_AT,
				finishedAt: e.target.value
			}
			dispatch(action)
		},
		handleChangePrice: e => {
			const action = {
				type: ADD_PRICE,
				price: e.target.value
			}
			dispatch(action)
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	graphql(updateServiceByRMA, {
		name: 'updateServiceByRMA'
	})(ServiceDetailPageEdit)
)
