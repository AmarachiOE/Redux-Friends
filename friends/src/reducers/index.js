// eventually use:
// import { combineReducers } from 'redux';
// import { friendsReducer } from "./friendsReducer";
// import { loginReducer } from "./loginReducer";

// export default combineReducers({
//     friendsReducer
// });


//import { /* import ACTION_TYPES*/ } from "../actions";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    return {
      ...state,
      error: "",
      loggingIn: true
    };
    case LOGIN_SUCCESS:
    return {
        ...state,
        error: "",
        loggingIn: false
    }
    default:
      return state;
  }
};

export default rootReducer;