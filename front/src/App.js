import React, { Component, Suspense } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks'

import { Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import ServiceDetailPageEdit from './components/services/serviceDetailPage/ServiceDetailPageEdit'
import CustomerDetailPageEdit from './components/customers/customerDetailPage/CustomerDetailPageEdit'
import ServicesList from './components/services/ServicesList'
import CustomersList from './components/customers/CustomersList'
import CustomerDetailPage from './components/customers/customerDetailPage/CustomerDetailPage'
import ServiceDetailPage from './components/services/serviceDetailPage/ServiceDetailPage'
import AddCustomer from './components/customers/AddCustomer'
import AddService from './components/services/addService/AddService'
import store from './components/store/index'
import Search from './components/search/Search'

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
					<ApolloProviderHooks client={client}>
						<div className='container'>
							<div className='menu__header'>
								<h1 className='menu__main-header'>
									Serwisy SKŁADMUZYCZNY
								</h1>
								<Link
									className='menu__button'
									to='/services'>
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
								<Link className='menu__button' to='/search'>
									Search
								</Link>
							</div>
							<Suspense fallback={<div>Loading!!...</div>}>
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
									<Route
										exact
										path='/customer/edit/:name'
										component={CustomerDetailPageEdit}
									/>
									<Route
										exact
										path='/serviceDetailPage'
										component={ServiceDetailPageEdit}
									/>
									<Route
										exact
										path='/search'
										component={Search}
									/>
								</Switch>
							</Suspense>
						</div>
					</ApolloProviderHooks>
				</ApolloProvider>
			</Provider>
		)
	}
}

export default App
