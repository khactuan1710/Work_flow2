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

import Header from './Header'

class Notify extends React.Component {
    state = {
        list_notify: [
            { id: '101', date: '*30/03/21: Đi học: 7:00 - 9:00 ', time_work: 'Thông báo trước 20 phút', notice: '' },
            { id: '102', date: '*02/04/21: Đi đá bóng: 17:00 - 18:00', time_work: 'Thông báo trước 15 phút', notice: '' },
            { id: '103', date: '*03/04/21: Đi học: 13:00 - 17:00', time_work: 'Thông báo trước 15 phút', notice: '' }
        ],
        time_notify: '',
        showing: false
    }
    // restTime = (id) => {
    //     var clone_list_notify = [...this.state.list_notify].map((item) => {

    //     })
    //     clone_list_notify.map((item, index) => {
    //         item.time_work = 'Thông báo trước ' + this.state.time_notify + ' phút'
    //     })
    //     this.setState({ list_notify: clone_list_notify })
    // }
    handlerType = (id, text) => {
        var clone_list_notify = [...this.state.list_notify].map(item => {
            if (item.id === id) item.notice = text;
            return item;
        })
        this.setState({ list_notify: clone_list_notify })
    }


    // component CardComponent , function , bien : addTime , NUMBER 
    // addTime() {
    // }
    render() {
        return (
            <View style={styles.container}>
                <Header name='Thong bao' {...this.props} />
                <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 22, color: '#1BADFF', fontWeight: 'bold', marginTop: 40 }}>Nhập thời gian thông báo</Text></View>

                <View style={styles.content}>
                    {
                        this.state.list_notify.map((item) =>
                            <View style={{ marginVertical: 20 }}>
                                <Text style={styles.date}>{item.date}</Text>
                                <TextInput placeholder="Nhập số phút thông báo"
                                    autoCapitalize={false}
                                    autoCorrect={false}
                                    style={styles.input_time}
                                    onChangeText={(text) => {
                                        // this.setState({ time_notify: text })
                                        this.handlerType(item.id, text);
                                        this.setState({
                                            showing: false
                                        })
                                    }}

                                ></TextInput>
                                {this.state.showing && <Text>Thông báo trước {item.notice} phút</Text>}
                            </View>
                        )
                    }

                    <TouchableOpacity style={{ height: 30, width: 70, backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => {
                            // this.restTime();
                            this.setState({ showing: true })
                        }}
                    >
                        <Text>Đổi</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

export default Notify;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        height: '75%',
        width: '100%',
        marginTop: 60,
        marginLeft: 20
    },
    date: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    input_time: {
        width: '90%',
        height: 50,
        borderRadius: 40,
        borderColor: '#1BADFF',
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF'
    }
})