const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
	RMA: String,
	model: String,
	brand: String,
	RMANumber: Number,
	createdAt: String,
	description: String,
	type: String,
	price: Number,
	status: String,
	finishedAt: String,
	whereToFix: String,
	internalAttention: String,
	customerId: String,
	isActive: Boolean
})

module.exports = mongoose.model('Service', serviceSchema)
