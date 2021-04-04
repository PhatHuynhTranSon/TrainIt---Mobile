import { Button, Input, Layout, Text, TopNavigation, TopNavigationAction, Icon } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        marginVertical: 20
    },

    label: {
        fontSize: 20,
        marginVertical: 20
    },

    input: {
        marginBottom: 20
    }
})

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const SignUpPage = ({ navigation }) => {
    const navigateBack = () => {
        navigation.goBack();
    }

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <Layout style={{ padding: 20 }}>
            <TopNavigation title="Sign up" alignment="center" accessoryLeft={BackAction}/>
            <Text category="h1" styles={styles.title}>Sign up to Trainee</Text>

            <Text style={styles.label}>Username</Text>
            <Input 
                placeholder="Enter your username"/>

            <Text style={styles.label}>Email</Text>
            <Input 
                placeholder="Enter your email"/>

            <Text style={styles.label}>Password</Text>
            <Input 
                placeholder="Enter your password"
                secureTextEntry={true}/>

            <Text style={styles.label}>Confirm password</Text>
            <Input 
                placeholder="Confirm your password"
                secureTextEntry={true}
                style={styles.input}/>

            <Button>Log in</Button>
        </Layout>
    )
}

export default SignUpPage;