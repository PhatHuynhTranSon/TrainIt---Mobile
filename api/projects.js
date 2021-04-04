import axios from "axios";
import { ROOT_URL } from "./config";
import { getToken } from "../authentication";


export const getAllProjects = async () => {
    //Get the token and make request
    const token = await getToken();

    //Make request
    const projects = await axios.get(
        ROOT_URL + "/projects",
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(response => response.data)
    .then(data => data.projects);

    return projects;
}

export const getProject = async (id) => {
    const token = await getToken();

    const project = await axios.get(
        ROOT_URL + `/projects/${id}`,
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(response => response.data)
    .then(data => data.project);

    return project;
}