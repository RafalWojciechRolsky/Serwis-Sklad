import { createStore } from 'redux'

const initialState = {
	name: 'test name',
	mail: 'test mail',
	phoneNumber: 'test phone number'
}

const reducer = (state = initialState, action) => {
	console.log('reducer', action)
	return state
}

const store = createStore(reducer)

export default store
