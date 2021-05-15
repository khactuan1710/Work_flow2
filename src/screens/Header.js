import React from 'react'
import axios from 'axios'



import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

class CustomHeader extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => (this.props.navigation.openDrawer())}>
                    <Image source={require('./iconHome/onmenu.png')} resizeMode="contain" style={[styles.onmenu, { tintColor: '#1BADFF' }]}></Image>
                </TouchableOpacity>
                <Text style={styles.text_header}>{this.props.name}</Text>
                <Image source={require('./iconHome/clock.png')} style={styles.onmenu} resizeMode="contain"></Image>
            </View>
        )
    }
}
export default CustomHeader


const styles = StyleSheet.create({

    header: {
        height: 88,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    onmenu: {
        height: '55%',
        width: 30,
        marginTop: 10,
    },
    text_header: {
        color: '#1BADFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },

})