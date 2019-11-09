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
	ADD_DESCRIPTION
} = constants

const ServiceDetailPageEdit = props => {
	// const {
	// 	name,
	// 	phoneNumber,
	// 	mail,
	// 	id
	// } = props.location.state

	const handleSubmitGraphQL = e => {
		e.preventDefault()
		// console.log(id)

		// props.updateServiceByRMA({
		// 	variables: {
		// 		id: id,
		// 		name: props.name,
		// 		mail: props.mail,
		// 		phone: props.phoneNumber
		// 	}
		// })
	}

	return (
		<Fragment>
			<div className='serviceDetail'>
				<h1 className='serviceDetail__header'>
					Karta Serwisu i opis usterki
				</h1>
				<div className='serviceDetail__rightBlock'>
					<div className='serviceDetail__divTable'>
						<div className='serviceDetail__divTableBody'>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Numer Naprawy:
								</div>
								<div className='serviceDetail__divTableCell'>
									{'RMA'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Brand
								</div>
								<div className='serviceDetail__divTableCell'>
									{'brand'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Model
								</div>
								<div className='serviceDetail__divTableCell'>
									{'model'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Rodzaj
								</div>
								<div className='serviceDetail__divTableCell'>
									{'type'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Klient
								</div>
								<div className='serviceDetail__divTableCell'>
									{`<CustomerPartOfServiceElementList
										customerId={customerId}
										details={details}
									/>`}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='serviceDetail__leftBlock'>
					<div className='serviceDetail__divTable'>
						<div className='serviceDetail__divTableBody'>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Status naprawy
								</div>
								<div className='serviceDetail__divTableCell'>
									{'status'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Data przyjęcia
								</div>
								<div className='serviceDetail__divTableCell'>
									{'createdAt'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Data wydania
								</div>
								<div className='serviceDetail__divTableCell'>
									{'finishedAt'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Gdzie serwisowane
								</div>
								<div className='serviceDetail__divTableCell'>
									{'whereToFix'}
								</div>
							</div>
							<div className='serviceDetail__divTableRow'>
								<div className='serviceDetail__divTableCell'>
									Cena naprawy
								</div>
								<div className='serviceDetail__divTableCell'>
									{'price'}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='serviceDetail__description'>
					<p className='serviceDetail__description-paragraph'>
						{'description'}
					</p>
				</div>
			</div>
			<div className='customerDetail'>
				<h1 className='customerDetail__header'>
					{`Edytuj dane naprawy {name}`}
				</h1>
				<form
					className='customerDetail__form'
					onSubmit={() => {}}>
					<label
						className='customerDetail__label'
						htmlFor='name'>
						Imię i Nazwisko
					</label>
					<input
						value={'props.name'}
						onChange={() => {}}
						name='name'
						className='customerDetail__input'
						type='text'
						placeholder={'name'}
					/>
					<label
						className='customerDetail__label'
						htmlFor='mail'>
						Kontakt mailowy
					</label>
					<input
						onChange={() => {}}
						value={'props.mail'}
						name='mail'
						className='customerDetail__input'
						type='text'
						placeholder={'mail'}
					/>
					<label
						phone='phoneNumber'
						className='customerDetail__label'
						htmlFor='phoneNumber'>
						Kontakt telefoniczny
					</label>
					<input
						onChange={() => {}}
						value={'props.phoneNumber'}
						name='phoneNumber'
						className='customerDetail__input'
						type='text'
						placeholder={'phoneNumber'}
					/>

					<LinkButton
						className='customerDetail__button customerDetail__button--btn'
						to={{
							pathname: `/`,
							state: {
								withCustomer: props.withCustomer
							}
						}}
						onClick={() => {}}>
						Aktualizuj dane klienta
					</LinkButton>
				</form>
			</div>
		</Fragment>
	)
}

const mapStateToProps = state => {
	return {
		name: state.name,
		mail: state.mail,
		phoneNumber: state.phoneNumber
	}
}

const mapDispatchToProps = dispatch => {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	graphql(updateServiceByRMA, {
		name: 'updateServiceByRMA'
	})(ServiceDetailPageEdit)
)
