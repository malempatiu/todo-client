import { ADD_ERROR, REMOVE_ERROR, SET_CURRENT_USER } from './action-constants';

export const addError = (errorMessage) => {
    return {
        type: ADD_ERROR,
        errorMessage
    };
};

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    };
};

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export const logoutUser = () => {
      return (dispatch) => {
         localStorage.clear();
         dispatch(setCurrentUser({}));
      };
};

export const userAuthentication = (authType, userDetails) => {
    return (dispatch) => {
        return fetch(`http://localhost:8081/api/user/${authType}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    dispatch(addError(data.error));
                } else {
                    const { token, ...rest } = data;
                    localStorage.setItem('jwtToken', token);
                    dispatch(setCurrentUser(rest));
                };
            })
            .catch((err) => console.log(err));
    };
};