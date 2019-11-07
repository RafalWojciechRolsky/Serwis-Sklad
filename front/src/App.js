import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import ServicesList from './components/services/ServicesList'
import CustomersList from './components/customers/CustomersList'
import CustomerDetailPage from './components/customers/CustomerDetailPage'
import ServiceDetailPage from './components/services/ServiceDetailPage'
import AddCustomer from './components/customers/AddCustomer'
import AddService from './components/services/addService/AddService'
import store from './components/store/index'

// Apollo client setup
const client = new ApolloClient({
	uri: 'http://localhost:4000/g'
})

class App extends Component {
	render() {
		const id = 'idStatic'
		const name = 'nameStatic'
		const mail = 'mailStatic'
		const phoneNumber = 'phoneNumberStatic'

		return (
			<Provider store={store}>
				<ApolloProvider client={client}>
					<div className='container'>
						<div className='menu__header'>
							<h1 className='menu__main-header'>
								Serwisy SKŁADMUZYCZNY
							</h1>
							<Link className='menu__button' to='/services'>
								Sewisy
							</Link>
							<Link
								className='menu__button'
								to='/customers'>
								Klienci
							</Link>

							<Link
								className='menu__button'
								to={{
									pathname: `/customer/addCustomer/`,
									state: { id, name, mail, phoneNumber }
								}}>
								Nowy Serwis
							</Link>
						</div>
						<Switch>
							<Route
								exact
								path='/'
								component={ServicesList}
							/>
							<Route
								exact
								path='/services'
								component={ServicesList}
							/>
							<Route
								exact
								path='/customers'
								component={CustomersList}
							/>
							<Route
								exact
								path='/services/RMA/:serviceID'
								component={ServiceDetailPage}
							/>
							<Route
								exact
								path='/customer/addCustomer/'
								component={AddCustomer}
							/>
							<Route
								exact
								path='/customer/:name'
								component={CustomerDetailPage}
							/>
							<Route
								exact
								path='/services/addService/'
								component={AddService}
							/>
						</Switch>
					</div>
				</ApolloProvider>
			</Provider>
		)
	}
}

export default App
