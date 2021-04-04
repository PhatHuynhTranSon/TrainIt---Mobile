import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { getProject } from "../../api/projects";

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    topLayout: {
        flex: 1,
        backgroundColor: "#7209B7"
    },
    bottomLayout: {
        flex: 2
    }
});

const ProjectDetailScreen = ({ route, navigation }) => {
    //Get parameters from route
    const { id } = route.params;

    //States
    const [project, setProject] = React.useState(null);
    const [error, setErrorMessage] = React.useState(null);

    //Get data
    React.useEffect(() => {
        getProject(id)
            .then(project => setProject(project))
            .catch(error => {
                const message = error.response.data.message;
                setErrorMessage(message);

                //Unauthorized
                if (error.response.status === 401 || error.response.status === 422) {
                    setToken(null)
                        .then(() => navigation.navigate("Login"));
                }
            })
    }, []);

    //Render
    return (
        <Layout style={styles.layout}>
            <Layout style={styles.topLayout}>

            </Layout>

            <Layout style={styles.bottomLayout}>

            </Layout>
        </Layout>
    )
}

export default ProjectDetailScreen;