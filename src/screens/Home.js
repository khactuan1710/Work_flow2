import { useRoute } from '@react-navigation/core';
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
import { withNavigationFocus } from "react-navigation";
import { TouchableHighlight } from 'react-native-gesture-handler';



class Home extends React.Component {
    state = {
        work_today1: [],
        work_tomorrow: [],
        work_someday: [],

    }

    //goi API
    // componentDidMount() {
    //     axios.get('https://609a39e80f5a13001721a54b.mockapi.io/congviec')
    //         .then(res => {
    //             const congviec = res.data;
    //             this.setState({ work_today1: congviec });
    //         })
    //         .catch(error => console.log(error));
    // }

    componentDidMount() {
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            this.getDataWork();
        })

        return unsubscribe
    }


    getDataWork = async () => {
        try {
            const data = await AsyncStorage.getItem('data_new_work');
            if (data !== null) {
                const newWorks = JSON.parse(data);
                this.setState({ work_today1: newWorks })
                console.log(valuew)

                // console.log(typeof this.state.work_today1);
                // console.log(this.state.work_today1);
                // console.log(typeof this.state.work_today);
                // console.log(this.state.work_today);
                // console.log(valuew[0].nameWork)
                // console.log(valuew[0].timeStart);
                // console.log(valuew.length);
                // var workToday = [...this.state.work_today]
                // workToday[0].tenCongViec = valuew[0].nameWork
                // workToday[0].timeStart = valuew[0].timeStart
                // workToday[0].timeEnd = valuew[0].timeEnd
                // this.setState({ work_today: workToday })


            }
        } catch (error) {
            console.log(error);
        }
    }

    clear_work = (id) => {
        var cloneWorkToday = [...this.state.work_today1]
        // console.log(this.state.work_today1);
        const index = cloneWorkToday.findIndex(item => item.id === id);
        if (index !== -1) {
            cloneWorkToday.splice(index, 1);
            this.setState({ work_today1: cloneWorkToday })
            AsyncStorage.setItem('data_new_work', JSON.stringify(cloneWorkToday));
        }
    }

    resertWork = () => {
        this.props.navigation.navigate('Create_work')
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.props.navigation.navigate('drawer')}>
                            <Image source={require('./iconHome/onmenu.png')} resizeMode="contain" style={styles.onmenu}></Image>
                        </TouchableOpacity>
                        <Text style={styles.text_header}>Work flow</Text>
                        <Image source={require('./iconHome/clock.png')} style={styles.onmenu} resizeMode="contain"></Image>
                    </View>
                    <View style={styles.content}>

                        <Text style={styles.text_content}>Hôm nay</Text>

                        {
                            this.state.work_today1.map((item, index) =>
                                <View style={styles.work}>
                                    <View style={styles.a_work}>
                                        <TouchableOpacity style={styles.button_finish}></TouchableOpacity>
                                        {/* <Text style={styles.text_work}>{item.nameWork} {item.timeStart} - {item.timeEnd}</Text> */}
                                        <TouchableHighlight onPress={this.resertWork}>
                                            <Text style={styles.text_work}>{item.nameWork} {item.timeStart} - {item.timeEnd}</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <TouchableOpacity style={styles.button_clear_work} onPress={() => this.clear_work(item.id)}><Image source={require('./iconHome/remove.png')} style={styles.text_clear}></Image></TouchableOpacity>
                                </View>

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
                </View>
            </ScrollView>
        )
    }
}


export default Home

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
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
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
    button_finish: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
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
