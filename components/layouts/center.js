import React from "react";
import { Layout } from "@ui-kitten/components"
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    layout: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      minHeight: "100vh"
    }
});

const CenteredLayout = ({ children }) => {
    return (
        <Layout style={styles.layout}>
        {
            children
        }
        </Layout>
    )
}

export default CenteredLayout;