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

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
        };
    }

    onSignupPress = () => {
        // if paswords do not match, user will be alerted and method execution ended
        if (this.state.password !== this.state.passwordConfirmation){
            Alert.alert('Passwords do not match');
            return;
        }

        // on error user will be alerted and on success will be managed from App.js where firebase is listening for auth changes
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { 
                Alert.alert('Congratulations you created a new account and are logged as ' + this.state.email)
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
                <Text>Signup Screen</Text>
                <View style={styles.whitespace}/> 
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
                <TextInput style={styles.input} 
                    value = {this.state.passwordConfirmation} 
                    onChangeText = {(text) => {this.setState({passwordConfirmation: text}) }}
                    placeholder = 'Password (confirm)'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <View style={styles.whitespace}/>
                <View style={styles.whitespace}/>
                <Button title="Signup" onPress={this.onSignupPress}  />
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
        flex: .6,
        alignItems: 'center',
    }
})