import axios from "axios";
import axiosWithAuth from "../utils/axiosAuth";

// for login action creator LoginPage.js
export const LOGIN_START = "LOGIN_START ";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// for getData action creator for FriendsList.js
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

// for addFriend action creator for FriendForm.js
export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log("POST Request Success", res.data);
      localStorage.setItem("token", res.data.payload); // or res.data.token
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload }); // or res.data?
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log("GOT DATA!", res.data);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err });
    });
};

// action for posting a new friend -- need authentication
export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  return axiosWithAuth()
    .post("http://localhost:5000/api/friends", friend)
    .then(res => {
      console.log("FRIEND POSTED!", friend, res.data);
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("SORRY! Can't add friend", err.response);
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
    });
};
