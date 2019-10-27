import { createStore } from 'redux'
import constants from './constants'

const { ADD_NAME, ADD_MAIL, ADD_PHONE } = constants

const initialState = {
	name: '1',
	mail: '2',
	phoneNumber: '3'
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NAME:
			return {
				...state,
				name: action.name
			}
		case ADD_MAIL:
			return {
				...state,
				mail: action.mail
			}
		case ADD_PHONE:
			return {
				...state,
				phoneNumber: action.phoneNumber
			}
		default:
			return state
	}
}

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
