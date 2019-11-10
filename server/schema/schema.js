const moment = require('moment')
const graphql = require('graphql')
const Service = require('../modelsDB/service')
const Customer = require('../modelsDB/customers')
const numberOfServices = require('../modelsDB/numberOfServices')
// const _ = require('lodash')

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean
} = graphql

const ServiceType = new GraphQLObjectType({
	name: 'Service',
	fields: () => ({
		id: { type: GraphQLID },
		model: { type: GraphQLString },
		brand: { type: GraphQLString },
		RMA: { type: GraphQLString },
		RMANumber: { type: GraphQLInt },
		createdAt: { type: GraphQLString },
		description: { type: GraphQLString },
		price: { type: GraphQLInt },
		type: { type: GraphQLString },
		status: { type: GraphQLString },
		finishedAt: { type: GraphQLString },
		whereToFix: { type: GraphQLString },
		internalAttention: { type: GraphQLString },
		customerId: { type: GraphQLString },
		isActive: { type: GraphQLBoolean }
	})
})

const CustomerType = new GraphQLObjectType({
	name: 'Customer',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		mail: { type: GraphQLString },
		phoneNumber: { type: GraphQLString },
		customerId: { type: GraphQLString },

		services: {
			type: new GraphQLList(ServiceType),
			resolve(parent, args) {
				return Service.find({
					customerId: parent.id
				})
			}
		}
	})
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		serviceById: {
			type: ServiceType,
			args: {
				id: { type: GraphQLID }
			},
			resolve(parent, args) {
				return Service.findById(args.id)
			}
		},
		servicesByModel: {
			type: new GraphQLList(ServiceType),
			args: {
				model: { type: GraphQLString }
			},
			resolve(parent, args) {
				return Service.find(
					{ model: args.model },
					(err, obj) => obj.model
				)
			}
		},
		servicesByBrand: {
			type: new GraphQLList(ServiceType),
			args: {
				brand: { type: GraphQLString }
			},
			resolve(parent, args) {
				return Service.find(
					{ brand: args.brand },
					(err, obj) => obj.brand
				)
			}
		},
		serviceByRMA: {
			type: ServiceType,
			args: {
				RMANumber: { type: GraphQLInt }
			},
			resolve(parent, args) {
				return Service.findOne({
					RMANumber: args.RMANumber
				})
			}
		},
		customerById: {
			type: CustomerType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Customer.findById(args.id)
			}
		},
		customerByName: {
			type: CustomerType,
			args: { name: { type: GraphQLString } },
			resolve(parent, args) {
				return Customer.findOne({ name: args.name })
			}
		},
		customerByPhone: {
			type: CustomerType,
			args: { phoneNumber: { type: GraphQLString } },
			resolve(parent, args) {
				return Customer.findOne({
					phoneNumber: args.phoneNumber
				})
			}
		},
		customerByMail: {
			type: CustomerType,
			args: { mail: { type: GraphQLString } },
			resolve(parent, args) {
				return Customer.findOne({ mail: args.mail })
			}
		},
		customerByAll: {
			type: CustomerType,
			args: {
				name: { type: GraphQLString },
				mail: { type: GraphQLString },
				phoneNumber: { type: GraphQLString }
			},
			resolve(parent, args) {
				return Customer.findOne({
					name: args.name,
					mail: args.mail,
					phoneNumber: args.phoneNumber
				})
			}
		},
		servicesAll: {
			type: new GraphQLList(ServiceType),
			resolve(parent, args) {
				return Service.find({})
			}
		},
		customersAll: {
			type: new GraphQLList(CustomerType),
			resolve(parent, args) {
				return Customer.find({})
			}
		}
	}
})

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		//////////////////////////////////////////////////////////////////////////////////////
		// DELETE CUSTOMER FROM DB
		deleteCustomer: {
			type: CustomerType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args) {
				Customer.findByIdAndDelete(
					args.id,
					(error, data) => {
						error
							? console.log(
									`Some error in deleting a Customer ID: ${args.id}`
							  )
							: console.log(
									`All data gone, no error. No Customer with ID: ${args.id}`
							  )
					}
				)

				return null
			}
		},

		//////////////////////////////////////////////////////////////////////////////////////
		// DELETE SERVICE FROM DB
		deleteService: {
			type: ServiceType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args) {
				Service.findByIdAndDelete(
					args.id,
					(error, data) => {
						error
							? console.log(
									`Some error in deleting a Service ID: ${args.id}`
							  )
							: console.log(
									`All data gone, no error. No Service with ID: ${args.id}`
							  )
					}
				)

				return null
			}
		},

		//////////////////////////////////////////////////////////////////////////////////////
		// SETTING SERVICE TO NOT ACTIVE
		setServiceToNotActive: {
			type: ServiceType,
			args: {
				RMANumber: { type: new GraphQLNonNull(GraphQLInt) },
				isActive: {
					type: new GraphQLNonNull(GraphQLBoolean)
				}
			},

			async resolve(parent, args) {
				let updateService = await Service.findOneAndUpdate(
					{ RMANumber: args.RMANumber },
					{ isActive: args.isActive },
					{ new: true },
					(err, obj) => obj.RMANumber
				)

				return await updateService.save()
			}
		},

		//////////////////////////////////////////////////////////////////////////////////////
		// UPDATING SERVICE DO DB
		updateServiceByRMANumber: {
			type: ServiceType,
			args: {
				RMANumber: { type: new GraphQLNonNull(GraphQLInt) },
				model: { type: GraphQLString },
				brand: { type: GraphQLString },
				type: { type: GraphQLString },
				description: { type: GraphQLString },
				price: { type: GraphQLInt },
				status: { type: GraphQLString },
				finishedAt: { type: GraphQLString },
				whereToFix: { type: GraphQLString },
				customerId: { type: GraphQLString },
				createdAt: { type: GraphQLString }
			},

			async resolve(parent, args) {
				console.log(args)

				let foundService = await Service.findOne(
					{ RMANumber: args.RMANumber },
					(err, obj) => obj.RMANumber
				)

				let updateService = await Service.findOneAndUpdate(
					{ RMANumber: args.RMANumber },
					{
						price: args.price
							? args.price
							: foundService.price,
						brand: args.brand
							? args.brand
							: foundService.brand,
						model: args.model
							? args.model
							: foundService.model,
						description: args.description
							? args.description
							: foundService.description,
						type: args.type ? args.type : foundService.type,
						status: args.status
							? args.status
							: foundService.status,
						finishedAt: args.finishedAt
							? args.finishedAt
							: foundService.finishedAt,
						whereToFix: args.whereToFix
							? args.whereToFix
							: foundService.whereToFix,
						customerId: args.customerId
							? args.customerId
							: foundService.customerId,
						createdAt: args.createdAt
							? args.createdAt
							: foundService.createdAt
					},
					{ new: true },
					(err, obj) => obj.RMANumber
				)

				return await updateService.save()
			}
		},

		//////////////////////////////////////////////////////////////////////////////////////
		// UPDATING CUSTOMER DO DB
		updateCustomerById: {
			type: CustomerType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				name: { type: GraphQLString },
				mail: { type: GraphQLString },
				phoneNumber: { type: GraphQLString }
			},
			async resolve(parent, args) {
				let foundCustomer = await Customer.findById(args.id)

				const updateCustomerById = await Customer.findByIdAndUpdate(
					args.id,
					{
						name: args.name
							? args.name
							: foundCustomer.name,
						mail: args.mail
							? args.mail
							: foundCustomer.mail,
						phoneNumber: args.phoneNumber
							? args.phoneNumber
							: foundCustomer.phoneNumber
					},
					{ new: true }
				)

				return await updateCustomerById.save()
			}
		},

		//////////////////////////////////////////////////////////////////////////////////////
		// ADDING CUSTOMER DO DB
		addCustomer: {
			type: CustomerType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				mail: { type: new GraphQLNonNull(GraphQLString) },
				phoneNumber: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve(parent, args) {
				let customer = new Customer({
					name: args.name,
					mail: args.mail,
					phoneNumber: args.phoneNumber
				})

				return customer.save()
			}
		},

		//////////////////////////////////////////////////////////////////////////////////////
		// ADDING SERVICE DO DB
		addService: {
			type: ServiceType,
			args: {
				model: { type: new GraphQLNonNull(GraphQLString) },
				brand: { type: GraphQLString },
				description: {
					type: GraphQLString
				},
				customerId: {
					type: GraphQLString
				},
				type: { type: GraphQLString },
				RMANumber: { type: GraphQLInt },
				RMA: { type: GraphQLString },
				createdAt: { type: GraphQLString },
				price: { type: GraphQLInt },
				finishedAt: { type: GraphQLString },
				whereToFix: { type: GraphQLString },
				internalAttention: { type: GraphQLString },
				isActive: { type: GraphQLBoolean }
			},
			async resolve(parent, args) {
				const items = await Service.countDocuments(
					{},
					(err, count) => count
				)
				let numberServices = new numberOfServices({
					numberOfServices: items + 1
				})
				numberOfServices.deleteMany({}, function(err) {
					err ? console.log(err) : console.log('Success')
				})

				numberServices.save()

				let service = new Service({
					type: args.type,
					model: args.model,
					brand: args.brand,
					description: args.description,
					RMANumber: items + 1,
					RMA: `RMA/${items +
						1}/${new Date().getFullYear()}`,
					createdAt: `${moment().format('DD-MM-YYYY')}`,
					price: null,
					status: 'Przyjęty do naprawy',
					finishedAt: null,
					whereToFix: args.whereToFix
						? args.whereToFix
						: 'Składmuzyczny',
					internalAttention: args.internalAttention
						? args.internalAttention
						: 'Brak uwag',
					customerId: args.customerId,
					isActive: true
				})

				return service.save()
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})
