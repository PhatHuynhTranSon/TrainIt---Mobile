import React from "react";
import { Card } from "@ui-kitten/components";
import { Text } from "react-native";


const Alert = ({ status, message }) => {
    return (
        <Card status={status}>
            <Text>{ message }</Text>
        </Card>
    )
}

export default Alert;