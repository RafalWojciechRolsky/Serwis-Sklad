const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RMASchema = new Schema({
	numberOfServices: Number
})

module.exports = mongoose.model('RMA', RMASchema)
