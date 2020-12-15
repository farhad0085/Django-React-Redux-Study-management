import * as Types from "../actions/actionTypes";

const initialState = {
	data: [],
    errors: {},
    next: null,
    previous: null,
    loading: true,
};

function postReducer(state = initialState, action) {
	switch (action.type) {
		case Types.POST_DATA_LOADED: {
			return {
				...state,
				data: action.payload.results,
				next: action.payload.next,
				previous: action.payload.previous
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
		case Types.POST_DATA_LOADING: {

            return {
				...state,
				loading: action.payload,
			};
		}
		default:
			return state;
	}
}

export default postReducer;
