import { SET_CURRENT_USER } from '../actiongenerators/action-constants';

const userInitialState = {
    isAuthenticated: false,
    user: {}
};
const currentUser = (state = userInitialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: Object.keys(action.user).length > 0,
                user: action.user
            };
        default:
            return state;
    }
};

export default currentUser;