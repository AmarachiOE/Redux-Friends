import axios from "axios";
import axiosWithAuth from "../utils/axiosAuth";

// for login action creator LoginPage.js
export const LOGIN_START = "LOGIN_START ";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// for getData action creator for FriendsList.js
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post("http://localhost:5000/api/login", credentials)
    .then( res => {
        console.log("POST Request Success", res.data);
        localStorage.setItem("token", res.data.payload); // or res.data.token
        dispatch({ type: LOGIN_SUCCESS, payload: res.data }); // not res.data.payload
    })
    .catch( err => {
        console.log(err.resolve);
        dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log("GOT DATA!", res.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAILURE, payload: err });
      });
  };
  