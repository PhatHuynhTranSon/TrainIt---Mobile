import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { getProjectSolutions, getSolutionsWithIds } from "../../api/solutions";

const ProjectSolutions = ({ project }) => {
    //Solutions
    const solutionIds = React.useRef();
    const intervalId = React.useRef();
    const previousSolutions = React.useRef([]);
    const [solutions, setSolutions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        getSolutions();
    }, []);

    function getSolutions() {
        //Stop retrieving solutions
        if (intervalId.current) {
            stopRetrievingSolutions();
        }

        //Show loading icons
        setLoading(true);

        //Get solution and remove loading icons
        getProjectSolutions(project.id)
            .then(solution_ids => {
                solutionIds.current = solution_ids;
                getSolutionDetails();
                startRetrievingSolutions();
            })
            .catch(error => {
                //TODO: Error handling
                setLoading(false);
            })
    }

    function mergeSolutions(previousSolutions, currentSolutions) {
        const currentSolutionIds = currentSolutions.map(solution => solution.solution.id);

        const previousExcludedSolutions = previousSolutions.filter(
            solution => { 
                return !currentSolutionIds.includes(solution.solution.id);
            }
        );

        const merged =  [
            ...previousExcludedSolutions, ...currentSolutions
        ];

        //Sort based on IDs descending
        const sorted = merged.sort((a, b) => b.solution.id - a.solution.id);

        return sorted;
    }

    function getSolutionDetails() {
        console.log("running");
        //First get all solutions from solution id
        getSolutionsWithIds(project.id, solutionIds.current)
            .then(solutionsData => {
                //Array of solution data
                const mergedSolutions = mergeSolutions(previousSolutions.current, solutionsData);
                previousSolutions.current = mergedSolutions;
                setSolutions(mergedSolutions);

                //Then remove solution ids where the state is completed
                //As all information will be collected
                const runningSolutions = solutionsData.filter(solution => solution.status !== "Completed");
                const runningSolutionIds = runningSolutions.map(solution => solution.solution.id);
                if (runningSolutions.length === 0) {
                    //If no solutions are left -> Clear interval
                    stopRetrievingSolutions();
                }

                //Set the solution ids for next iteration
                solutionIds.current = runningSolutionIds;

                //Set loading to false
                setLoading(false);
            })
            .catch(error => {
                //TODO: Error handling
                setLoading(false);
            });
    }

    function startRetrievingSolutions() {
        const id = setInterval(getSolutionDetails, 60000);
        intervalId.current = id;
    }

    function stopRetrievingSolutions() {
        clearInterval(intervalId.current);
    }

    //Get ids
    React.useEffect(() => {
        getSolutions();
    }, []);

    //Render
    return (
        <Layout>
        {
            solutions.map(solution => <Text>{ solution.type }</Text>)
        }
        </Layout>
    )
}

export default ProjectSolutions;