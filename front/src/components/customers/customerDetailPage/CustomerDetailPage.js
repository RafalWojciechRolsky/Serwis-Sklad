import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { getCustomerByIdQuery } from '../../../queries/queries'
import ServiceElementList from '../../services/serviceListParts/ServiceElementList'
import { Link } from 'react-router-dom'

const CustomerDetailPage = props => {
	const {
		name,
		mail,
		phoneNumber,
		id
	} = props.location.state
	const withCustomer = true

	const { loading, error, data } = useQuery(
		getCustomerByIdQuery,
		{
			variables: {
				id: props.location.state.id
			}
		}
	)

	if (error) {
		return <div>Error! {error.message}</div>
	}

	if (loading) {
		return <div>Loading... </div>
	}

	console.log('CustomerDetailPage', props.location)

	const displayCustomerServices = () => {
		const customerPage = true

		return data.customerById.services.map(el => {
			return (
				<ServiceElementList
					key={el.id}
					customerPage={customerPage}
					{...el}
				/>
			)
		})
	}

	return (
		<div className='customerDetail'>
			<h1 className='customerDetail__header'>
				Karta klienta
			</h1>
			<div className='customerDetail__divTable'>
				<div className='customerDetail__divTableBody'>
					<div className='customerDetail__divTableRow'>
						<div className='customerDetail__divTableCell'>
							Imię i Nazwisko
						</div>
						<div className='customerDetail__divTableCell'>
							{name}
						</div>
					</div>
					<div className='customerDetail__divTableRow'>
						<div className='customerDetail__divTableCell'>
							Mail
						</div>
						<div className='customerDetail__divTableCell'>
							{mail}
						</div>
					</div>
					<div className='customerDetail__divTableRow'>
						<div className='customerDetail__divTableCell'>
							Numer telefonu
						</div>
						<div className='customerDetail__divTableCell'>
							{phoneNumber}
						</div>
					</div>
				</div>
			</div>
			<div className='customers-services'>
				<Link
					className='customerDetail__button customerDetail__button--btn customerDetail__button--link'
					to={{
						pathname: `/services/addService/`,
						state: {
							id,
							name,
							mail,
							phoneNumber,
							withCustomer
						}
					}}>
					Dodaj nowy serwis
				</Link>
				<Link
					className='customerDetail__button customerDetail__button--btn customerDetail__button--link'
					to={{
						pathname: `/customer/edit/${name}`,
						state: {
							id,
							name,
							mail,
							phoneNumber,
							withCustomer
						}
					}}>
					Edit
				</Link>

				<h2 className='customers-services__header'>
					Lista serwisów klienta
				</h2>
				<ul className='customers-services__list'>
					{displayCustomerServices()}
				</ul>
			</div>
		</div>
	)
}

export default CustomerDetailPage
