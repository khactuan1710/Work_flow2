import { useRoute } from '@react-navigation/core';
import React from 'react'
import axios from 'axios'

import Header from './Header'

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
import { withNavigationFocus } from "react-navigation";
import { TouchableHighlight } from 'react-native-gesture-handler';
import CallApi from '../utils/apiCaller';

import ItemWork from '../components/ItemWork'


class Home extends React.Component {
    state = {
        work_today1: [],
        work_tomorrow: [],
        work_someday: [],

    }



    componentDidMount() {
        const unsubscribe = this.props.navigation.addListener('focus', (e) => {
            this.getData();

        })

        return unsubscribe
    }

    getData = () => {
        CallApi('congviec', 'GET', null).then(
            res => {
                this.setState({ work_today1: res.data })

            }
        )
    }





    clear_work = (id) => {
        var cloneWorkToday = [...this.state.work_today1]
        console.log(id);
        const index = cloneWorkToday.findIndex(item => item.id === id);
        CallApi(`congviec/${id}`, 'DELETE', null).then(res => {
            if (index !== -1) {
                cloneWorkToday.splice(index, 1);
                this.setState({ work_today1: cloneWorkToday })
                AsyncStorage.setItem('data_new_work', JSON.stringify(cloneWorkToday));
                console.log(index)
            }
        })

    }

    resertWork = () => {
        this.props.navigation.navigate('Create_work')
    }

    FinishedItem = (id) => {
        var newTaskList = [...this.state.work_today1];
        console.log(id, 'id');
        const index = newTaskList.findIndex(item => item.id === id)
        if (newTaskList[index].isFinished == true) {
            newTaskList[index].isFinished = false
        } else {
            newTaskList[index].isFinished = true
        }

        this.setState({ work_today1: newTaskList })




        // newTaskList[index].isFinished = true; 
        // this.setState({ data: newTaskList });
    }

    render() {
        return (

            <View style={styles.container}>
                <Header {...this.props} name='Danh Sách Công việc' />
                <ScrollView>
                    <View style={styles.content}>

                        <Text style={styles.text_content}>Hôm nay</Text>

                        {
                            this.state.work_today1.map((item, index) => {
                                return (
                                    <ItemWork item={item}
                                        FinishedItem={this.FinishedItem}
                                        resetWork={this.resertWork}
                                        clear_work={this.clear_work}
                                    />
                                )
                            }
                            )
                        }
                        <Text style={styles.text_content}>Ngày mai</Text>
                        {
                            this.state.work_tomorrow.map((item) =>
                                <View style={styles.work}>
                                    <View style={styles.a_work}>
                                        <TouchableOpacity style={styles.button_finish}></TouchableOpacity>
                                        <Text style={styles.text_work}>{item.name_work}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.button_clear_work} ><Image source={require('./iconHome/remove.png')} style={styles.text_clear}></Image></TouchableOpacity>
                                </View>
                            )
                        }
                        <Text style={styles.text_content}>Ngày bất kì</Text>
                        {
                            this.state.work_someday.map((item) =>
                                <View style={styles.work}>
                                    <View style={styles.a_work}>
                                        <TouchableOpacity style={styles.button_finish}></TouchableOpacity>
                                        <Text style={styles.text_work}>{item.name_work}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.button_clear_work}><Image source={require('./iconHome/remove.png')} style={styles.text_clear}></Image></TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    iconFinished: {
        height: 20,
        width: 20
    },
    content: {
        height: '87%',
        width: '90%',
        marginTop: 20,
        marginHorizontal: 20,

    },

    text_content: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#1BADFF',
        marginVertical: 15,
    },
    work: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    a_work: {
        flexDirection: 'row',
        height: 20,
        alignItems: 'center',
        marginVertical: 10,
    },
    text_work: {
        fontSize: 15,
        marginLeft: 10,

    },
    button_clear_work: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text_clear: {
        height: 20,
        width: 20
    }

})
