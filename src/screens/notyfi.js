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

import CallApi from '../utils/apiCaller';

import Header from './Header'
import ItemNotyfi from '../components/ItemNotyfi'

class Notify extends React.Component {
    state = {
        // list_notify: [
        //     { id: '101', date: '*30/03/21: Đi học: 7:00 - 9:00 ', time_work: 'Thông báo trước 20 phút', notice: '' },
        //     { id: '102', date: '*02/04/21: Đi đá bóng: 17:00 - 18:00', time_work: 'Thông báo trước 15 phút', notice: '' },
        //     { id: '103', date: '*03/04/21: Đi học: 13:00 - 17:00', time_work: 'Thông báo trước 15 phút', notice: '' }
        // ],
        time_notify: 'ds',
        showing: false,
        workToday: [],
        notice: ''
    }
    // restTime = (id) => {
    //     var clone_list_notify = [...this.state.list_notify].map((item) => {

    //     })
    //     clone_list_notify.map((item, index) => {
    //         item.time_work = 'Thông báo trước ' + this.state.time_notify + ' phút'
    //     })
    //     this.setState({ list_notify: clone_list_notify })
    // }


    componentDidMount() {
        const unsubscribe = this.props.navigation.addListener('focus', (e) => {
            this.getData();

        })

        return unsubscribe
    }

    getData = () => {
        CallApi('congviec', 'GET', null).then(
            res => {
                this.setState({ workToday: res.data })

            }
        )
    }



    handlerType = (id, text) => {
        var clone_list_notify = [...this.state.workToday].map(item => {
            if (item.id === id) item.notice = text;
            return item;
        })
        this.setState({ list_notify: clone_list_notify })
    }

    onChangeText = () => {
        this.setState({ showing: false })
    }


    render() {
        return (
            <View style={styles.container}>
                <Header name='Thong bao' {...this.props} />
                <ScrollView>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 22, color: '#1BADFF', fontWeight: 'bold', marginTop: 40 }}>Nhập thời gian thông báo</Text></View>

                    <View style={styles.content}>
                        {
                            this.state.workToday.map((item) =>
                                <ItemNotyfi
                                    item={item}
                                    showing={this.state.showing}
                                    handlerType={this.handlerType}
                                    time_notify={this.state.time_notify}
                                    onChangeText={this.onChangeText}
                                />
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
                </ScrollView>
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

})