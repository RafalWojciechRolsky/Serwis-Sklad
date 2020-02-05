require('dotenv').config()

const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
// const dotenv = require('dotenv')

const app = express()
app.use(cors())

const login = process.env.MONGODB_LOGIN
const password = process.env.MONGODB_PASSWORD
const host = process.env.MONGODB_HOST
const port = process.env.NODE_PORT

mongoose.connect(
	`mongodb+srv://${login}:${password}@${host}`,
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

app.listen(port, () => {
	console.log(`server is running on ${port} port`)
})
