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

// const store = createStore(reducer)

const store = createStore(
	reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store
