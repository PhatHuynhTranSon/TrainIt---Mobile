import { BottomNavigation, BottomNavigationTab, Layout } from "@ui-kitten/components";
import React from "react";
import AllProjects from "./allprojects";


const Hub = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    //Function to render correct page
    const renderHub = (index) => {
        if (index === 0) {
            return <AllProjects navigation={navigation}/>;
        } else {
            return null;
        }
    }

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ flex: 1 }}>
                {
                    renderHub(selectedIndex)
                }
            </Layout>

            <BottomNavigation
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <BottomNavigationTab title="Projects"/>
                <BottomNavigationTab title="Tokens" />
            </BottomNavigation>
        </Layout>
    )
}

export default Hub;