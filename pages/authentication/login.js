import { Button, Input, Layout, Text, TopNavigation, TopNavigationAction, Icon, Spinner } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { login } from "../../api/authentication";
import Alert from "../../components/alert";
import CenteredLayout from "../../components/layouts/center";
import { setToken } from "../../authentication";

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

const LoginPage = ({ navigation }) => {
    //States
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    //Input handler
    const onEmailChange = (string) => {
        setEmail(string);
    }

    const onPasswordChange = (string) => {
        setPassword(string);
    }

    const onLoginPressed = () => {
        setLoading(true);
        login(email, password)
            .then(async (data) => {
                //Successful -> Set token
                const { access_token } = data;
                setToken(access_token);

                //Navigate to home screen
                navigation.navigate("Hub");
            })
            .catch(error => {
                //Error
                if (error.response) {
                    const { data } = error.response;
                    const { message } = data;
                    setErrorMessage(message);
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }

    //Navigations
    const navigateBack = () => {
        navigation.goBack();
    }

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <Layout style={{ padding: 20, flex: 1 }}>
            <TopNavigation title="Log in" alignment="center" accessoryLeft={BackAction}/>
            {
                errorMessage ? 
                <Alert status="danger" message={errorMessage}/> : null
            }
            {
                loading ? 
                <CenteredLayout>
                    <Spinner status="primary" size="giant" />
                </CenteredLayout> :
                <>
                    <Text category="h1" style={styles.title}>Log in to Trainee</Text>
                    <Text style={styles.label}>Email</Text>
                    <Input 
                        placeholder="Enter your username"
                        value={email}
                        onChangeText={onEmailChange}/>

                    <Text style={styles.label}>Password</Text>
                    <Input 
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        onChangeText={onPasswordChange}
                        style={styles.input}/>

                    <Button onPress={onLoginPressed}>Log in</Button>
                </>
            }
        </Layout>
    )
}

export default LoginPage;