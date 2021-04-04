import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

const styles = StyleSheet.create({
    pill: {
        borderRadius: 200,
        color: "#ffffff",
        padding: 10,
        alignSelf: "flex-start",
        marginVertical: 10
    },
    classification: {
        backgroundColor: "#2A9D8F"
    },
    regression: {
        backgroundColor: "#F4A261"
    }
});

const Pill = ({ label }) => {
    const renderStyle = label => {
        if (label === "classification") {
            return [styles.pill, styles.classification];
        } else {
            return [styles.pill, styles.regression];
        }
    }

    return <Text style={renderStyle(label)}>{ label }</Text>;
}

export default Pill;