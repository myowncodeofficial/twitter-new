import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../firebase.init';

const useLoggedInUser = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        fetch(`https://twitter-new-weld.vercel.app/loggedInUser?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setLoggedInUser(data)
        })
    }, [email, loggedInUser])

    return [loggedInUser, setLoggedInUser];

};

export default useLoggedInUser;