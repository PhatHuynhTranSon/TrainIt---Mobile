import { Layout, TopNavigation, TopNavigationAction, Icon, Text, TabBar, Tab } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { getProject } from "../../api/projects";
import ProjectDescription from "../../components/details/descriptions";
import ProjectType from "../../components/details/type";
import ProjectDetails from "./details";
import ProjectSolutions from "./solutions";

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    topLayout: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#7209B7",
        padding: 50
    },
    heading: {
        fontSize: 40,
        color: "#ffffff"
    },
    bottomLayout: {
        flex: 2,
        padding: 20
    }
});

const ProjectDetailScreen = ({ route, navigation }) => {
    //Get parameters from route
    const { id } = route.params;

    //States
    const [project, setProject] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
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

    //Render Icon
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    //Render back action
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    const navigateBack = () => {
        navigation.goBack();
    }

    //Handle tab
    const onIndexSelected = index => setSelectedIndex(index);

    const renderTab = (index) => {
        if (index === 0) return <ProjectDetails project={project}/>;
        else return <ProjectSolutions project={project} />;
    }

    //Render
    return (
        <Layout style={styles.layout}>
            {
                project ? 
                <>
                    <TopNavigation title="Projects" alignment="center" accessoryLeft={BackAction}/>
                    <Layout style={styles.topLayout}>
                        <Text category="h1" style={styles.heading}>{ project.name }</Text>
                    </Layout>

                    <TabBar 
                        selectedIndex={selectedIndex}
                        onSelect={onIndexSelected}>
                        <Tab title="Details"/>
                        <Tab title="Solutions"/>
                    </TabBar>
                    
                    <Layout style={styles.bottomLayout}>
                    {
                        renderTab(selectedIndex)
                    }
                    </Layout>
                </> : null
            }
        </Layout>
    )
}

export default ProjectDetailScreen;