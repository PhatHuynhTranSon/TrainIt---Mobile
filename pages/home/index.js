import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import CenteredLayout from '../../components/layouts/center';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginVertical: 10
    }
})

const HomeScreen = ({ navigation }) => {
    function onLogInPressed() {
        navigation.navigate("Login");
    }

    function onSignUpPressed() {
        navigation.navigate("Signup");
    }

    return (
        <CenteredLayout>
            <Text category='h1'>Welcome to Trainee</Text>

            <Button 
                status="primary" 
                style={styles.button}
                onPress={onLogInPressed}>
                Log in
            </Button>

            <Button 
                status="primary" 
                style={styles.button}
                onPress={onSignUpPressed}>
                Sign up
            </Button>
        </CenteredLayout>
    )
};

export default HomeScreen;