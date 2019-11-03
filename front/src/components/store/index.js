import { createStore } from 'redux'
import constants from './constants'

const {
	ADD_NAME,
	ADD_MAIL,
	ADD_PHONE,
	ADD_MODEL,
	ADD_BRAND,
	ADD_TYPE,
	ADD_WHERE_TO_FIX,
	ADD_DESCRIPTION,
	ADD_ID
} = constants

const initialState = {
	name: '',
	mail: '',
	phoneNumber: '',
	id: '',
	model: '',
	brand: '',
	type: '',
	description: '',
	whereToFix: ''
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
		case ADD_MODEL:
			return {
				...state,
				model: action.model
			}
		case ADD_BRAND:
			return {
				...state,
				brand: action.brand
			}
		case ADD_TYPE:
			return {
				...state,
				type: action._type
			}
		case ADD_WHERE_TO_FIX:
			return {
				...state,
				whereToFix: action.whereToFix
			}
		case ADD_DESCRIPTION:
			return {
				...state,
				description: action.description
			}
		case ADD_ID:
			return {
				...state,
				id: action.id
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
