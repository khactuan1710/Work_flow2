import { useRoute } from '@react-navigation/core';
import React from 'react';
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
    TouchableOpacity
} from 'react-native';



class Creact_successfully extends React.Component {



    goBack = () => {
        this.props.navigation.goBack()
    }
    state = {
        name: ''
    }


    home = () => {
        this.props.navigation.navigate('home', { tenCongViec: this.state.name })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tạo công việc thành công</Text>
                <View>
                    <TouchableOpacity style={[styles.button, { marginTop: 100 }]} onPress={this.goBack}>
                        <Text style={styles.text_button}>Tạo tiếp công việc?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.home}>
                        <Text style={styles.text_button}>
                            Quai lại trang chủ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Creact_successfully
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        color: '#1BADFF',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 80
    },
    button: {
        height: 60,
        width: 300,
        borderRadius: 35,
        backgroundColor: '#1BADFF',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_button: {
        fontSize: 25,

    }
})