import { gql } from 'apollo-boost'

const getCustomersQuery = gql`
	query getCustomersAll {
		customersAll {
			id
			name
			mail
			phoneNumber
			services {
				RMA
			}
		}
	}
`

const getCustomerByNameQuery = gql`
	query getCustomerByName($name: String!) {
		customerByName(name: $name) {
			name
			phoneNumber
			mail
			id
			services {
				RMANumber
				id
				RMA
				brand
				model
				createdAt
				finishedAt
				price
				whereToFix
			}
		}
	}
`
const getCustomerByAllQuery = gql`
	query getCustomerByAll(
		$name: String!
		$mail: String!
		$phone: String!
	) {
		customerByAll(
			name: $name
			mail: $mail
			phoneNumber: $phone
		) {
			id
			name
			mail
			phoneNumber
		}
	}
`

const getCustomerByIdQuery = gql`
	query getCustomerById($id: ID!) {
		customerById(id: $id) {
			name
			mail
			phoneNumber
			services {
				RMANumber
				id
				RMA
				brand
				model
				createdAt
				finishedAt
				price
				whereToFix
			}
		}
	}
`

const getServiceByRMAQuery = gql`
	query getServiceByRMA($number: Int!) {
		serviceByRMA(RMANumber: $number) {
			id
			RMA
			whereToFix
			finishedAt
			status
			RMANumber
			model
			brand
			createdAt
			description
			price
			type
			finishedAt
			isActive
			customerId
		}
	}
`

const getServicesQuery = gql`
	query getServicesAll {
		servicesAll {
			id
			RMA
			RMANumber
			model
			brand
			createdAt
			description
			price
			type
			finishedAt
			isActive
			customerId
		}
	}
`
const addCustomer = gql`
	mutation addCustomer(
		$name: String!
		$mail: String!
		$phone: String!
	) {
		addCustomer(
			name: $name
			mail: $mail
			phoneNumber: $phone
		) {
			name
			mail
			phoneNumber
			id
		}
	}
`

const addServiceMutation = gql`
	mutation addService(
		$model: String!
		$brand: String!
		$type: String!
		$description: String!
		$whereToFix: String!
		$customerId: String!
	) {
		addService(
			model: $model
			brand: $brand
			description: $description
			type: $type
			customerId: $customerId
			whereToFix: $whereToFix
		) {
			id
			model
			brand
			type
			whereToFix
			RMA
			createdAt
			description
			price
			status
			internalAttention
			isActive
			customerId
		}
	}
`

// const addServiceMutation = gql`
// 	mutation addService(
// 		$model: String!
// 		$brand: String!
// 		$description: String!
// 		$type: String!
// 		$customerId: String!
// 	) {
// 		addService(
// 			model: $model
// 			brand: $brand
// 			description: $description
// 			type: $type
// 			customerId: $customerId
// 		) {
// 			id
// 			model
// 			brand
// 			RMA
// 			description
// 			type
// 			customerId {
// 				id
// 				name
// 			}
// 		}
// 	}
// `

// const getServiceQueryByRMA = gql`
// 	query getServiceQueryByRMA($RMANumber: RMANumber) {
// 		serviceByRMA(RMANumber: $RMANumber) {
// 			id
// 			model
// 			brand
// 			RMA
// 			description
// 			type
// 			customerId {
// 				id
// 				name
// 			}
// 				}
// 			}
// 		}
// 	}
// `

export {
	getCustomersQuery,
	getServicesQuery,
	getServiceByRMAQuery,
	getCustomerByNameQuery,
	getCustomerByAllQuery,
	addCustomer,
	addServiceMutation,
	getCustomerByIdQuery
}
