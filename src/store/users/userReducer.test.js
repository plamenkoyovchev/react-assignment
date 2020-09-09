import userReducer from "./userReducer";
import {
    LOGIN_SUCCESS
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
    })
});