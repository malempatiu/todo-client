import { ADD_ERROR, REMOVE_ERROR } from '../actiongenerators/action-constants';

const initialError = {
    error: null
};

const errors = (state = initialError, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                error: action.errorMessage
            };
        case REMOVE_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export default errors;