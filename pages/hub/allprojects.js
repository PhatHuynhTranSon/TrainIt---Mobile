import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import { getAllProjects } from "../../api/projects";
import { setToken } from "../../authentication";
import Alert from "../../components/alert";
import ProjectCard from "../../components/project/card";

const styles = StyleSheet.create({
    layout: {
        padding: 20,
        flex: 1
    },
    heading: {
        marginVertical: 20
    },
    subheading: {
        marginBottom: 20
    }
});

const AllProjects = ({ navigation }) => {
    //Internal state
    const [projects, setProjects] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState("");
    const isFocused = useIsFocused();

    //On loaded -> Get all projects
    React.useState(() => {
        getAllProjects()
            .then(allProjects => {
                setProjects(allProjects);
            })
            .catch(error => {
                if (error.response) {
                    const message = error.response.data.message;
                    setErrorMessage(message);

                    //Unauthorized
                    if (error.response.status === 401 || error.response.status === 422) {
                        setToken("")
                            .then(() => navigation.navigate("Login"));
                    }
                } else {
                    setErrorMessage("An unknown error occured");
                }
            });
    }, [isFocused]);

    //Render
    return (
        <Layout style={styles.layout}>
            <Text category="h1" style={styles.heading}>All projects</Text>
            <Text style={styles.subheading}>View all your project here</Text>
            {
                errorMessage ? 
                <Alert status="danger" message={errorMessage} /> : null
            }
            {
                projects ?
                <>
                { projects.map((project, index) => <ProjectCard 
                    index={index} project={project} 
                    navigation={navigation}
                    key={index}/>) 
                }
                </>
                : null
            }
        </Layout>
    )
}

export default AllProjects;