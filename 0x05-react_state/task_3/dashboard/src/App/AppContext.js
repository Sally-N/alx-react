import React from "react";

export const user = {
    email: '',
    password: '',
    isLoggedIn: false
};

export function logOut() { }

export const UserContext = React.createContext({
    user,
    logOut
});