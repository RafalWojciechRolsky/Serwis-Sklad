import { gql } from 'apollo-boost'

const getServicesByModel = gql`
	query servicesByModel($model: String) {
		servicesByModel(model: $model) {
			id
			model
			brand
			RMA
			createdAt
			type
			customerId
			whereToFix
			type
			finishedAt
		}
	}
`

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
		}
	}
`
const updateCustomerById = gql`
	mutation updateCustomerById(
		$id: ID!
		$name: String
		$mail: String
		$phone: String
	) {
		updateCustomerById(
			id: $id
			name: $name
			phoneNumber: $phone
			mail: $mail
		) {
			id
		}
	}
`
const updateServiceById = gql`
	mutation updateServiceById(
		$id: ID!
		$model: String
		$brand: String
		$type: String
		$description: String
		$status: String
		$finishedAt: String
		$whereToFix: String
		$customerId: String
		$createdAt: String
		$price: Int
	) {
		updateServiceById(
			id: $id
			model: $model
			brand: $brand
			type: $type
			description: $description
			status: $status
			finishedAt: $finishedAt
			whereToFix: $whereToFix
			customerId: $customerId
			createdAt: $createdAt
			price: $price
		) {
			id
		}
	}
`

export {
	getCustomersQuery,
	getServicesQuery,
	getServiceByRMAQuery,
	getCustomerByNameQuery,
	getCustomerByAllQuery,
	addCustomer,
	addServiceMutation,
	getCustomerByIdQuery,
	updateCustomerById,
	updateServiceById,
	getServicesByModel
}
