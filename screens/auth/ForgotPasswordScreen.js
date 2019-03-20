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
    ImageBackground
} from 'react-native'
import * as firebase from 'firebase';

export default class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    onResetPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert('Password reset email has been sent, check your inbox to proceed')
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    render(){
        return (
            <ImageBackground source={require('./../../assets/images/rithmi_background.png')} style={styles.backgroundImage}>                    
            <View style={styles.container}>
                <Text>Password Reset Screen</Text>
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
                <View style={styles.whitespace}/>
                <Button title="Reset Password" onPress={this.onResetPassword}  />
            </View>
            <View style={styles.links}>
            <View style={styles.whitespace}/>
            <TouchableHighlight onPress={this.onBackToLoginPress}>
                <Text style={styles.textButton}>Back To Login</Text>
            </TouchableHighlight>
            </View>
        </ImageBackground>
        )
    }
}

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