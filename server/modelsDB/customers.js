const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
	name: String,
	mail: String,
	phoneNumber: String
})

module.exports = mongoose.model('Customer', customerSchema)
