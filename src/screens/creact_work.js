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
    AsyncStorage,
    TouchableHighlight,
    Switch
} from 'react-native';
import axios from 'axios';
import moment from 'moment'
import DateTimePicker from 'react-native-modal-datetime-picker'
import CallApi from '../utils/apiCaller'
import { ThemeProvider } from '@react-navigation/native';





class Creact_work extends React.Component {
    state = {
        id: '',
        tenCongViec: '',
        timeStart: '',
        timeEnd: '',
        notice: '',
        opjectData: [],
        isFinished: false,
        chosenDate: '',
        toggled: false,
        selectTime: [
            { id: '1', timeStartorTimeEnd: 'Giờ bắt đầu', isVisible: false, },
            { id: '2', timeStartorTimeEnd: 'Giờ kết thúc', isVisible: false, }
        ],
        showInputTime: false,
        showTextNotyfi: false
    }
    goBack = () => {
        this.props.navigation.goBack()
    }




    toggleSwitch = () => {
        this.setState({ toggle: value })
    }



    handlePicker = (time) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(time).format('HH:mm'),

        })
    }
    showPicker = () => {
        this.setState({ isVisible: true })
    }
    showPicker = () => {
        this.setState({ isVisible: true })
    }
    hidePicker = () => {
        this.setState({
            isVisible: false,
        })
    }


    onSave = (e) => {

        e.preventDefault();
        if (this.state.tenCongViec === '') {
            this.setState({ showTextNotyfi: true })
        } else {
            CallApi('congviec', 'POST', {

                name: this.state.tenCongViec,
                notice: this.state.notice,
                timeStart: this.state.chosenDate

            }).then(res => {
                this.props.navigation.navigate('Create_successfully')
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={require('./iconHome/back.png')} resizeMode="contain" style={styles.onmenu}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onSave} >
                        <Image source={require('./iconHome/checkmark.png')} resizeMode='contain' style={styles.onmenu} ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#1BADFF', fontSize: 30, fontWeight: 'bold', marginTop: 30 }}>Công việc hôm nay</Text>

                        <TextInput style={styles.input_work} autoCapitalize={false} autoCorrect={false} placeholder="Nhập tên công việc" clearTextOnFocus={true} onChangeText={(value) => {
                            this.setState({ tenCongViec: value, showTextNotyfi: false })
                        }} ></TextInput>



                        {
                            this.state.showTextNotyfi &&
                            <View style={{ flexDirection: 'row', marginLeft: -45, marginTop: 10 }}>
                                <Image source={require('./iconCreateWork/iconthongbao.png')} resizeMode='contain' style={{ height: 16, width: 16, tintColor: 'red' }}></Image>
                                <Text style={{ color: 'red', marginLeft: 10 }}>Tên công việc không được bỏ trống</Text>
                            </View>
                        }


                    </View>

                    <View style={{ marginTop: 20 }}>
                        {
                            this.state.selectTime.map((item, index) =>
                                <View>
                                    <View style={styles.showTime}>
                                        <Text style={{ fontSize: 18 }}>{item.timeStartorTimeEnd}</Text>
                                        <TouchableHighlight onPress={
                                            this.showPicker
                                        } style={styles.boxTime}>
                                            <Text>{this.state.chosenDate} </Text>
                                        </TouchableHighlight>

                                    </View>
                                    <DateTimePicker
                                        isVisible={this.state.isVisible}
                                        onConfirm={this.handlePicker}
                                        onCancel={this.hidePicker}
                                        mode={'time'}
                                        date={new Date()}
                                        headerTextIOS='Chọn giờ'
                                        cancelTextIOS='Huỷ'
                                        confirmTextIOS='Chọn'
                                        is24Hour={true}

                                    />
                                </View>
                            )
                        }
                    </View>

                    <View style={styles.showTime}>
                        <Text style={{ fontSize: 18 }}>Thong bao</Text>
                        <View style={{ marginLeft: 20 }} >
                            <Switch

                                trackColor={{ false: "#767577", true: "#3d8bbf" }}
                                thumbColor={this.state.toggled ? "blue" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                value={this.state.toggled}
                                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                                onValueChange={(value) => {
                                    return (
                                        this.setState({ toggled: value })
                                    )
                                }}

                                onChange={() => {
                                    this.state.toggled === true ? this.setState({ showInputTime: false }) : this.setState({ showInputTime: true })
                                }}

                            />
                        </View>
                    </View>

                    {
                        this.state.showInputTime &&
                        <View style={{ marginTop: 25, width: '100%', alignItems: 'center' }}>
                            <TextInput placeholder="Nhập số phút thông báo"
                                autoCapitalize={false}
                                autoCorrect={false}
                                style={styles.input_time}
                                onChangeText={(text) => {
                                    this.setState({ notice: text })
                                }}

                            ></TextInput>
                        </View>
                    }

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
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
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
    },
    input_work: {
        height: 45,
        width: 305,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#1BADFF',
        paddingLeft: 20,
        marginTop: 50,
        borderRadius: 65,
    },
    showTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 20
    },
    boxTime: {
        backgroundColor: '#ffffff',
        marginLeft: 20,
        height: 35,
        width: 100,
        borderWidth: 1,
        borderColor: '#1BADFF',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10
    },
    input_time: {
        width: 305,
        height: 45,
        borderRadius: 65,
        borderColor: '#1BADFF',
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF'
    }
})
