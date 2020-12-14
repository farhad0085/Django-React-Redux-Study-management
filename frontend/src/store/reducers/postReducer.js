import * as Types from "../actions/actionTypes";

const initialState = {
	data: [],
	errors: {},
};

function postReducer(state = initialState, action) {
	switch (action.type) {
		case Types.POST_DATA_LOADED: {
			return {
				...state,
				data: action.payload,
			};
		}
		case Types.POST_CREATED: {
			return {
				...state,
				data: action.payload,
			};
		}
		case Types.POST_CREATE_ERROR: {
			return {
				...state,
				errors: action.payload,
			};
		}
		case Types.POST_DATA_LOAD_ERROR: {
			return {
				...state,
				data: {},
				error: action.payload,
			};
		}
		default:
			return state;
	}
}

export default postReducer;
