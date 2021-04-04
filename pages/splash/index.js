import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

const SplashScreen = () => {
    return (
        <Layout style={styles.layout}>
            <Text category="h1">Trainee</Text>
        </Layout>
    )
}

export default SplashScreen;