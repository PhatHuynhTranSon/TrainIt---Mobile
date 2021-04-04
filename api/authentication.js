import { ROOT_URL } from "./config";
import axios from "axios";


export function login(email, password) {
    return (
        axios
            .post(
                ROOT_URL + "/users/signin",
                {
                    email,
                    password
                }
            )
            .then(response => response.data)
    );
}