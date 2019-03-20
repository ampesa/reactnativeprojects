import React, {Component} from 'react';
import { View, Text, Image } from 'react-native'; 

export default class RithmiBackground extends Component {

    render(){
        return(
            <View style={ styles.container }>
                <Image source={require('../assets/images/rithmi_background.png')} style={styles.backgroundImage}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

})