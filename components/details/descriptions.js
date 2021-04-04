import React from "react";
import { Card, Divider, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        marginBottom: 20
    },
    heading: {
        fontSize: 30,
        fontWeight: "500",
        marginBottom: 10,
        color: "#7209B7"
    },
    text: {
        marginTop: 5,
        fontSize: 20
    }
})

const ProjectDescription = ({ description }) => {
    return (
        <Card style={styles.card}>
            <Text style={styles.heading}>Description</Text>
            <Divider />
            <Text style={styles.text}>{ description }</Text>
        </Card>
    )
}

export default ProjectDescription;