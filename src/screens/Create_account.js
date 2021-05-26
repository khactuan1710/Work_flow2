
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

class CreateAccount extends React.Component {
    state = {
        name: '',
        telephone: '',
        password: '',
        confirmPassword: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => (this.props.navigation.goBack())}>
                        <Image source={require('./iconHome/back.png')} resizeMode="contain" style={[styles.onmenu, { tintColor: '#1BADFF' }]}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, marginLeft: 60 }}>Đăng ký tài khoản mới</Text>

                </View>

                <Image source={require('./image/clock.png')} resizeMode="contain" style={styles.image}></Image>
                <Text style={{ fontSize: 20, marginTop: 15 }}>Quản lý công việc</Text>
                <View style={{ height: 500, width: 300, }}>

                    <View style={styles.input}>
                        <Text >Họ và tên</Text>
                        <TextInput autoCapitalize={false} autoCorrect={false} placeholder={"Nhập họ và tên"} style={styles.login} onChangeText={(value) => {
                            this.setState({ account: value })
                        }} ></TextInput>
                    </View>

                    <View style={styles.input}>
                        <Text>Số điện thoại</Text>
                        <TextInput autoCapitalize={false} autoCorrect={false} placeholder={"Nhập số điện thoại"} style={styles.login} onChangeText={(value) => {
                            this.setState({ account: value })
                        }} ></TextInput>
                    </View>

                    <View style={styles.input}>
                        <Text>Mât khẩu</Text>
                        <TextInput autoCapitalize={false} autoCorrect={false} secureTextEntry={true} placeholder={"Nhập mật khẩu"} style={styles.login} onChangeText={(value) => {
                            this.setState({ account: value })
                        }} ></TextInput>
                    </View>

                    <View style={styles.input}>
                        <Text>Xác nhận mật khẩu</Text>
                        <TextInput autoCapitalize={false} autoCorrect={false} secureTextEntry={true} placeholder={"Nhập mật khẩu"} style={styles.login} onChangeText={(value) => {
                            this.setState({ account: value })
                        }} ></TextInput>
                    </View>

                    <TouchableOpacity onPress={this.ckeckLongin} style={[styles.button, { marginTop: 40 }]}>
                        <Text style={{ color: '#000000', fontSize: 16 }}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default CreateAccount;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#72DFDF',
        alignItems: 'center'
    },
    onmenu: {
        height: 55,
        width: 30,
    },
    header: {
        height: 88,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4'

    },
    image: {
        marginTop: 20,
        height: '15%',
        width: '35%'
    },
    input: {
        marginVertical: 10
    },
    login: {
        height: 45,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 15,
        marginTop: 5
    },
    button: {
        backgroundColor: '#1BADFF',
        height: 45,
        width: '100%',
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