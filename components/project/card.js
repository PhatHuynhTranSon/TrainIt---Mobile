import { Card, Text } from "@ui-kitten/components";
import Pill from "../pill";
import React from "react";

const ProjectCard = ({ project, navigation, key }) => {
    //Render
    return (
        <Card 
            key={key}
            onPress={() => navigation.navigate("ProjectDetail", { id: project.id })}>
            <Text category="h2">{ project.name }</Text>
            <Text>{ project.location_name }</Text>
            <Pill label={ project.type }/>
        </Card>
    )
}

export default ProjectCard;