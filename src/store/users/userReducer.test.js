import userReducer from "./userReducer";
import {
    LOGIN_SUCCESS,
    LOGOUT,
    SET_CURRENT_USER
} from "./userActionTypes.ts";

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual({
            loading: false,
            error: "",
            loggedIn: false
        });
    });

    it('should store the user on login and set is loggedIn to true', () => {
        expect(userReducer({
                loading: false,
                error: "",
                loggedIn: false
            }, {
                type: LOGIN_SUCCESS,
                payload: {
                    "username": "plamen",
                    "role": "Admin"
                }
            }))
            .toEqual({
                loading: false,
                error: "",
                loggedIn: true,
                currentUser: {
                    "username": "plamen",
                    "role": "Admin"
                }
            });
    });

    it('should set currentUser to undefined and loggedIn to false on logout', () => {
        expect(userReducer({
                loading: false,
                error: "",
                loggedIn: true,
                currentUser: {
                    username: "plamen",
                }
            }, {
                type: LOGOUT,
            }))
            .toEqual({
                loading: false,
                error: "",
                loggedIn: false,
                currentUser: undefined
            });
    });

    it('should update currentUser value in the store', () => {
        expect(userReducer({
                loading: false,
                error: "",
                loggedIn: false,
                currentUser: null
            }, {
                type: SET_CURRENT_USER,
                payload: {
                    username: "plamen",
                    role: "Admin"
                }
            }))
            .toEqual({
                loading: false,
                error: "",
                loggedIn: true,
                currentUser: {
                    username: "plamen",
                    role: "Admin"
                }
            });
    });
});