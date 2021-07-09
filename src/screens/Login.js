
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
class Login extends React.Component {
    state = {
        account: '',
        passWord: ''
    }
    ckeckLongin = () => {
        console.log(this.state);

        if (this.state.account == 'admin' && this.state.passWord == 'admin') {
            this.props.navigation.replace('Home')
        } else {
            alert('dang nhap that bai')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./image/clock.png')} resizeMode="contain" style={styles.image}></Image>
                <Text style={styles.text_login}>Đăng Nhập</Text>
                <View style={styles.boxLogin}>
                    <TextInput autoCapitalize={false} autoCorrect={false} placeholder={"Email hoặc số điện thoại"} style={styles.login} onChangeText={(value) => {
                        this.setState({ account: value })
                    }} ></TextInput>
                    <TextInput autoCapitalize={false} autoCorrect={false} placeholder="Mật khẩu" style={[styles.login, { marginTop: 15 }]} secureTextEntry={true} onChangeText={(value) => {
                        this.setState({ passWord: value })
                    }}></TextInput>
                </View>
                <View style={styles.boxLogin}>
                    <TouchableOpacity onPress={this.ckeckLongin} style={[styles.button, { marginTop: 30 }]}>
                        <Text style={{ color: '#000000', fontSize: 16 }}>Dang Nhap1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#3165EC', marginVertical: 15 }}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('CreateAccount')}
                    >

                        <Text>Dang Ky</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#72DFDF',
        alignItems: 'center'
    },
    image: {
        marginTop: 70,
        height: '20%',
        width: '43%'
    },
    text_login: {
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    boxLogin: {
        width: '100%',
        alignItems: 'center'
    },
    login: {
        height: 45,
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 15
    },
    button: {
        backgroundColor: '#1BADFF',
        height: 45,
        width: '75%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 5,
        elevation: 0.8,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    }
})