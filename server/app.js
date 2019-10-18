const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
// const dotenv = require('dotenv')

const app = express()
app.use(cors())

// mongodb+srv://raaf:<password>@cluster0-oyjol.azure.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect(
	'mongodb+srv://raaf:5ScqivAsgFYpjGH@cluster0-oyjol.azure.mongodb.net/serwis-sklad?retryWrites=true&w=majority',
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false
	}
)

mongoose.connection.once('open', () => {
	console.log('connected to mongodb!')
})

app.use(
	'/g',
	graphqlHTTP({
		schema,
		graphiql: true
	})
)

app.listen(4000, () => {
	console.log('server is running on 4000 port')
})
