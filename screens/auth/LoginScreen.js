import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Button,
    Alert,
    Image,
    ImageBackground,
} from 'react-native'
import * as firebase from 'firebase';

// constructor define two variables: email and password
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    // Method that executes when user click Login button. When login fails, method alert the user about the error
    // invalid values are managed by firebase.Auth()
    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            });
    }

    // Method that executes when user click Create Account Link, it takes the user to the signup screen
    onCreateAccountPress = () => {
       this.props.navigation.navigate('Signup');
    }

    // Method that executes when user click Forgot Password Link, it takes the user to the Password Reset screen
    onForgotPasswordPress = () => {
        this.props.navigation.navigate('ForgotPassword');
    }

    // Views for Login Screen. Set ImageBackground, Logo, TextInput, Button, Links...
    render(){
        return (
                <ImageBackground source={require('./../../assets/images/rithmi_background.png')} style={styles.backgroundImage}>                    
                    <View style={styles.container}>
                        <Image source={require('./../../assets/images/rithmi_transparent_logo.png')} />
                        <View style={styles.whitespace}/>                       
                        <TextInput style={styles.input} 
                            value = {this.state.email} 
                            onChangeText = {(text) => {this.setState({email: text}) }}
                            placeholder= 'Email'
                            keyboardType= 'email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <View style={styles.whitespace}/>
                        <TextInput style={styles.input} 
                            value = {this.state.password} 
                            onChangeText = {(text) => {this.setState({password: text}) }}
                            placeholder = 'Password'
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <View style={styles.whitespace}/>
                        <View style={styles.whitespace}/>
                        <Button title="Login" onPress={this.onLoginPress}  />
                    </View>
                    <View style={styles.links}>
                    <TouchableHighlight onPress={this.onCreateAccountPress}>
                        <Text style={styles.textButton}>Create Account</Text>
                    </TouchableHighlight>
                    <View style={styles.whitespace}/>
                    <TouchableHighlight onPress={this.onForgotPasswordPress}>
                        <Text style={styles.textButton}>Forgot Password</Text>
                    </TouchableHighlight>
                    </View>
                </ImageBackground>
        )
    }
}

// Styles for the Views
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80, 
        marginLeft: 35,
        marginRight: 35,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    input: {
        width: '100%', 
        height: 40, 
        borderBottomWidth: 1,
    },
    whitespace: {
        paddingTop: 20,
    },
    button: {
        backgroundColor: 'skyblue',
        color: 'white',
        fontSize: 20,    
    },
    textButton: {
        color: 'blue',
        fontSize: 20,
        alignItems: 'center'
    },
    links: {
        flex: 1,
        alignItems: 'center',
    }
})