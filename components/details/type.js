import React from "react";
import { Card, Divider, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import Pill from "../pill";

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

const ProjectType = ({ type }) => {
    return (
        <Card style={styles.card}>
            <Text style={styles.heading}>Type</Text>
            <Divider />
            <Pill label={ type }/>
        </Card>
    )
}

export default ProjectType;