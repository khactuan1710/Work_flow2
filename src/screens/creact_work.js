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
    TouchableOpacity,
    AsyncStorage
} from 'react-native';


class Creact_work extends React.Component {
    state = {
        tenCongViec: '',
        timeStart: '',
        timeEnd: '',
        opjectData: [],
        isFinished: false
    }
    goBack = () => {
        this.props.navigation.goBack()
        console.log(this.state.id);
    }
    create_finish = async () => {
        const { tenCongViec, timeStart, timeEnd, opjectData, isFinished } = this.state
        const data = [...opjectData]
        const dataFil = {
            id: new Date().getTime(),
            nameWork: tenCongViec,
            timeStart: timeStart,
            timeEnd: timeEnd,
            isFinished: isFinished
        }
        data.push(dataFil)
        this.setState({ opjectData: data })
        this.props.navigation.navigate('Create_successfully')
        try {
            await AsyncStorage.setItem(
                'data_new_work',
                JSON.stringify(data)
            );
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={require('./iconHome/back.png')} resizeMode="contain" style={styles.onmenu}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.create_finish}>
                        <Image source={require('./iconHome/checkmark.png')} resizeMode='contain' style={styles.onmenu}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Text style={{ color: '#1BADFF', fontSize: 30, fontWeight: 'bold', marginTop: 30 }}>Công việc hôm nay</Text>

                    <TextInput style={styles.input_work} autoCapitalize={false} autoCorrect={false} placeholder="Nhập tên công việc" onChangeText={(value) => {
                        this.setState({ tenCongViec: value }), console.log(this.state.tenCongViec)
                    }} ></TextInput>

                    <TextInput style={[styles.input_time, { marginTop: 60 }]} autoCapitalize={false} autoCorrect={false} placeholder="Giờ bắt đầu" onChangeText={(value) => {
                        this.setState({ timeStart: value })
                    }}></TextInput>

                    <TextInput style={styles.input_time} autoCapitalize={false} autoCorrect={false} placeholder="Giờ kết thúc" onChangeText={(value) => {
                        this.setState({ timeEnd: value })
                    }}></TextInput>
                </View>
            </View>
        )
    }
}
export default Creact_work;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        marginTop: 10
    },
    text_header: {
        color: '#1BADFF',
        fontSize: 30,
        fontWeight: 'bold'
    },

    content: {
        height: '87%',
        alignItems: 'center'
    },
    input_work: {
        height: 45,
        width: 305,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#1BADFF',
        paddingLeft: 20,
        marginTop: 50
    },
    input_time: {
        height: 45,
        width: 305,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#1BADFF',
        borderRadius: 65,
        paddingLeft: 20,
        marginVertical: 20
    }
})
