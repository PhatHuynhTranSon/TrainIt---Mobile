import axios from "axios";
import { getToken } from "../authentication";
import { ROOT_URL } from "./config";

export const getProjectSolutions = async (projectId) => {
    const token = await getToken();

    const solutions = await axios.get(
        ROOT_URL + `/projects/${projectId}/solutions`,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(response => response.data)
    .then(data => data.solution_ids);

    return solutions;
}

export const getSolutionWithId = async (projectId, solutionId) => {
    const token = await getToken();

    const solution = await axios.get(
        ROOT_URL + `/projects/${projectId}/solutions/${solutionId}`,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        }
    )
    .then(response => response.data);

    return solution;
}

export const getSolutionsWithIds = async (projectId, solutionIds) => {
    const promiseArray = solutionIds.map(solutionId => getSolutionWithId(projectId, solutionId));
    const solutions = await Promise.all(promiseArray);

    return solutions;
}

