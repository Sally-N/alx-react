import React from "react";

const user = {
    email: '',
    password: ''
}

function logOut() { }

const UserContext = React.createContext({
    user, logOut
})