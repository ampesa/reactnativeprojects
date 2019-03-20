import React from 'react';
import {
  Image, 
  Platform, 
  ScrollView, 
  StyleSheet, 
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity, 
  View, 
  Button,
  ImageBackground,
  Alert
} from 'react-native';

import { TestComponent } from './../components/AppComponents';

import * as firebase from 'firebase';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <ImageBackground source={require('./../assets/images/rithmi_background.png')} style={styles.backgroundImage}>                    
        <View style={styles.container}>
          <Text>Main Screen</Text>
          <Image source={require('./../assets/images/rithmi_transparent_logo.png')} />
          <View style={styles.whitespace}/>                       
          <Text style={styles.wellcomeText}>Welcome To Rithmi!</Text>
          <View style={styles.whitespace}/>
          <View style={styles.whitespace}/>          
        </View>
        <View style={styles.links}>
          <View style={styles.whitespace}/>
          <Button title="SignOut" onPress={this.onSignoutPress} />
        </View>
      </ImageBackground>
    );
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
wellcomeText: {
    fontSize: 40,
    color: 'grey'
},
links: {
    flex: 1,
    marginLeft: 35,
    marginRight: 35,
}
});
