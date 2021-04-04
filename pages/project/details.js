import React from "react";
import ProjectDescription from "../../components/details/descriptions";
import ProjectType from "../../components/details/type";


const ProjectDetails = ({ project }) => {
    return (
        <>
            <ProjectType type={ project.type }/>
            <ProjectDescription description={ project.description }/>
        </>
    )
}

export default ProjectDetails;